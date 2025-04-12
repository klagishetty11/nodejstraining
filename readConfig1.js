const fs = require("fs").promises;

async function readConfig() {
    try{
        const data = await fs.readFile("config.json", "utf8");
        console.log("Config file content:", JSON.parse(data));
    }catch (err){
        console.error("Error reading config file:", err);
    }
}

readConfig();