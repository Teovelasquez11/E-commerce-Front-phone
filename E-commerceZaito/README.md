# ECommerceZaito

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Explicación
Antes de correr el proyecto por favor usar el comando npm install para instalar las dependencias.

Para darle estilos use Bootstrap y Bootstrap Icons, los importe a travez de los cdn en el header y el body del 
index.html

con el comando ng serve en la terminal, empieza a correr el servidor 

Para completar el reto, use la siguiente API publica https://fakestoreapi.com/products/ 

Cree un componente products, que es donde muestro la lista de todos los productos, a traves del consumo de la API. 

Para hacer el consumo de la API, cree el servicio apiProducts, utilice el metodo HttpClient para hacer el consumo y con la inyección de dependencias en el componente products.component.ts traigo la lista de todos los productos

Para el buscador, use un pipe, use el npm i ng2-search-filter, me apoye del modulo Ng2SearchPipeModule y del FormsModule, luego en el input agregue el modulo [(ngModule)] term que lo defini en el products.component.ts y estos modulos son los que me ayudan para buscar por el titulo del producto, ya que mi API esta en ingles, se debe de buscar con el valor que tenga el elemento title de la API adjunta

Ya que no era necesario ser responsive, me enfoque en simular el front-end con dimensiones de celular, las dimensiones que use fueron las que sugiere el Development tools de iPhone SE 375X667

adjunto envío un recorte del resultado, en caso de faltar alguna explicación, estoy dispuesto para mostrarles como hice el reto

muchas gracias.
