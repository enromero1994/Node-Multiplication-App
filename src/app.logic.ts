import { writeFileSync } from "fs";
import { yarg } from "./config/plugins/yargs.plugin";
// const message:string = "Hola mundo"
// console.log("Hola mundo")

const {b:base, l:limit,s:show} = yarg
let message = `
|||||||||||||||||||||||||
        Tabla del ${base}
|||||||||||||||||||||||||\n
`
if(show){

    writeFileSync("outputs/tabla-5.txt",message, {
     flag: "w"
    })
    for (let index = 1; index < limit; index++) {
    
        message += `${base} x ${index} = ${base * index}\n`
      
    }
     writeFileSync(`outputs/tabla-${base}.txt`,message, {
            flag: "w"
           })
}
// console.log(message)



