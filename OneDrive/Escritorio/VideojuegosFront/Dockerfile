# Etapa 1: Construcción de la aplicación
FROM node:18.17.0-alpine AS build

WORKDIR /app

# Copiar los archivos necesarios
COPY package.json package-lock.json ./

# Instalar TODAS las dependencias, incluidas las de desarrollo
RUN npm install

# Copiar el código fuente
COPY . .

# Construir la aplicación
RUN npx vite build  # ⬅️ Asegura que Vite se ejecuta correctamente

# Etapa 2: Servir con Nginx
FROM nginx:1.23.3-alpine AS deploy

# Copiar archivos generados a Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 5471

CMD ["nginx", "-g", "daemon off;"]
