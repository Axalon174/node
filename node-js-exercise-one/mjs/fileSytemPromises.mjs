import fs from 'node:fs/promises';

export let readFileUsingPromise=()=>{
    fs.readFile('node-js-exercise-one/mjs/promesas.txt','utf-8').then(text=>{ console.log("Texto con promesas: \n"+text)})
    console.log("hello");
}

