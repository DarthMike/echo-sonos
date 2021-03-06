// If you setup basic auth in node-sonos-http-api's settings.json, change the username
// and password here.  Otherwise, just leave this alone and it will work without auth.
// var auth = new Buffer("YOUR_USERNAME" + ":" + "YOUR_PASSWORD").toString("base64");

    //   'Authorization': 'Basic ' + auth,
var options = {
  appid: "amzn1.ask.skill.26f1dccc-31c0-4cb7-a5cb-d24db5e26990",
  host: "raspberrypi-sonos.ydns.eu",
  port: "5005",
  headers: {
      'Content-Type': 'application/json'
  },
  useHttps: false, // Change to true if you setup node-sonos-http-api with HTTPS
  rejectUnauthorized: false, // Change to false if you self-signed your certificate
  defaultRoom: 'Living Room',				        // Allows you to specify a default room when one is not specified in the utterance
  defaultMusicService: 'library', // Supports presets, apple, spotify, deezer, or library
  advancedMode: false,             // Allows you to specify and change default rooms and music services. Requires additional AWS setup
  useSQS: false   // Use AWS SQS and node-sqs-proxy for secure communications
};

module.exports = options;
