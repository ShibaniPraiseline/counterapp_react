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
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test -- --watchAll=false'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying React Counter App...'
                // Example for Windows deployment (if IIS or folder copy):
                // bat 'xcopy /E /I /Y build C:\\inetpub\\wwwroot\\counterapp'
            }
        }
    }
}
