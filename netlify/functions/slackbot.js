const { App, ExpressReceiver } = require("@slack/bolt");
require("dotenv").config();

const { SlashCommands } = require("./utils/slack-const.js");
const {
  generateReceiverEvent,
  isUrlVerificationRequest,
  parseRequestBody,
  replyMessage,
  replyPrivateMessage,
  replyReaction,
} = require("./utils/slack-utils.js");

const expressReceiver = new ExpressReceiver({
  signingSecret: `${process.env.SLACK_SIGNING_SECRET}`,
  processBeforeResponse: true,
});

const app = new App({
  signingSecret: `${process.env.SLACK_SIGNING_SECRET}`,
  token: `${process.env.SLACK_BOT_TOKEN}`,
  receiver: expressReceiver,
});

app.message(async ({ message }) => {
  const reactionPacket = {
    app: app,
    botToken: process.env.SLACK_BOT_TOKEN,
    channelId: message.channel,
    threadTimestamp: message.ts,
    reaction: "robot_face",
  };
  await replyReaction(reactionPacket);
  const messagePacket = {
    app: app,
    botToken: process.env.SLACK_BOT_TOKEN,
    channelId: message.channel,
    threadTimestamp: message.ts,
    message: "Hello :wave:",
  };
  await replyMessage(messagePacket);
});

app.command(SlashCommands.GREET, async ({ body, ack }) => {
  ack();
  const messagePacket = {
    app: app,
    botToken: process.env.SLACK_BOT_TOKEN,
    channelId: body.channel_id,
    userId: body.user_id,
    message: "Greetings, user!",
  };
  await replyPrivateMessage(messagePacket);
});

exports.handler = async function (event, context) {
  const payload = parseRequestBody(event.body, event.headers["content-type"]);
  if (isUrlVerificationRequest(payload)) {
    return {
      statusCode: 200,
      body: payload === null || payload === void 0 ? void 0 : payload.challenge,
    };
  }
  const slackEvent = generateReceiverEvent(payload);
  await app.processEvent(slackEvent);
  return {
    statusCode: 200,
    body: "",
  };
};
