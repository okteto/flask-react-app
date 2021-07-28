 
FROM node:14.17.3

WORKDIR /usr/src/app 

COPY ./package.json ./

COPY ./package-lock.json ./

RUN npm install 

COPY . .

EXPOSE 8080

ENTRYPOINT [ "npm" ]

CMD ["start"]
