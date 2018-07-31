const { events, Job } = require("brigadier");
const { devops } = require("./devops");

events.on("push", () => {
    consle.log('Testing');
    console.log(devops.hello("world"));
});

