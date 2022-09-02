const AWS = require("aws-sdk");

module.exports.getVideos = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const result = await dynamodb
    .scan({
      TableName: "Videos",
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(result.Items),
  };
};
 