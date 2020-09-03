"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Literal = void 0;
const Expression_1 = require("../Abstract/Expression");
class Literal extends Expression_1.Expression {
    constructor(value) {
        //super(cd3, temp);
        super();
        this.value = value;
    }
    execute() {
        let aux = { cd3: "", temp: this.value.toString() };
        return aux;
    }
}
exports.Literal = Literal;
