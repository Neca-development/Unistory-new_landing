pipeline {
  agent any

  environment {
    GIT_REPO_NAME = env.GIT_URL.replaceFirst(/^.*\/([^\/]+?).git$/, '$1').toLowerCase()
    REGISTRY_HOST = credentials('docker-registry-host')
    JENKINS_SERVER = credentials('jenkins-server')
    SLACK_CHANNEL = "unistorylanding_ci"
  }

  stages {
    stage('Build & Deploy') {
      parallel {
        stage('main') {
          when {
            allOf {
              not { changeRequest() }
              branch 'main'
            }
          }

          steps {
            sh '''
              rm -rf dist
              rm -rf node_modules
              npm i
              npm run build-prod
              ssh unistory-landing 'cd /home/Unistory-landing && mkdir -p new-dist'
              scp -r dist/* unistory-landing:/home/Unistory-landing/new-dist
              ssh unistory-landing 'cd /home/Unistory-landing && rm -r dist && mv new-dist dist'
            '''
            script {
              slackSend channel: "unistorylanding_ci", color: "good", message: "New ${env.BRANCH_NAME} build was deployed successfully: https://unistory.app/"
            }
          }
        }

        stage('refactoring') {
          when {
            allOf {
              not { changeRequest() }
              branch 'refactoring'
            }
          }

          environment {
            IMAGE_PREVIOUS_PORT = sh(returnStdout: true, script: 'docker port $GIT_REPO_NAME-$BRANCH_NAME | egrep [0-9]+$ -o | head -1').trim()
          }

          steps {
            sh '''
              docker build . -t ${GIT_REPO_NAME}.${BRANCH_NAME} -t ${REGISTRY_HOST}/${GIT_REPO_NAME}.${BRANCH_NAME}
              docker push ${REGISTRY_HOST}/${GIT_REPO_NAME}.${BRANCH_NAME}
            '''
            sh '''
              IMAGE_EXPOSED_PORT=`docker inspect ${REGISTRY_HOST}/${GIT_REPO_NAME}.${BRANCH_NAME} --format="{{json .Config.ExposedPorts}}" | egrep [0-9]+ -o | head -1`
              if [ -z "$IMAGE_PREVIOUS_PORT" ]; then
                  docker run -d --name ${GIT_REPO_NAME}-${BRANCH_NAME} -p ${IMAGE_EXPOSED_PORT} ${REGISTRY_HOST}/${GIT_REPO_NAME}.${BRANCH_NAME}
              else
                  docker run -d --name ${GIT_REPO_NAME}-${BRANCH_NAME} -p $IMAGE_PREVIOUS_PORT:${IMAGE_EXPOSED_PORT} ${REGISTRY_HOST}/${GIT_REPO_NAME}.${BRANCH_NAME}
              fi
            '''
          }
        }
      }
    }
  }

  post {
    failure {
      script {
        if (env.BRANCH_NAME == "main") {
          slackSend channel: "${env.SLACK_CHANNEL}", color: "danger", message: "Build for ${env.BRANCH_NAME} branch is failing."
        }
      }
    }
  }
}

