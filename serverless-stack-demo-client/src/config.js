export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-uploads100"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://d657nim4wj.execute-api.ap-southeast-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_lM8rZ0Qym",
    APP_CLIENT_ID: "7afj23l9pslpgrps5phcebr496",
    IDENTITY_POOL_ID: "ap-southeast-2:7653bfa9-f91a-45b9-a0f6-202587de0445"
  }
};
