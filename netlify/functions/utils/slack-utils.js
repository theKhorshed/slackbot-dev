exports.parseRequestBody = function (stringBody, contentType) {
  try {
    if (!stringBody) {
      return "";
    }
    let result = {};
    if (contentType && contentType === "application/json") {
      return JSON.parse(stringBody);
    }
    let keyValuePairs = stringBody.split("&");
    keyValuePairs.forEach(function (pair) {
      let individualKeyValuePair = pair.split("=");
      result[individualKeyValuePair[0]] = decodeURIComponent(
        individualKeyValuePair[1] || ""
      );
    });
    return JSON.parse(JSON.stringify(result));
  } catch (_a) {
    return "";
  }
};
exports.generateReceiverEvent = function (payload) {
  return {
    body: payload,
    ack: async (response) => {
      return {
        statusCode: 200,
        body: response !== null && response !== void 0 ? response : "",
      };
    },
  };
};
exports.isUrlVerificationRequest = function (payload) {
  if (payload && payload.type && payload.type === "url_verification") {
    return true;
  }
  return false;
};
exports.replyMessage = async function (messagePacket) {
  try {
    await messagePacket.app.client.chat.postMessage({
      token: messagePacket.botToken,
      channel: messagePacket.channelId,
      thread_ts: messagePacket.threadTimestamp,
      text: messagePacket.message,
    });
  } catch (error) {
    console.error(error);
  }
};
exports.replyReaction = async function (reactionPacket) {
  try {
    await reactionPacket.app.client.reactions.add({
      token: reactionPacket.botToken,
      name: reactionPacket.reaction,
      channel: reactionPacket.channelId,
      timestamp: reactionPacket.threadTimestamp,
    });
  } catch (error) {
    console.error(error);
  }
};
exports.replyPrivateMessage = async function (messagePacket) {
  try {
    await messagePacket.app.client.chat.postEphemeral({
      token: messagePacket.botToken,
      channel: messagePacket.channelId,
      text: messagePacket.message,
      user: messagePacket.userId,
    });
  } catch (error) {
    console.error(error);
  }
};
