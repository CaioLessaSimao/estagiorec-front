#!/bin/bash

# Indo ao diretorio base
cd 

# Limpando contêineres Docker
echo "Limpando contêineres Docker..."
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker image rm $(docker image ls -q)

# Apagando arquivos antigos dos repositórios
echo "Apagando arquivos antigos dos repositórios..."
sudo rm -r estagio-rec
sudo rm -r estagiorec-front

# Clonar os repositórios
echo "Clonando repositórios..."
git clone https://github.com/BPThiago/estagio-rec
git clone https://github.com/CaioLessaSimao/estagiorec-front

# Subir o projeto estagio-rec
cd estagio-rec
echo "Subindo o estagio-rec..."
docker-compose up -d

# Subir o projeto estagiorec-front
cd ../estagiorec-front
echo "Subindo o estagiorec-front..."
docker-compose up -d

echo "Todos os serviços foram iniciados!"