Url des 2 images:

- image backend = yamnyr02/tp-docker-backend:1.1
- image frontend = yamnyr02/tp-docker-frontend:1.1

Structure du fichier docker-compose.yml pour les 2 images stockées sur Docker Hub:

services:
backend:
image: yamnyr02/tp-docker-backend:1.1
ports: - "5000:5000"
networks: - app-network

frontend:
image: yamnyr02/tp-docker-frontend:1.1
ports: - "8080:80"
depends_on: - backend
networks: - app-network

networks:
app-network:
driver: bridge

Question 1: Quelles sont les principales différences entre un fichier Dockerfile pour un service unique et un fichier docker-compose.yml pour une application multi-services ?

Le fichier Dockerfile permet de construire une image individuelle d'un service contrairement au fichier docker-compose.yml qui permet de gérer, tout en centralisant, plusieurs services.

Question 2: Pourquoi est-il utile d’utiliser Docker Compose pour une application complète avec plusieurs services ?

Docker Compose est très utile pour gérer une application comportant plusieurs services car il simplifie la gestion de tous les services tout en centralisant leurs configurations à l'aide du fichier docker-compose.yml.

Question 3: Comment pourrait-on étendre ce projet avec une base de données ou un autre service sans avoir à tout reconfigurer ?

Si nous voulons étendre ce projet avec une base de données ou un autre service sans avoir à tout reconfigurer, il suffirait simplement de rajouter un service dans le fichier docker-compose.yml, grâce à la structure modulaire de celui-ci, nous pouvons rajouter des services sans pour autant reconfigurer toute l'application.
