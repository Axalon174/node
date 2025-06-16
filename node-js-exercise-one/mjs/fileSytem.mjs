import fs from 'node:fs';


export let readFile=()=>{
    let text=fs.readFileSync('node-js-exercise-one/mjs/textFile.txt','utf-8')
    console.log(text)
}

