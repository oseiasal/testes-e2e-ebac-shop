pipeline {
    agent any

    stages {
        stage('Clonar repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/oseiasal/testes-e2e-ebac-shop.git'
            }
        }
        
         stage('Instalar dependências') {
            steps {
               sh 'npm install'
            }
        }
        
         stage('Executar testes') {
            steps {
                sh 'NO_COLOR=1 npm run cy:run'
            }
        }
    }
}
