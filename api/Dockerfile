FROM node:carbon

WORKDIR /usr/src/app

COPY . .

RUN apt update
RUN apt dist-upgrade -y
RUN npm install --silent

# If you are building your code for production
# RUN npm install --only=production

EXPOSE 4000
CMD ["npm", "start"]
