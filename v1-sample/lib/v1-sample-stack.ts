import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda'
import { HttpApi } from 'aws-cdk-lib/aws-apigatewayv2'
import { HttpLambdaIntegration } from 'aws-cdk-lib/aws-apigatewayv2-integrations'

export class V1SampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // defines an AWS Lambda
    let lambdaName = 'simplest-lambda'
    const memorySize = 512
    const simplestLambda = new lambda.Function(this, lambdaName, {
      functionName: lambdaName,
      description: "Simplest webservice integration",
      runtime: lambda.Runtime.NODEJS_18_X,
      memorySize: memorySize,
      timeout: cdk.Duration.seconds(60),
      code: lambda.Code.fromAsset('./functions/simplest-example', {}),
      handler: "index.handler",
      environment: {},
      retryAttempts: 0
    })

    // Defines an API Gateway HTTP API resource backed by our 'simplestlambda" function.
    const lambdaIntegration = new HttpLambdaIntegration(
      "lambdaIntegration",
      simplestLambda
    )

    const apiName = 'my-cdk-simple-webservice-v1'
    new HttpApi(this, apiName, {
      apiName: apiName,
      defaultIntegration: lambdaIntegration,
      description: 'My cdk sample web service'
    })
  }
}
