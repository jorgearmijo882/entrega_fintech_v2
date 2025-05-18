FROM node:18

WORKDIR /app

COPY . .

RUN npm install -g serve

EXPOSE 3001

CMD ["serve", ".", "-l", "3001"]
