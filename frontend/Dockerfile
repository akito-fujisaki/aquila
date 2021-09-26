FROM node:16-alpine

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

RUN apk update && apk add \
    python3\
    make\
    g++

RUN mkdir /app
WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

ADD . .
