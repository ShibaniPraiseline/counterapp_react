pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/ShibaniPraiseline/counterapp_react.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying React Counter App...'
                // Example: copy build folder to a server or cloud storage
                // sh 'scp -r build/* user@server:/var/www/html/'
            }
        }
    }
}
