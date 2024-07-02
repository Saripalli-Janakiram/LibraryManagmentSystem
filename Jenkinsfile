pipeline {
    agent {
        docker { image 'docker:latest' }
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials-id')
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Saripalli-Janakiram/LibraryManagmentSystem.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('library-management-system:latest')
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    def app = docker.image('library-management-system:latest')
                    app.run('-d -p 8080:8080 --name k8s_kube-controller-manager_kube-controller-manager-docker-desktop_kube-system_815abf9efdec70808b2f2e38e47476ca_1')
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'DOCKERHUB_CREDENTIALS') {
                        def customImage = docker.build('janakiramsaripalli/library-management-system:latest')
                        customImage.push()
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                try {
                    def app = docker.image('library-management-system:latest')
                    app.stop()
                } catch (Exception e) {
                    echo "Container already stopped."
                }
            }
        }

        cleanup {
            cleanWs()
        }
    }
}
