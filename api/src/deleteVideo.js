const AWS = require("aws-sdk");

module.exports.deleteVideo = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters

  await dynamodb
    .delete({
      TableName: "Videos",
      Key: { id },
    })
    .promise();

  return {
    status: 200,
    body: { message: "Video deleted" },
  };
};
