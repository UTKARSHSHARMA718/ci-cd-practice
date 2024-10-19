FROM node:20-alpine as builder 
WORKDIR /app/react
COPY package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/react/dist /usr/share/nginx/html


# for application created using CRA please use '/app/react/build' but for vite use '/app/react/dist'
