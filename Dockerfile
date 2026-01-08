# Étape 1 : Construction
FROM node:20-alpine AS builder

WORKDIR /app

# Installation des dépendances
COPY package*.json ./
RUN npm ci

# Copie du code source et build
COPY . .
RUN npm run build

# Étape 2 : Production
FROM nginx:alpine

# Copie des fichiers buildés depuis l'étape précédente
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposition du port 80 (interne au container)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
