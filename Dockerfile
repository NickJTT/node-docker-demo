FROM node:14
WORKDIR /app
COPY package.json /app
RUN npm install -g sequelize-cli
RUN npm install -g nodemon
RUN npm install
COPY . /app
CMD npm start
EXPOSE 5000
