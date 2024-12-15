FROM node:22-alpine

# Set environment variables
ENV NODE_OPTIONS=--openssl-legacy-provider

# Install git for version control if needed
RUN apk add --no-cache git

# Set the working directory inside the container
WORKDIR /BackstreetDesktop

# Copy all files from the local directory to the container's working directory
COPY . .

# Install dependencies
RUN yarn install

# Prebuild step
RUN yarn build:prebuild

# Default command to start the development server
CMD ["yarn", "dev"]
