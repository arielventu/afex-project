const AWS = require("aws-sdk");

module.exports.getVideo = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  const result = await dynamodb
    .get({
      TableName: "Videos",
      Key: { id },
    })
    .promise();

  const video = result.Item;

  return {
    status: 200,
    body: video
  };
};
