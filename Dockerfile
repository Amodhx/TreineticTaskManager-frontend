# Stage 1: Build Angular
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

# Stage 2: Nginx
FROM nginx:alpine
# Remove default files and set permissions
RUN rm -rf /usr/share/nginx/html/* && \
    chmod -R 755 /usr/share/nginx/html
# Copy built files
COPY --from=build /app/dist/treinetictask/ /usr/share/nginx/html/
# Copy Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
# Run as root (Alpine's Nginx doesn't have 'nginx' user)
CMD ["nginx", "-g", "daemon off;"]
