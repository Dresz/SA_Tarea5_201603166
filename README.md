# SA_Tarea3_201603166
# Link del video: https://youtu.be/wBdbTfx4V74
# Apartados
## Cliente
Apartado que pedira una orden y podra revisar los estados en el restaurante y con el repartidor.
Desarrollado con Node JS y se instalan las dependecias con npm start y para iniciar el servicio se escribe node index.js
## Repartidor
Recibe la orden del restaurante y indica el estado de la orden y por ultimo termina la orden con los estados.
Desarrollado con Node JS y se instalan las dependecias con npm start y para iniciar el servidor se escribe node index.js
## Restaurante
Recibe la orden del cliente y indica el estado de la orden y tambien da la orden al repartidor.
Desarrollado con Node JS y se instalan las dependecias con npm start y para iniciar el servidor se escribe node index.js
## ESB
Todas las operaciones pasan por el esb que es canal de comunicacion entre las tres aplicaciones, todas las peticiones apuntan al ESB y se encarga de responderlas.
