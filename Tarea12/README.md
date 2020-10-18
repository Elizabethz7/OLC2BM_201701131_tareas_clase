# Tarea 12

## Enunciado
Escriba un esquema de traducción dirigido por la sintaxis posfijo, para un analizador ascendente que reciba como entrada una expresión aritmética (*,+,-,/ y paréntesis) y genere para esta el código de tres direcciones equivalente.


## Descripcion
En esta tarea se hizo con Typecript, para utilizar JISON, donde se tiene las siguientes carpetas
- **Grammar** Donde contiene la gramatica en JISON
- **Abstract** Que contiene la clase abstracta para crear el arbol AST (Expression) y un type para la facilitacion de los atributos.
- **Expression** Contiene las instrucciones para el recorrido del arbol, donde estan las operaciones artimeticas y los nodos hoja.

### Explicacion
Si solo se quiere correr el programa 
- posicionarse en la ccarpeta del proyecto
- En la terminal poner ```node ./build/index.js``` que index es la pagina principal, y como se utiliza typescript, el codigo en javascript lo contiene la carpeta build, entonces esta instruccion procedera a correr el index.js del lenguaje javascript.


Si se quiere cambiar algo de este codigo, se puede cambiar de dos maneras
- Primero ```npm install``` para instalar todo lo que se requiere
- Trabajar en la parte de typescript, y traducirlo despues con ```tsc```
- Pero en este proyecto ya contiene unos comandos personalizados (package.json) donde se puede tambien hacer ```npm run build```, que este contiene la instruccion ```tsc -w```, -w en tsc sirve para que este este en espera de cambios, asi se hara de forma autmatica en el desarrollo.
- Para correr el proyecto se puede poner ```node ./build/index.js```
- Pero como se dijo anteriormente se tiene tambien un comando para este que se puede poner en la consola ```npm run dev ```, que este tiene la instruccion ```nodemon build/index.js```, que esta le dice a nodemon que carpetas debe esperar los cambios y cual tiene que correr.