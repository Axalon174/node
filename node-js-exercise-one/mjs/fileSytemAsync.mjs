import fs from 'node:fs';

export let readFileAsync=()=>{
    let text=fs.readFile('node-js-exercise-one/mjs/async.txt','utf-8',(err,text)=>{
        console.log("texto asincrono:\n"+text);
    })
    console.log("hello");
}

