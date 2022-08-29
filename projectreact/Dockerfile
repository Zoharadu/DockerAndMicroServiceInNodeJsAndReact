FROM node:13.12.0-alpine as build

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

RUN npm run build



FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]