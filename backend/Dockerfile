FROM node:18

# Installer ffmpeg et netcat pour le healthcheck
RUN apt-get update && apt-get install -y ffmpeg netcat-traditional

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de package et installer les dépendances
COPY package*.json ./
RUN npm install


COPY . .
COPY wait-for-mysql.js /wait-for-mysql.js


# Exposer le port 3000
EXPOSE 5000

# Utiliser le script wait-for-db.sh comme point d'entrée
CMD ["/wait-for-mysql.js"]