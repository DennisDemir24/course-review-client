# Using latest node lts
FROM node:14-alpine3.13
# Set workdir
WORKDIR /app
# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install yarn for package management
RUN npm install yarn --global

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN yarn install --silent
RUN yarn add react-scripts@4.0.3 -g --silent

# add app
COPY . ./

#Start
CMD ["yarn", "start"]
