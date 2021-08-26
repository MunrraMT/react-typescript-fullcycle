FROM node:14.17.5-alpine3.14

USER node

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY . .

RUN yarn

ENTRYPOINT [ "yarn", "start" ]