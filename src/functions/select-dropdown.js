[
  {
    type: "section",
    block_id: "section678",
    text: {
      type: "mrkdwn",
      text: "Select your status",
    },
    accessory: {
      action_id: "text1234",
      type: "static_select",
      placeholder: {
        type: "plain_text",
        text: "Select an item",
      },
      options: [
        {
          text: {
            type: "plain_text",
            text: "*this is plain_text text*",
          },
          value: "value-0",
        },
        {
          text: {
            type: "plain_text",
            text: "*this is plain_text text*",
          },
          value: "value-1",
        },
        {
          text: {
            type: "plain_text",
            text: "*this is plain_text text*",
          },
          value: "value-2",
        },
      ],
    },
  },
];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World!",
    }),
  };
};
