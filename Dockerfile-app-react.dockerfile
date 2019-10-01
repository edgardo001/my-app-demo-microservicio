# Dockerfile-app-react.dockerfile
# docker build -f Dockerfile-app-react.dockerfile -t app-react:1.0 .
# docker run -tid -p 5000:5000 --name app-react app-react:1.0
# docker exec -it app-react /bin/bash
FROM node:10.16.3
ADD /app-react/build /code
LABEL version="1.0"
LABEL description="Demo REACT 16"
LABEL maintainer="edgardo.a.v@gmail.com"
WORKDIR /code
EXPOSE 5000
RUN npm install -g serve
CMD ["serve", "-s", "."]