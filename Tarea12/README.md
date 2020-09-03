# Tarea 12

## Enunciado
Escriba un esquema de traducción dirigido por la sintaxis posfijo, para un analizador ascendente que reciba como entrada una expresión aritmética (*,+,-,/ y paréntesis) y genere para esta el código de tres direcciones equivalente.


## Descripcion
En esta tarea se hizo con Typecript, para utilizar JISON, donde se tiene las siguientes carpetas
- **Grammar** Donde contiene la gramatica en JISON
- **Abstract** Que contiene la clase abstracta para crear el arbol AST (Expression) y un type para la facilitacion de los atributos.
- **Expression** Contiene las instrucciones para el recorrido del arbol, donde estan las operaciones artimeticas y los nodos hoja.
