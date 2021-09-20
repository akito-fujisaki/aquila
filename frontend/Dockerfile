FROM node:16-alpine

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

RUN apk update && apk add \
    python3\
    make\
    g++

RUN mkdir /app
WORKDIR /app

ADD package.json /app/package.json
ADD yarn.lock /app/yarn.lock
RUN yarn install

ADD . /app
