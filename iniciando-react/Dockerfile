FROM node:14.17.5-alpine3.14

WORKDIR /home/node/app

COPY . .

RUN yarn

ENTRYPOINT [ "yarn", "start" ]