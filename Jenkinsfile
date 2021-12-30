pipeline {
  agent any

  stages {
    stage('Deploy') {
      when {
        allOf {
          not { changeRequest() }
          branch 'main'
        }
      }

      steps {
        sh '''
          ssh unistory-landing 'cd /home/Unistory-landing && mkdir -p new-dist'
          scp -r dist/* unistory-landing:/home/Unistory-landing/new-dist
          ssh unistory-landing 'cd /home/Unistory-landing && rm -r dist && mv new-dist dist'
        '''
        script {
          slackSend channel: "unistorylanding", color: "good", message: "New ${env.BRANCH_NAME} build was deployed successfully: https://unistory.app/"
        }
      }
    }
  }

  post {
    failure {
      script {
        if (env.BRANCH_NAME == "main") {
          slackSend channel: "unistorylanding", color: "danger", message: "Build for ${env.BRANCH_NAME} branch is failing." 
        }
      }
    }
  }
}

