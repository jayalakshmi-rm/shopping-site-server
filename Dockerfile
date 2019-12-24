FROM node:10.13-alpine
ENV NODE_ENV production

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm i && mkdir /app && cp -R ./node_modules ./app

WORKDIR /app

## RUN npm install --production --silent && mv node_modules ../
COPY . .
RUN npm run tsc
EXPOSE 3000
CMD npm run serve