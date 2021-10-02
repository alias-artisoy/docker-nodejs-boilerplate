FROM node:17.3.0-alpine

WORKDIR /usr/local/app

COPY ../package*.json .

RUN npm install && npm cache clean --force

COPY ../ .

ARG DEFAULT_PORT=80

ENV PORT $DEFAULT_PORT

EXPOSE $PORT

CMD [ "npm", "start" ]