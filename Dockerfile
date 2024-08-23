FROM node:22-alpine

WORKDIR /app

COPY . .

WORKDIR /app

RUN npm install

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]
