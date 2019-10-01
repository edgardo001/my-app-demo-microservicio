# Dockerfile-api-rest-hapi.dockerfile
# docker build -f Dockerfile-api-rest-hapi.dockerfile -t api-rest-hapi:1.0 .
# docker run -tid -p 3000:3000 --name api-rest-hapi api-rest-hapi:1.0
# docker exec -it api-rest-hapi /bin/bash
FROM node:10.16.3
ADD /api-rest-hapi /code
LABEL version="1.0"
LABEL description="Demo API con HapiJS"
LABEL maintainer="edgardo.a.v@gmail.com"
WORKDIR /code
EXPOSE 3000
ENV PORT=3000
RUN npm install
CMD ["node", "main.js"]