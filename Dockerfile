# Use uma imagem base do Node.js
FROM node:lts-alpine

RUN mkdir -p /home/node/server && chown -R node:node /home/node/server

WORKDIR /home/node/server

RUN mkdir -p node_modules && chown -R node:node node_modules

COPY --chown=node:node package.json yarn.* ./

USER node

RUN yarn install

COPY --chown=node:node . .

EXPOSE 3001

CMD ["yarn", "start"]