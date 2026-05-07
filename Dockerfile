# -------------------------
# Etapa 1: dependencias
# -------------------------
FROM node:22-alpine AS deps

# Define el directorio de trabajo
WORKDIR /usr/src/app

# Copia solo los archivos de dependencias
COPY package.json ./

# Instala todas las dependencias (incluye dev para migraciones/seeds)
RUN npm install

# -------------------------
# Etapa 2: aplicación final
# -------------------------
FROM node:22-alpine

WORKDIR /usr/src/app

# Copia dependencias desde la primera etapa
COPY --from=deps /usr/src/app/node_modules ./node_modules

# Copia el código fuente
COPY . .

# Comando de inicio
CMD ["npm", "start"]
