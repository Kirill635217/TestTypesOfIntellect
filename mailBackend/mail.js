const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: '9a3eca166f4d269ec27c36a6d430caf2-us6',
  server: 'us6',
});

async function callPing() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

callPing();
