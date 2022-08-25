FROM node:16.14.2-alpine3.15

COPY . .

RUN npm ci

CMD ["npm", "start"]
