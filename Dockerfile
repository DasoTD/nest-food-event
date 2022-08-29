# # Building the Docker image from the base image Node:18-apline
# FROM node:18-alpine
# # creating the working directory of the Docker image
# WORKDIR /usr/src/app
# # copy package.json and package-lock.json to the image working directory
# COPY package*.json ./
# # Install app dependencies
# RUN npm install
# # COPY the Nest application into the image
# COPY . .
# #  build the application
# RUN npm run build

FROM node:14.17.3

# Define working directory
WORKDIR /home/node/app

# Install dependencies
COPY package*.json ./
RUN npm ci

# copy source and start script
COPY . .
COPY ./docker/run.sh /usr/bin/run.sh
RUN chmod +x /usr/bin/run.sh

# document the port exposed by server
#EXPOSE 7001

# execute start script
ENTRYPOINT ["/usr/bin/run.sh"]