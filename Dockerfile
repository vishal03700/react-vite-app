# Step 1: Use Node.js 18+ to ensure crypto.getRandomValues is available
FROM node:18 AS build

WORKDIR /app

# Set environment variable to patch crypto usage
ENV NODE_OPTIONS=--experimental-global-webcrypto

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

# Step 2: Serve the built app using Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
