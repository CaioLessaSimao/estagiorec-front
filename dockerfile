FROM node:16

# Definir o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar o package.json e package-lock.json para dentro do container
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar todo o código da aplicação para o container
COPY . .

# Rodar o build do Vue para produção
RUN npm run build

# Instalar o Serve globalmente para servir os arquivos estáticos
RUN npm install -g serve

# Expor a porta onde o Vue será servido
EXPOSE 8080

# Comando para rodar a aplicação em produção
CMD ["serve", "-s", "dist", "-l", "8080"]
