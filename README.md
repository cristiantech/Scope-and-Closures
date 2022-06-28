# Scope-and-Closures
Entendiendo el nivel de Scope de JavaScript

### Scope
    Es el alcance que puede tener una variable. 
    Además, el scope decide a que variables tienen acceso en nuestro código.

Existen 2 tipos de “Scope”:

+ Global
+ Local

Local: Cuando puedes acceder a una variable únicamente en cierta parte del código o bloque.

Global: Una variable cuando está en el scope global, es porque está declarada fuera de un bloque de código o función.

#### Decalarcion de variables
+ Declaración de variables: reservar un espacio en memoria para la variable en si.
+ Re-declaración de variables: volver a declarar una variable previamente existente.
+ Asignación de variables: darle un valor a dicho espacio de memoria reservado.
+ Re-asignación de variables: darle un nuevo valor a una variable.
  ________________________________________________________

+ var, es posible realizar solo una declaración, el valor de la variable será undefiend pero no arrojará ningún error.
    + var, es posible re-declarar y re-asignar valores.
  ________________________________________________________ 
+ let, es posible re-asignar pero no re-declarar.
  ________________________________________________________
+ const es una de las mejores maneras de manipular variables puesto que tiene reglas mas robustas que var y let
    + const, no puedes re-asignar ni re-declarar tipos de datos primitivos.
    + const, puedes re-asignar arreglos y objetos pero no re-declararlos.
    + const, tampoco puedes solo declararla, necesita una asignación.
  ________________________________________________________ 
