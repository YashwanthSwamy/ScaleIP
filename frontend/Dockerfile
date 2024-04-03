FROM node:16.15.1 as build
WORKDIR /frontend

COPY package*.json .
RUN npm install
COPY . .

RUN npm run build
FROM nginx:1.19
COPY --from=build /frontend/build /usr/share/nginx/html