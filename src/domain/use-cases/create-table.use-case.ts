export interface CreateTableUseCase{
   //reglas que los objetos tienen que cumplir
   execute: (options: CreateTableOptions) => string; 
}

export interface CreateTableOptions{
    base: number;
    limit?:number;
}


export class CreateTable implements CreateTableUseCase {
    //primer metodo que se llama cuando invocamos la clase
    constructor(
        /**
         * DI - Dependency injection
         */

    ){}
    execute({base,limit = 10}: CreateTableOptions){
        let message = ""
        for (let index = 1; index < limit; index++) {
            
            message += `${base} x ${index} = ${base * index}\n`
          
        }
        return message
    }
}