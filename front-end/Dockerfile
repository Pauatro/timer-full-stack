# Front
FROM mhart/alpine-node:16.4.2
RUN mkdir /front-end
WORKDIR /front-end
COPY package.json /front-end
COPY yarn.lock /front-end
RUN yarn install
COPY . /front-end/
EXPOSE 3000
CMD ["yarn", "start"]