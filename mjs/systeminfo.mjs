import os  from'node:os';

export let systemInfo=()=>{
    console.log(" SYSTEM INFORMATION ");
    console.log("____________________")
    console.log("Architecture:");
    console.log(os.arch);
    console.log("CPUs");
    console.log(os.cpus);
    console.log("Operating System:");
    console.log(os.platform);
    console.log("Total Memory");
    console.log((os.totalmem) / 1024);
    console.log("Free Memory");
    console.log(os.freemem / 1024);
    
}
