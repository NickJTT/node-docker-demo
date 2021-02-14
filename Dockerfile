FROM node:12
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install -g nodemon
COPY . /app
CMD npm start
EXPOSE 5000
