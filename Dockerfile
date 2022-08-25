FROM node:v12.20.1

COPY . .

RUN npm ci

CMD ["npm", "start"]
