const fs = require("fs");

console.log("Starting to read log fle ");

fs.readFile("log.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("Log File content:", data);
});

console.log("Finished reading log file (non-blocking I/O)");