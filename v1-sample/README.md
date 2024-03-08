# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

참고: https://www.playingaws.com/posts/how-to-create-serverless-applications-with-cdk-and-sam/

실행 방법  
1. using template  
  - cdk synth --no-staging > template.yml  
  - sam local invoke  
  - test event 생성  
    *  sam local generate-event apigateway http-api-proxy --path test
    output을 copy해서 test/events/simple-event.json file 생성

2. using cdk.out (aws docs)
