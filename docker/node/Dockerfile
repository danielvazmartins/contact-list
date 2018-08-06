FROM node:8.11
LABEL MAINTAINER="Daniel Vaz Villalobos Martins"
ENV HOME=/usr/local/nodejs/contact-list

RUN npm install -g nodemon
RUN npm install -g sequelize-cli
RUN mkdir -p $HOME
COPY package.json $HOME/
WORKDIR $HOME
RUN npm install --silent --progress=false
#RUN sequelize db:migrate
#RUN sequelize db:seed:all