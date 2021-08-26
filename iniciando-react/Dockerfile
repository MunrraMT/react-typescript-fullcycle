FROM node:14.17.5-alpine3.14

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

USER node

COPY . .

ENTRYPOINT [ "yarn", "start" ]