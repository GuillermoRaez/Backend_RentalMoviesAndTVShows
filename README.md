# Backend Rental Movies And TV Shows

Prueba técnica del Bootcamp FullStack Developer con <a href="https://geekshubsacademy.com/">GeeksHubs Academy</a> en el que nos piden crear la parte backend para una aplicación de alquiler de películas con el método CRUD.

### Instrucciones 🔧

Primer paso instalar las dependencias del proyecto.

#### `npm i`

A continuación levantar el servidor. 

#### `npm start`

Finalmente en Postman enviar petición de los endpoints.

<img src="img/runpostman.png" width="150"> 

### Endpoints

- Películas 
   - GET /movies/toprated --> Muestra películas top rated.
   - GET /movies/searchid/:id --> Muestra películas según su id.
   - GET /movies/search/:title --> Muestra películas por título.
   - GET /movies/genre/:name --> Muestra películas con determinado género.
<br>

- Series
   - GET /tvshows/toprated --> Muestra series top rated.
   - GET /tvshows/searchid/:id --> Muestra series según su id.
   - GET /tvshows/search/:title --> Muestra series por título.
   - GET /tvshows/ontheair --> Muestra series que vayan a tener un capítulo emitido en los próximos 7 dias.
   - GET /tvshows/theatre_or_cinema/:id --> Muestra series que vayan a tener un pase en teatros o cines.

### Tecnologías utilizadas 

<img src="img/javascript.png" width="53"> <img src="img/node.png" width="65"> <img src="img/postman.png" width="50">

Dependencias instaladas : Express y Axios.


### Desarrolladores ✍️

[Guillermo Raez](https://github.com/GuillermoRaez) 

[Adriana Fayos](https://github.com/AdrianaFayos)

---