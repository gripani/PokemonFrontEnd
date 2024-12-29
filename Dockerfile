FROM node:16.15.0

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY .env ./
COPY tsconfig.json ./

RUN npm install

COPY . ./

CMD ["npm", "start", "dev"]