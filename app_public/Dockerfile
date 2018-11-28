FROM node:11.2.0-alpine

RUN apk add --no-cache curl-dev libzip-dev autoconf build-base gmp-dev coreutils python

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/

COPY . /usr/src/app/
RUN npm i -g @angular/cli@7.0.6
RUN npm i

ENV JWT_SECRET 'thisisasecret'
ENV PATH /usr/src/app/node_modules/.bin:$PATH

CMD ng serve --host=0.0.0.0

EXPOSE 4200