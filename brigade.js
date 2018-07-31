const { events, Job } = require("brigadier");
const { devops } = require("./devops");

events.on("push", () => {
    console.log(devops.hello("world"));
});

