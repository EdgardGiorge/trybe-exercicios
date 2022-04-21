#Imagem utilizada, sem passar a versão será a última
FROM nginx
#copia da minha máquina para a imagem, ver documentação da imagem  
COPY ./index.html /usr/share/nginx/html 
#Em qual porta a aplicação irá rodar, este comando é só pra saber qual porta pode ser usada
EXPOSE 3000 
#Setar variáveis de ambientes do javascripts key=value
ENV API_URL=http://localhost:8000/api/ 
#Qual a pasta de trabalho da nossa imagem, e serve como facilitador do comando RUN e seu respectivo comando na pasta citada
WORKDIR /usr/share/nginx/html
# Comando após o RUN dará na pasta de trabalho (neste caso roda o ls) 
RUN ls
#O que irá ser executado ao subir o nosso container (Quando daremos o docker container run ...) O ENTRYPOINT serve pra definir qual executável nosso container irá usar e o CMD serve pra configurar os parâmetros que irão ser enviados para este executável
ENTRYPOINT [ "/usr/sbin/nginx" ]
CMD [ "-g", "daemon off;" ]  

#Comandos no diretório:

#builda o dockerfile que esta neste diretório, ele irá baixar todas as imagens base do nginx e todas as suas camadas e logo em seguida ele executará todos os passos definidos no Dockerfile
#       docker build .

#ver se a imagem foi criada  
#       docker images

#subir o container em background fazendo um map de portas  (roda na minha porta 3000 e faz um bind na porta 80 do container) e coloco o respectivo id da imagem que criamos 
#       docker container run -d -p 3000:80 <id da imagem>

#ver se o container esta no ar
#       docker ps