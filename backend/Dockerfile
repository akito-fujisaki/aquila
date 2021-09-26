FROM ruby:3.0.1-slim

ENV DEBIAN_FRONTEND noninteractive
ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

RUN apt-get update -qq && \
  apt-get install -y build-essential \
  libpq-dev

RUN mkdir /app
WORKDIR /app

COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock

RUN bundle install

ADD . .
