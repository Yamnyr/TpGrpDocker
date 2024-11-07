# Utiliser une image de base Node.js
FROM node:14-alpine as build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de l'application
COPY package*.json ./
COPY . .

# Installer les dépendances
<<<<<<< HEAD
RUN npm install
=======
RUN npm i
>>>>>>> ea10777d92a7e7313b0a5f03bf2425fb449950fa

# Construire l'application
RUN npm run build

# Utiliser une image légère de Nginx pour servir l'application
FROM nginx:1.19-alpine

# Copier les fichiers de construction dans le conteneur Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]