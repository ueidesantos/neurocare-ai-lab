FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/out /usr/share/nginx/html/neurocare-ai-lab
# Add a default nginx config to handle the subpath if needed,
# or just redirect root to the subpath
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri $uri/ /neurocare-ai-lab/index.html; \
    } \
    location /neurocare-ai-lab { \
        alias /usr/share/nginx/html/neurocare-ai-lab; \
        try_files $uri $uri/ /neurocare-ai-lab/index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
