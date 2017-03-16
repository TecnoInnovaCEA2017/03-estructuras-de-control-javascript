# Estructuras de Control en Javascript

Las estructuras de control nos permiten definir cómo y cuando se va a ejecutar nuestro código. Estudiaremos dos estructuras:

- Condicionales
- Iterativas

La sintaxis de Javascript es muy similar a lenguajes derivados de C, por esta razón, las estructuras de control son muy similares.

### Estructuras de control Condicionales

Las estructuras de contorl condicionales nos permiten definir que bloques de código se van a ejecutar dependiendo del cumplimiento de una condición.

#### Sentencia `if`

La sentencia `if` tradicionalmente tiene 3 partes
```
var nombre = 'gatos';
if (nombre == 'perros')
{
  nombre = 'Son perros';
}
else if (nombre == 'gatos')
{
  nombre = 'Son gatos'
}
else
{
  nombre = 'No sabemos que son' ;
}
```
La primera parte siempre es obligatoria, la segunda parte no es obligatoria y se puede repetir tantas veces como queramos y la última parte no es obligatoria, pero solo se puede usar una vez y al final de la sentencia.

#### Sentencia `switch`

Con regularidad nos encontramos casos donde debemos comparar una misma variable a varios valores, y hacerlo con la sentencia `else if` puede ser muy largo y repetitivo, por esta razón se inventó la sentencia `switch`, que permite comparar una misma variable a varios valores de una manera mas clara.

El código anterior se puede expresar con la sentencia `switch` de la siguiente manera:

```
var nombre = 'gatos';
switch(nombre)
{
  case 'perros':
    nombre = 'Son perros';
    break;
  case 'gatos':
    nombre = 'Son gatos';
    break;
  default:
    nombre = 'No sabemos que son';
    break;
}
```

> Recuerda colocar la sentencia `break` después de terminar las sentencias dentro del `case`, si no lo colocas, se ejecutarán las sentencias de los siguiente `case` hasta que se encuentre la palabra `break` o hasta que termine el `switch`

### Estructuras de control Iterativas

Las sentencias de control iterativas nos permiten repetir bloques de códigos mientras ocurra un criterio de parada.

#### Sentencia `for`

Como ya hemos visto en la sección anterior, la sentencia `for` nos permite recorrer arreglos en su totalidad, pero mas genéricamente nos permite repetir bloques de código una cantidad específica de veces.

```
for (var i = 0; i < 5; i++)
{
  // Este segmento de código se ejecutará 5 veces
}
```

#### Sentencia `while`

La sentencia `while` se ejecutará mientras la condición de parada sea cierta:

```
var i = 0;
while(i<5)
{
  i++;
  // Este segmento de código se ejecutará 5 veces
}
```

#### Sentencia `do-while`

Esta sentencia es similar a la sentencia `while`, con la excepción que siempre el cuerpo del `do-while` se ejecutará al menos una vez

```
do
{
  console.log("hola");
}
while(false);
```
