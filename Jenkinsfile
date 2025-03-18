@Library('dca-jenkins-lib@release-1.9.2') _

pipeline {
    agent {
        docker {
            image '925741509387.dkr.ecr.us-west-2.amazonaws.com/dca-node-kubernetes:release-7.0.1'
            label 'kube'
        }
    }
    parameters {
        choice(name: 'RELEASE_ENV', description: 'Target env to deploy release build to.', 
            choices: ['dev', 'prod'])
        choice(name: "ENV", description: "Which EKS environment to deploy kube2iam to?",
            choices: ['nonprod', 'prod'])
        choice(name: 'COLOR', description: 'Specify it the deployment is blue or green',
            choices: ['blue', 'green'])
        choice(name: 'ACTION', description: 'CloudFormation action',
            choices: ['none', 'create/update' , 'delete'])
        // choice(name: 'SUSPEND', description: 'Disable Cronjob', choices: ['False', 'True'])
        }

    environment {
        DOCKER_REPOSITORY = 'pge-fe-mono'
        ECR_HOST = '925741509387.dkr.ecr.us-west-2.amazonaws.com'
        DOCKER_REPO_PORTAL = 'pge-fe-portal'
        // CRON_SCHEDULE = '*/5 * * * *'
        AWS_REGION = 'us-west-2'
        KUBERNETES_NAMESPACE = 'kube-system'
        KUBERNETES_URL = fetchSecret(secretId: "eks-${params.ENV}-${params.COLOR}", jqQuery: '.eksapiserverurl')
        KUBERNETES_CERT = fetchSecret(secretId: "eks-${params.ENV}-${params.COLOR}", jqQuery: '.ekscert')
        KUBERNETES_TOKEN = fetchSecret(secretId: "eks-common-sa-token-${params.ENV}-${params.COLOR}", jqQuery: '.namespacetoken')
        KUBERNETES_USER = fetchSecret(secretId: "eks-common-sa-token-${params.ENV}-${params.COLOR}", jqQuery: '.eksuser')
        _ARTIFACTORY_PYPI_TOKEN = fetchSecret(secretId: 'artifactory-arad-service-read', jqQuery: '.password')
        ARTIFACTORY_NPM_TOKEN = fetchSecret(secretId: 'artifactory-arad-service-read-npm', jqQuery: '.token')
    }
    stages{
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        // stage('Lint docker') {
        //     steps {
        //         hadolint(filePath: './Dockerfile.vasa')
        //     }
        // }
        stage('Build') {
            steps {
            script {
                    sh "docker build -t ${DOCKER_REPOSITORY}:${env.GIT_COMMIT} -f Dockerfile.vasa . \
                        --build-arg _ARTIFACTORY_NPM_TOKEN=${env.ARTIFACTORY_NPM_TOKEN}"
                    }
                }
        }
        stage('Build-dai-portal') {
            steps {
            script {
                    sh "docker build -t ${DOCKER_REPO_PORTAL}:${env.GIT_COMMIT} -f Dockerfile.dai-portal . \
                        --build-arg _ARTIFACTORY_NPM_TOKEN=${env.ARTIFACTORY_NPM_TOKEN}"
                    }
                }
        }
        stage('Build yaml file with parameters') {
            steps {
                script {
                    // update environment variables for YAML
                    if ("${params.ENV}" == "nonprod" && "${params.COLOR}" == "green") {
                         kubeSubst("env", "${params.RELEASE_ENV}", "pge-fe-mono.yaml")
                         kubeSubst("version", "${env.GIT_COMMIT}", "pge-fe-mono.yaml")
                         kubeSubst("cluster_env", "${params.ENV}", "pge-fe-mono-kube2iam.yaml")
                         kubeSubst("env", "${params.RELEASE_ENV}", "pge-fe-mono-kube2iam.yaml")
                          kubeSubst("security_group", "sg-0e575cf72f18c3af9", "pge-fe-mono.yaml")
                         kubeSubst("group_name", "aradnonprod", "pge-fe-mono.yaml")
                         kubeSubst("subnets", "subnet-e40209bc,subnet-37bf087e,subnet-90741de9", "pge-fe-mono.yaml")                   
                         kubeSubst("cert_arn", "arn:aws:acm:us-west-2:925741509387:certificate/1a0ffe1b-3e4a-4d55-8770-09f294834964","pge-fe-mono.yaml")
                         kubeSubst("domain_name", "pge-fe-mono.dca.pge.com", "pge-fe-mono.yaml")
                         
                    }
                    if ("${params.ENV}" == "nonprod" && "${params.COLOR}" == "blue") {
                         kubeSubst("env", "${params.RELEASE_ENV}", "pge-fe-mono.yaml")
                         kubeSubst("version", "${env.GIT_COMMIT}", "pge-fe-mono.yaml")
                         kubeSubst("cluster_env", "${params.ENV}", "pge-fe-mono-kube2iam.yaml")
                         kubeSubst("env", "${params.RELEASE_ENV}", "pge-fe-mono-kube2iam.yaml")
                         kubeSubst("security_group", "sg-0e575cf72f18c3af9", "pge-fe-mono.yaml")
                         kubeSubst("group_name", "aradnonprod", "pge-fe-mono.yaml")
                         kubeSubst("subnets", "subnet-e40209bc,subnet-37bf087e,subnet-90741de9", "pge-fe-mono.yaml")                   
                         kubeSubst("cert_arn", "arn:aws:acm:us-west-2:925741509387:certificate/1a0ffe1b-3e4a-4d55-8770-09f294834964","pge-fe-mono.yaml")
                         kubeSubst("domain_name", "pge-fe-mono.dca.pge.com", "pge-fe-mono.yaml")
                         kubeSubst("domain_name_portal", "pge-fe-portal-dev.dca.pge.com", "pge-fe-mono.yaml")
                         kubeSubst("cert_arn_portal", "arn:aws:acm:us-west-2:925741509387:certificate/043aa4a7-6bbc-4776-8901-906c7aef5263","pge-fe-mono.yaml")
                    }
                    if ("${params.ENV}" == "prod" && "${params.COLOR}" == "green") {
                         kubeSubst("env", "${params.RELEASE_ENV}", "pge-fe-mono.yaml")
                         kubeSubst("version", "${env.GIT_COMMIT}", "pge-fe-mono.yaml")
                         kubeSubst("cluster_env", "${params.ENV}", "pge-fe-mono-kube2iam.yaml")
                         kubeSubst("env", "${params.RELEASE_ENV}", "pge-fe-mono-kube2iam.yaml")
                         kubeSubst("security_group", "sg-0bbab7a21ade6ebe5", "pge-fe-mono.yaml")
                         kubeSubst("group_name", "aradprod", "pge-fe-mono.yaml")
                         kubeSubst("subnets", "subnet-57920f30,subnet-c9bf0880,subnet-e60209be", "pge-fe-mono.yaml")                   
                         kubeSubst("cert_arn", "arn:aws:acm:us-west-2:925741509387:certificate/57dedbc5-85e1-4369-aecd-c7f2575391a9","pge-fe-mono.yaml")
                         kubeSubst("domain_name", "pge-fe-mono-prod.dca.pge.com", "pge-fe-mono.yaml")
                    }
                    if ("${params.ENV}" == "prod" && "${params.COLOR}" == "blue") {
                         kubeSubst("env", "${params.RELEASE_ENV}", "pge-fe-mono.yaml")
                         kubeSubst("version", "${env.GIT_COMMIT}", "pge-fe-mono.yaml")
                         kubeSubst("cluster_env", "${params.ENV}", "pge-fe-mono-kube2iam.yaml")
                         kubeSubst("env", "${params.RELEASE_ENV}", "pge-fe-mono-kube2iam.yaml")
                         kubeSubst("security_group", "sg-0bbab7a21ade6ebe5", "pge-fe-mono.yaml")
                         kubeSubst("group_name", "aradprod", "pge-fe-mono.yaml")
                         kubeSubst("subnets", "subnet-57920f30,subnet-c9bf0880,subnet-e60209be", "pge-fe-mono.yaml")                   
                         kubeSubst("cert_arn", "arn:aws:acm:us-west-2:925741509387:certificate/57dedbc5-85e1-4369-aecd-c7f2575391a9","pge-fe-mono.yaml")
                         kubeSubst("domain_name", "pge-fe-mono-prod.dca.pge.com", "pge-fe-mono.yaml")
                    }

                }
            }
        }

        stage('Create Kube2iam Role') {
             when {
                allOf {
                    expression {params.ACTION == 'create/update'}
                    // branch 'develop';
                    // tag 'release-*'
                }
            }
            steps {
                sh """
                    set -x
                    aws cloudformation deploy \
                    --stack-name pge-ds-api-${params.ENV}-role \
                    --region ${env.AWS_REGION} \
                    --template-file pge-fe-mono-kube2iam.yaml \
                    --capabilities CAPABILITY_NAMED_IAM \
                    --tags \
                    Name=pge-fe-mono-${params.ENV} \
                    AppID=APP-2741 \
                    Environment=${params.ENV} \
                    Notify=foundation@pge.com \
                    Order="70041444" \
                    Org="Data and Analytics" \
                    Owner=p1bn \
                    ProjectName="pge-fe-mono" \
                    Compliance=None \
                    DataClassification=Restricted \
                    CRIS=Low
                """
            }
        }
        stage('Delete Kube2iam Role') {
            when {
                allOf {
                    expression {params.ACTION == 'delete'}
                    // branch 'develop';
                    // tag 'release-*'

                }
            }
            steps {

                sh """
                    set -x
                    aws cloudformation delete-stack --stack-name ${env.STACK_PREFIX}-${params.ENV}-role --region ${env.AWS_REGION}
                """
            }
        }

        stage('Scan') {
            steps {
              prismaCloudScanImage dockerAddress: 'unix:///var/run/docker.sock',
                image: "${DOCKER_REPOSITORY}:${env.GIT_COMMIT}",
                logLevel: 'info',
                resultsFile: 'prisma-cloud-scan-results.json',
                ignoreImageBuildTime: true
            }
          }

        stage('Development Deploy') {
            // when { anyOf { branch 'develop' } }
            steps {
                script {
                    if ("${params.ENV}" == "nonprod" && "${params.COLOR}" == "green" || "${params.ENV}" == "nonprod" && "${params.COLOR}" == "blue") 
                    {
                        publish()
                        publish_portal()
                        publishKubeRelease()  
                        publishKubeReleas_portal()
                    }
                }
            }
        }
        stage('Prod Deploy') {
            // when { anyOf { tag 'release-*' } }
            steps {
                script {
                    if ("${params.ENV}" == "prod" && "${params.COLOR}" == "green" || "${params.ENV}" == "prod" && "${params.COLOR}" == "blue") 
                    {
                        publish()
                        publish_portal()
                        publishKubeRelease()  
                        publishKubeReleas_portal()
                    }
                }
            }
        }
    }
}   

def publish() {
  docker.withRegistry("https://${ECR_HOST}") {
    docker.image("${DOCKER_REPOSITORY}:${env.GIT_COMMIT}").push()
    // docker.image("${DOCKER_REPOSITORY}:${env.GIT_COMMIT}").push(env.GIT_BRANCH)
  }
}    

def publish_portal() {
  docker.withRegistry("https://${ECR_HOST}") {
    docker.image("${DOCKER_REPO_PORTAL}:${env.GIT_COMMIT}").push()
    // docker.image("${DOCKER_REPOSITORY}:${env.GIT_COMMIT}").push(env.GIT_BRANCH)
  }
} 
    
def kubeSubst(placeholder, value, file) {
  sh "sed -i.bak 's|{$placeholder}|$value|g' $file"
}

def publishKubeRelease() {

     docker.image("${env.DOCKER_REPOSITORY}:${env.GIT_COMMIT}").inside() { 
        sh """ 
            set +x
            kubectl config set clusters.default.server "${env.KUBERNETES_URL}"
            kubectl config set clusters.default.certificate-authority-data "${env.KUBERNETES_CERT}"
            kubectl config set-credentials "${KUBERNETES_USER}" --token="${env.KUBERNETES_TOKEN}"
            kubectl config set-context default --cluster=default --user="${KUBERNETES_USER}" --namespace="${env.KUBERNETES_NAMESPACE}"
            kubectl config use-context default
            kubectl apply -f pge-fe-mono.yaml

        """
    }
}

def publishKubeReleas_portal() {

     docker.image("${env.DOCKER_REPO_PORTAL}:${env.GIT_COMMIT}").inside() { 
        sh """ 
            set +x
            kubectl config set clusters.default.server "${env.KUBERNETES_URL}"
            kubectl config set clusters.default.certificate-authority-data "${env.KUBERNETES_CERT}"
            kubectl config set-credentials "${KUBERNETES_USER}" --token="${env.KUBERNETES_TOKEN}"
            kubectl config set-context default --cluster=default --user="${KUBERNETES_USER}" --namespace="${env.KUBERNETES_NAMESPACE}"
            kubectl config use-context default
            kubectl apply -f pge-fe-mono.yaml

        """
    }
}

