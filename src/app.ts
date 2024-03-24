import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";

// console.log(yarg.b)

//Funcion anonima autoinvocada
(async ()=>{
    await main();
    // console.log('Fin del programa')
})();

async function main(){
  const {b:base, l:limit, s:showTable, n:name, d:destination} = yarg;
  ServerApp.run({base,limit,showTable,name,destination});
}