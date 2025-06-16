import { systemInfo } from "./systeminfo.mjs";
import {readFile} from "./fileSytem.mjs"
import {readFileUsingPromise} from "./fileSytemPromises.mjs"
import {readFileAsync} from "./fileSytemAsync.mjs"
console.log(systemInfo())
readFileUsingPromise()
readFile()
readFileAsync()

