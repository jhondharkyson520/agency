# Use a imagem oficial do Node.js como base
FROM node:22-alpine AS build

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install -g npm@latest

# Copia todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Compila a aplicação para produção
RUN npm run build

# Use uma imagem leve do Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copia os arquivos de build para o diretório padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponha a porta na qual o Nginx irá rodar
EXPOSE 80

# Inicia o Nginx quando o contêiner é iniciado
CMD ["nginx", "-g", "daemon off;"]
