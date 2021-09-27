FROM mhart/alpine-node:16.4.2
RUN mkdir /back-end
WORKDIR /back-end
COPY package.json /back-end/
RUN npm install
COPY . /back-end/
EXPOSE 9000
CMD ["npm", "start"]