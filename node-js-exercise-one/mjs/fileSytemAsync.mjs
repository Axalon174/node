import fs from 'node:fs';


export let readFile=()=>{
    let text=fs.readFile('node-js-exercise-one/mjs/textFile.txt','utf-8',(err,text)=>{
        console.log(text);
    })
    console.log("hello");
}

