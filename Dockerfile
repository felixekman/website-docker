FROM node:8.4.0-alpine

WORKDIR /app

COPY . /app

RUN apk add --no-cache curl

RUN \
  touch .bashrc && \
  curl -o- -L https://yarnpkg.com/install.sh | /bin/sh -s -- --version 0.23.2 && \
  yarn global add \
    node-gyp \
    node-sass

RUN yarn install --silent --non-interactive --ignore-optional --network-timeout 1000000

RUN \
  ./node_modules/.bin/ember build --environment=production && \
  rm -rf node_modules && \
  yarn install --network-timeout 1000000 --silent --non-interactive --ignore-optional --production && \
  cd /app/dist && yarn install --network-timeout 1000000 --silent --non-interactive --production

EXPOSE 3000

CMD ["node", "/app/fastboot-server.js"]
