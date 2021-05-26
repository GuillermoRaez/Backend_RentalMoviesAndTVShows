# Backend Rental Movies And TV Shows

Reto del Bootcamp FullStack Developer con <a href="https://geekshubsacademy.com/">GeeksHubs Academy</a> en el que nos piden crear la parte backend para una aplicación de alquiler de películas con el método CRUD.

### Instrucciones 🔧

Primer paso instalar las dependencias del proyecto.

### `npm i`

Segundo paso inicializar la dependencia Sequelize.

### `sequelize init`

A continuación levantar el servidor. 

### `npm start`

Finalmente en Postman enviar petición de los endpoints.

<img src="img/runpostman.png" width="150"> 

### Endpoints

- Películas 
   - GET /movies/toprated --> Muestra películas top rated.
   - GET /movies/searchid/:id --> Muestra películas según su id.
   - GET /movies/search/:title --> Muestra películas por título.
   - GET /movies/genre/:name --> Muestra películas con determinado género.
   - GET /movies/actors/:name --> Muestra películas por actores.

<br>

- Series
   - GET /tvshows/toprated --> Muestra series top rated.
   - GET /tvshows/searchid/:id --> Muestra series según su id.
   - GET /tvshows/search/:title --> Muestra series por título.
   - GET /tvshows/ontheair --> Muestra series que vayan a tener un capítulo emitido en los próximos 7 dias.
   - GET /tvshows/theatre_or_cinema/:id --> Muestra series que vayan a tener un pase en teatros o cines.
<br>

- Login de usuario
   - POST /login --> Logea a un usuario registrado y devuelve un token.
<br>

- Usuarios
   - GET /users --> Muestra los usuarios registrados.
   - POST /users --> Da de alta un nuevo usuario y encripta su contraseña.
   - PUT /users --> Modifica los atributos de un usuario.
   - DELETE /users/:id --> Elimina el usuario introducido mediante id. 
<br>

- Pedido
   - GET /orders --> Muestra todos los pedidos.
   - POST /orders --> Crea un nuevo pedido.


### Tecnologías utilizadas 

<img src="img/javascript.png" width="53"> <img src="img/node.png" width="65"> <img src="img/postman.png" width="50"> <img src="img/sequelize.png" width="50">

Dependencias instaladas : Express, Axios, MySQL2, Sequelize, Sequelize-cli, Bcrypt y Jsonwebtoken.


### Desarrolladores ✍️

[Guillermo Raez](https://github.com/GuillermoRaez) 

[Adriana Fayos](https://github.com/AdrianaFayos)

---