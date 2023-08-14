# Use the official Puppeteer Docker image as the base
FROM ghcr.io/puppeteer/puppeteer:latest

# Set the working directory
WORKDIR /app

# Copy your application code to the working directory
COPY . .

# Expose the port your application is listening on
EXPOSE 3000

# Start your application
CMD [ "npm", "start" ]
