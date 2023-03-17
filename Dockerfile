FROM --platform=amd64 node:16-alpine as builder

WORKDIR /app

COPY ./ .
RUN npm ci --production=false \
  && npm run build

FROM --platform=amd64 node:16-alpine

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY ./ .

RUN npm ci --production=true

EXPOSE 3000
CMD npm run start
