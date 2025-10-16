// Netlify function example - can be used for future serverless functionality
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Physics Hub!" })
  };
}