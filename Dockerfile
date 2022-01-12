FROM --platform=amd64 node:14-slim

WORKDIR /app
COPY ./ /app

RUN npm i
RUN npm run build-prod
RUN npm i http-server

EXPOSE 4200

CMD /app/node_modules/.bin/http-server /app/dist -p 4200 --proxy http://localhost:4200/?
