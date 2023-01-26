const eventEmitter = require("events");

const customEmitter = new eventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data recieved ${name} ${id}`);
});

customEmitter.on("response", () => {
  console.log("some other logic here");
});

customEmitter.emit("response", "Kribas", 1);
