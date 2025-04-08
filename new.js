var fs = require("node:fs").promises;

// fs.readFile("simple.txt",'utf-8')
// .then(data => console.log(data))
// .catch(err => console.error(err));
async function readFile() {
    try {
        const data = await fs.readFile("simple.txt", 'utf-8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
readFile();