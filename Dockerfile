FROM node:11.2.0-alpine

RUN apk add --no-cache curl-dev libzip-dev autoconf build-base gmp-dev coreutils

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm i -g @angular/cli@7.0.6
RUN npm i

EXPOSE 3000 4200

CMD ["npm", "start"]