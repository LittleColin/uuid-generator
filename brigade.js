const { events, Job } = require("brigadier");
const { TestClass } = require("./devops");

events.on("push", () => {
    consle.log('Testing');
    var t = new TestClass();
    console.log(t.hello("world"));
});

