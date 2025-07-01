FROM node:20 AS build
COPY . /app
WORKDIR /app
RUN npm install
RUN yarn build-storybook

FROM nginx
COPY --from=0 /app/storybook-static /usr/share/nginx/html