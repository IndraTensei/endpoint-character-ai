# Use the official Node.js slim image
FROM node:slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy your application code to the container
COPY . /app

# Expose port 3000
EXPOSE 8080

# Start your application
CMD [ "node", "index.js" ]
