FROM node:12.1.0-alpine
RUN apk --no-cache add ca-certificates
ADD . .
RUN npm install
RUN npm run build

CMD npm run start
