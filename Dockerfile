FROM node:latest
RUN mkdir -p /usr/src/aestrada
WORKDIR /usr/src/aestrada
COPY package.json /usr/src/aestrada/
RUN npm install
COPY . /usr/src/aestrada
EXPOSE 8000
CMD [ "node", "index.js" ]
