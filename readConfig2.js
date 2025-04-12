const fs = require("fs");

function readConfigFile(){
    fs.readFile("config.json", "utf8", (err, data) => {
        if(err){
            return console.error("Error reading config file:", err);
        }
        try{
            const config = JSON.parse(data);
            console.log("Config file content:", config);
        }catch(err){
            console.error("Error parsing config file:", err);
        }
    });
}

readConfigFile();