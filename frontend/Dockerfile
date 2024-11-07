# Utilisation de l'image Node.js pour construire l'application React
FROM node:16 AS build

WORKDIR /app

# Copiez les fichiers package.json et package-lock.json
COPY package*.json ./
RUN npm install

# Copiez le reste du code source et construisez l'application React
COPY . .
RUN npm run build

# Utilisation d'un serveur léger pour servir l'application React
FROM nginx:alpine

# Copiez les fichiers de build générés par React dans le dossier nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose le port 80 pour l'application
EXPOSE 80

# Lancer nginx
CMD ["nginx", "-g", "daemon off;"]
