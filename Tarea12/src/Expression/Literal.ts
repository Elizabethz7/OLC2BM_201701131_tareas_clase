import { Expression } from "../Abstract/Expression";
import {cd3} from '../Abstract/Retorno';

export class Literal extends Expression{
    
    constructor(private value : any){//, cd3 : string, temp: string){
        //super(cd3, temp);
        super();
    }

    public execute() : cd3{
        let aux:cd3={cd3:"",temp:this.value.toString()};
        return aux;
    }
    
}