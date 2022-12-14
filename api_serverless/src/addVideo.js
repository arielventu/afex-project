const { v4 } = require("uuid");
const AWS = require("aws-sdk");

module.exports.addVideo = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { ytId, title, description, thumbnail, duration, link } = JSON.parse(event.body);
  const id = v4();
  const newVideo = {
    id,
    ytId,
    title,
    description,
    thumbnail,
    duration,
    link
  };

  await dynamodb
    .put({
      TableName: "Videos",
      Item: newVideo,
    }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newVideo),
  };
};
