tokens  = (
    'PARA',
    'PARC',
    'MAS',
    'MENOS',
    'POR',
    'DIVIDIDO',
    'PYC',
    'ENTERO',
    'DECIMAL'
)

# Tokens
t_PARA    = r'\('
t_PARC    = r'\)'
t_MAS       = r'\+'
t_MENOS     = r'-'
t_POR       = r'\*'
t_DIVIDIDO  = r'/'
t_PYC    = r';'

def t_DECIMAL(t):
    r'\d+\.\d+'
    try:
        t.value = float(t.value)
    except ValueError:
        print("Floaat value too large %d", t.value)
        t.value = 0
    return t

def t_ENTERO(t):
    r'\d+'
    try:
        t.value = int(t.value)
    except ValueError:
        print("Integer value too large %d", t.value)
        t.value = 0
    return t

# Caracteres ignorados
t_ignore = " \t"


def t_newline(t):
    r'\n+'
    t.lexer.lineno += t.value.count("\n")
    
def t_error(t):
    print("Illegal character '%s'" % t.value[0])
    t.lexer.skip(1)
    
# Construyendo el analizador léxico
import ply.lex as lex
lexer = lex.lex()


# Asociación de operadores y precedencia
precedence = (
    ('left','MAS','MENOS'),
    ('left','POR','DIVIDIDO'),
    )

# Definición de la gramática

from atributos import *
#def p_instrucciones_lista(t):
#   '''instrucciones    : instruccion instrucciones
#                       | instruccion '''

def p_instrucciones_evaluar(t):
    'instruccion : expresion'
    print('El codigo de 3 direcciones es: \n------\n' + str(t[1].cd3))
    #tmp = atributos('ccadena','temp')
    #print(tmp.cd3)

def p_expresion_binaria(t):
    '''expresion : expresion MAS expresion
                  | expresion MENOS expresion
                  | expresion POR expresion
                  | expresion DIVIDIDO expresion'''
    if t[2] == '+'  : 
        aux_tmp=atributos.getnext()
        aux_cd3=t[1].cd3 +t[3].cd3 + aux_tmp+'='+ t[1].temp + '+'+ t[3].temp + ';'+ '\n'
        aux=atributos(aux_cd3,aux_tmp)
        t[0] = aux
    elif t[2] == '-':
        aux_tmp=atributos.getnext()
        aux_cd3=t[1].cd3 +t[3].cd3 + aux_tmp+'='+ t[1].temp + '-'+ t[3].temp + ';'+ '\n'
        aux=atributos(aux_cd3,aux_tmp)
        t[0] = aux
    elif t[2] == '*':
        aux_tmp=atributos.getnext()
        aux_cd3=t[1].cd3 +t[3].cd3 + aux_tmp+'='+ t[1].temp + '*'+ t[3].temp + ';'+ '\n'
        aux=atributos(aux_cd3,aux_tmp)
        t[0] = aux
    elif t[2] == '/':
        aux_tmp=atributos.getnext()
        aux_cd3=t[1].cd3 +t[3].cd3 + aux_tmp+'='+ t[1].temp + '/'+ t[3].temp + ';' + '\n'
        aux=atributos(aux_cd3,aux_tmp)
        t[0] = aux

def p_expresion_agrupacion(t):
    'expresion : PARA expresion PARC'
    t[0] = t[2]

def p_expresion_number(t):
    '''expresion    : ENTERO
                    | DECIMAL'''
    #t[0] = atributos(null,t[1])
    t[0] = atributos('',str(t[1]))

def p_error(t):
    print("Error sintáctico en '%s'" % t.value)

import ply.yacc as yacc
parser = yacc.yacc()


f = open("./entrada.txt", "r")
input = f.read()
print("Entrada: "+input)
parser.parse(input)