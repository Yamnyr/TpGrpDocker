FROM node:16

# Install netcat
RUN apt-get update && apt-get install -y netcat

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "app.js"]
