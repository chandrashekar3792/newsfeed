FROM node:10
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm install serverless -g
RUN npm install apidoc -g
RUN npm install
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 8090
CMD [ "npm", "start" ]