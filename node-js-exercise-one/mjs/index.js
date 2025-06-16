import { systemInfo } from "./systeminfo.mjs";
import {readFile} from "./fileSytem.mjs"
import {readFileUsingPromise} from "./fileSytemPromises.mjs"
import {readFileAsync} from "./fileSytemAsync.mjs"
import {identifyFileType} from  "C:/Cursos/node/node-js-exercise-one/test/fileType.mjs"
console.log(systemInfo())
readFileUsingPromise()
readFile()
readFileAsync()


