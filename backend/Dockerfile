FROM node:18

# Installer ffmpeg et netcat pour le healthcheck
RUN apt-get update && apt-get install -y ffmpeg netcat-traditional

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de package et installer les dépendances
COPY package*.json ./
RUN npm install

<<<<<<< HEAD

=======
# Copier tout le reste du projet
>>>>>>> 2bf0bd27dd44b54a644e3340b4316748c28098f8
COPY . .
COPY wait-for-mysql.sh /wait-for-mysql.sh
RUN chmod +x /wait-for-mysql.sh

# Exposer le port 3000
EXPOSE 5000

# Utiliser le script wait-for-db.sh comme point d'entrée
CMD ["/wait-for-mysql.sh"]