const fs = require('fs');
const { makeText } = require("./try");
const axios = require('axios');
const process = require('process');


function generateText(text) {
    let mm = makeText(text);
    console.log(mm);
}

function makeTextPath(path) {
    fs.readFile(path, 'utf8' , function cb(err , data) {
        if (err) {
            console.error(`Cannot read file: ${path}: ${err}`);
            process.exit(1);
        } else {
            generateText(data)
        }
    })
}


async function makeUrlText(url) {
    let resp;

    try {
        resp = await axios.get(url);
    } catch (err) {
        console.error(`Cannot read URL: ${url}: ${err}`);
        process.exit(1);
    }
    generateText(resp.data)
}


let [method , path] = process.argv.slice(2);

if (method === 'file') {
    makeTextPath(path);
}

else if (method === 'url') {
    makeUrlText(path);
}

else {
    console.error(`Unknown method: ${method}`);
    process.exit(1);
}