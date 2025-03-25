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
    stage('Build') {
      when {
        allOf {
          not {
            changeRequest()
          }
          anyOf {
            branch 'master'
            branch 'main'
            branch 'stage'
            branch 'development'
            branch 'dev'
          }
        }
      }

      steps {
        script {
            sh """
              case \$BRANCH_NAME in
                development | dev)
                  BUILD_ENV=development
                  ;;
                stage)
                  BUILD_ENV=staging
                  ;;
                master | main)
                  BUILD_ENV=production
                  ;;
                *)
                  BUILD_ENV=development
                  ;;
              esac

              docker build . \
                -f Dockerfile \
                --build-arg build_env=\${BUILD_ENV} \
                -t ${GIT_REPO_NAME}.\${BRANCH_NAME} \
                -t ${GIT_REPO_NAME}.\${BRANCH_NAME}:\${BUILD_NUMBER} \
                -t \${REGISTRY_HOST}/${GIT_REPO_NAME}.\${BRANCH_NAME} \
                -t \${REGISTRY_HOST}/${GIT_REPO_NAME}.\${BRANCH_NAME}:\${BUILD_NUMBER} \
                -t ${GIT_REPO_NAME}-\${BRANCH_NAME} \
                -t ${GIT_REPO_NAME}-\${BRANCH_NAME}:\${BUILD_NUMBER} \
                -t \${REGISTRY_HOST}/${GIT_REPO_NAME}-\${BRANCH_NAME} \
                -t \${REGISTRY_HOST}/${GIT_REPO_NAME}-\${BRANCH_NAME}:\${BUILD_NUMBER}

              docker push -a \${REGISTRY_HOST}/${GIT_REPO_NAME}.\${BRANCH_NAME}
            """

          if (env.BRANCH_NAME == "master" || env.BRANCH_NAME == "main") {
            slackSend channel: env.SLACK_CHANNEL, color: "good", message: "Production build success"
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
                submitter 'isokolov, dsemyonov, nbobkov, zdoroshenko'
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
                slackSend channel: env.SLACK_CHANNEL, color: "good", message: "Build for ${GIT_REPO_NAME}/${BRANCH_NAME} is successfull"
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
            slackSend channel: env.SLACK_CHANNEL, color: "good", message: "Build for ${GIT_REPO_NAME}/${BRANCH_NAME} is successfull"
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
          slackSend channel: env.SLACK_CHANNEL, color: "good", message: "Build for ${GIT_REPO_NAME}/${BRANCH_NAME} is successfull"
        }
      }
    }
  }
}
