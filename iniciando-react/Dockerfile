FROM node:14.17.5-alpine3.14

USER node

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY . .

VOLUME [ "/home/node/app" ]

ENTRYPOINT [ "sh", ".docker/entrypoint.sh" ]