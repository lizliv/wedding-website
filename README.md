# Wedding Website &middot; [![Netlify Status](https://api.netlify.com/api/v1/badges/30ceef6f-c803-48a1-8b05-832c1412a8cc/deploy-status)](https://app.netlify.com/sites/lledoisalim/deploys) &middot; ![Build Status](https://travis-ci.org/salimhamed/wedding-website.svg?branch=master)

This repository contains the source code for my wedding website. The website is a React project started from `create-react-app`.

You can view the live site at [www.lledoisalim.com](https://www.lledoisalim.com).

The website provides the following features:

-   Multi-language support (my fiancee is Catalonia)
-   Ability to RSVP (site authentication uses AWS Amplify)

## Getting Started

This build appears to work with Node v14.19.0. Testing with Node v16.14.0 resulted in errors with `gyp`.


Follow [this](https://blog.logrocket.com/user-authentication-firebase-react-apps/) tutorial to get the Firebase databse/user authentication setup and then follow [these](https://www.learnhowtoprogram.com/react-part-time-react-track/react-with-nosql-part-1/adding-firebase-to-react) instructions to hide the API keys from the repository.

## Deploying the Site

### 1. Deploy CloudFormation Stack

```shell script
aws cloudformation create-stack \
    --profile personal \
    --region us-east-1 \
    --stack-name WeddingWebsite \
    --capabilities CAPABILITY_IAM \
    --template-body file://resources/cloudformation/wedding-website-infrastructure.template.yaml \
    --stack-policy-body file://resources/cloudformation/wedding-website-infrastructure.policy.json
```

### 2. Set Environment Variables

```shell script
# see the stack outputs
aws cloudformation describe-stacks \
    --profile personal \
    --region us-east-1 \
    --stack-name WeddingWebsite

# add the outputs to a .env file
cp env-example .env
vim .env  # fill in the correct values from the CloudFormation stack outputs
```

### Resources

-   [Original README](docs/create-react-app.md) from `create-react-app`
-   [Wedding website example](https://www.zola.com/wedding/sample-lyons-navy) that provided some styling inspiration.
