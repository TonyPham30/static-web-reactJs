module.exports = async function (context, req) {
    console.log("context: " + context);
   const responseMessage = "hello world!";
    context.res = {
        body: responseMessage
    };
}