pipeline {
  agent any
  environment {
    REGISTRY_HOST = credentials('docker-registry-host')
    REGISTRY_HOST_REMOTE = credentials('docker-registry-domain')
    JENKINS_SERVER = credentials('jenkins-server')
    GIT_REPO_NAME = env.GIT_URL.replaceFirst(/^.*\/([^\/]+?).git$/, '$1').toLowerCase().trim()
    SLACK_CHANNEL = 'C02AMRAM64R'
  }

  stages {
    stage ('Check build') {
      when { changeRequest() }

      steps {
        build_pr('unistory-node', 16)
      }
    }

    stage('Build') {
      when {
        allOf {
          not {
            changeRequest()
          }
          anyOf {
            branch 'master'
            branch 'main'
            branch 'dev'
            branch 'development'
          }
        }
      }

      steps {
        build_image()
        script {
          if (env.BRANCH_NAME == "master" || env.BRANCH_NAME == "main") {
            notify_slack('Production build success')
          }
        }
      }
    }

    stage('Start') {
      parallel {
        stage('Prod') {
          when {
            allOf {
              not {
                changeRequest()
              }
              anyOf {
                branch 'main'
                branch 'master'
              }
            }
          }

          stages {
            stage('Approve') {
              input {
                message 'Deploy this build?'
                ok 'Yes'
                submitter 'ismirnov, dsemyonov, nbobkov'
              }

              environment {
                COMPOSE_PROJECT_NAME = 'unistory-landing-prod'
                PRODUCTION_URL = 'https://unistory.app'
                ENV_FILE = '.env.production'
              }

              steps {
                sh '''
                  echo REGISTRY_HOST=${REGISTRY_HOST} >> ${ENV_FILE}
                  echo GIT_REPO_NAME=${GIT_REPO_NAME} >> ${ENV_FILE}
                  echo BRANCH_NAME=${BRANCH_NAME} >> ${ENV_FILE}
                  echo COMPOSE_PROJECT_NAME=${COMPOSE_PROJECT_NAME} >> ${ENV_FILE}

                  if [ "\$(docker-compose -f docker-compose.prod.yml port traefik 80)" ]; then
                    IMAGE_PREVIOUS_PORT="\$(docker-compose -f docker-compose.prod.yml port traefik 80 | egrep "[0-9]+\$" -o)"
                  fi

                  if [ -z "\${IMAGE_PREVIOUS_PORT}" ]; then
                    WEB_PORT=80 \
                      docker-compose -f docker-compose.prod.yml --env-file ${ENV_FILE} up -d
                  else
                    WEB_PORT="\${IMAGE_PREVIOUS_PORT}:80" \
                      docker-compose -f docker-compose.prod.yml --env-file ${ENV_FILE} up -d
                  fi
                '''
                notify_slack("Production deployment success")
              }
            }
          }
        }

        stage('Dev') {
          when {
            allOf {
              not {
                changeRequest()
              }
              anyOf {
                branch 'dev'
                branch 'development'
              }
            }
          }

          environment {
            COMPOSE_PROJECT_NAME = 'unistory-landing-dev'
            ENV_FILE = '.env.development'
          }

          steps {
            script {
              sh """
                echo REGISTRY_HOST=${REGISTRY_HOST} >> ${ENV_FILE}
                echo GIT_REPO_NAME=${GIT_REPO_NAME} >> ${ENV_FILE}
                echo BRANCH_NAME=${BRANCH_NAME} >> ${ENV_FILE}
                echo COMPOSE_PROJECT_NAME=${COMPOSE_PROJECT_NAME} >> ${ENV_FILE}

                if [ "\$(docker-compose port traefik 80)" ]; then
                  IMAGE_PREVIOUS_PORT="\$(docker-compose port traefik 80 | egrep "[0-9]+\$" -o)"
                fi

                if [ -z "\${IMAGE_PREVIOUS_PORT}" ]; then
                  WEB_PORT=80 \
                    docker-compose --env-file ${ENV_FILE} up -d
                else
                  WEB_PORT="\${IMAGE_PREVIOUS_PORT}:80" \
                    docker-compose --env-file ${ENV_FILE} up -d
                fi
              """
            }
            notify_slack("Traefik startup success")
          }
        }
      }
    }
  }

  post {
    failure {
      script {
        if (
          env.BRANCH_NAME == "dev" ||
          env.BRANCH_NAME == "development" ||
          env.BRANCH_NAME == "master" ||
          env.BRANCH_NAME == "main"
         ) {
          notify_slack('Build failure')
        }
      }
    }
  }
}

