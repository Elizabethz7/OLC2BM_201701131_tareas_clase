import { Expression } from "../Abstract/Expression";
import {cd3, cont} from '../Abstract/Retorno';
export enum ArithmeticOption{
    PLUS,
    MINUS,
    TIMES,
    DIV
}

export class Arithmetic extends Expression{

    constructor(private left: Expression, private right: Expression, private type : ArithmeticOption){//, cd3: string, temp: string){
        //super(cd3,temp);
        super();
    }

    public execute() : cd3{
        const leftValue = this.left.execute();
        const rightValue = this.right.execute();

        if(this.type == ArithmeticOption.PLUS){
            cont.cont++;
            let aux_temp:string='t'+cont.cont;
            let aux_cd3=leftValue.cd3+rightValue.cd3+aux_temp+'='+ leftValue.temp + '+'+ rightValue.temp + ';'+ '\n';
            let aux:cd3={cd3:aux_cd3,temp:aux_temp};
            
            return aux;
        }
        else if(this.type == ArithmeticOption.MINUS){
            cont.cont++;
            let aux_temp:string='t'+cont.cont;
            let aux_cd3=leftValue.cd3+rightValue.cd3+aux_temp+'='+ leftValue.temp + '-'+ rightValue.temp + ';'+ '\n';
            let aux:cd3={cd3:aux_cd3,temp:aux_temp};
            
            return aux;
        }
        else if(this.type == ArithmeticOption.TIMES){
            cont.cont++;
            let aux_temp:string='t'+cont.cont;
            let aux_cd3=leftValue.cd3+rightValue.cd3+aux_temp+'='+ leftValue.temp + '*'+ rightValue.temp + ';'+ '\n';
            let aux:cd3={cd3:aux_cd3,temp:aux_temp};
            
            return aux;
        }
        else{
            cont.cont++;
            let aux_temp:string='t'+cont.cont;
            let aux_cd3=leftValue.cd3+rightValue.cd3+aux_temp+'='+ leftValue.temp + '/'+ rightValue.temp + ';'+ '\n';
            let aux:cd3={cd3:aux_cd3,temp:aux_temp};
            
            return aux;
        }
    }
}