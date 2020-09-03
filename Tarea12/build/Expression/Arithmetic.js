"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arithmetic = exports.ArithmeticOption = void 0;
const Expression_1 = require("../Abstract/Expression");
const Retorno_1 = require("../Abstract/Retorno");
var ArithmeticOption;
(function (ArithmeticOption) {
    ArithmeticOption[ArithmeticOption["PLUS"] = 0] = "PLUS";
    ArithmeticOption[ArithmeticOption["MINUS"] = 1] = "MINUS";
    ArithmeticOption[ArithmeticOption["TIMES"] = 2] = "TIMES";
    ArithmeticOption[ArithmeticOption["DIV"] = 3] = "DIV";
})(ArithmeticOption = exports.ArithmeticOption || (exports.ArithmeticOption = {}));
class Arithmetic extends Expression_1.Expression {
    constructor(left, right, type) {
        //super(cd3,temp);
        super();
        this.left = left;
        this.right = right;
        this.type = type;
    }
    execute() {
        const leftValue = this.left.execute();
        const rightValue = this.right.execute();
        if (this.type == ArithmeticOption.PLUS) {
            Retorno_1.cont.cont++;
            let aux_temp = 't' + Retorno_1.cont.cont;
            let aux_cd3 = leftValue.cd3 + rightValue.cd3 + aux_temp + '=' + leftValue.temp + '+' + rightValue.temp + ';' + '\n';
            let aux = { cd3: aux_cd3, temp: aux_temp };
            return aux;
        }
        else if (this.type == ArithmeticOption.MINUS) {
            Retorno_1.cont.cont++;
            let aux_temp = 't' + Retorno_1.cont.cont;
            let aux_cd3 = leftValue.cd3 + rightValue.cd3 + aux_temp + '=' + leftValue.temp + '-' + rightValue.temp + ';' + '\n';
            let aux = { cd3: aux_cd3, temp: aux_temp };
            return aux;
        }
        else if (this.type == ArithmeticOption.TIMES) {
            Retorno_1.cont.cont++;
            let aux_temp = 't' + Retorno_1.cont.cont;
            let aux_cd3 = leftValue.cd3 + rightValue.cd3 + aux_temp + '=' + leftValue.temp + '*' + rightValue.temp + ';' + '\n';
            let aux = { cd3: aux_cd3, temp: aux_temp };
            return aux;
        }
        else {
            Retorno_1.cont.cont++;
            let aux_temp = 't' + Retorno_1.cont.cont;
            let aux_cd3 = leftValue.cd3 + rightValue.cd3 + aux_temp + '=' + leftValue.temp + '/' + rightValue.temp + ';' + '\n';
            let aux = { cd3: aux_cd3, temp: aux_temp };
            return aux;
        }
    }
}
exports.Arithmetic = Arithmetic;
