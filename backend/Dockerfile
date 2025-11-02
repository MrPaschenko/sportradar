FROM node:25

RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . /usr/src/app

COPY docker-entrypoint.sh .

RUN chmod +x docker-entrypoint.sh

RUN npx drizzle-kit generate

RUN npm run build

ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["node", "dist/main"]
