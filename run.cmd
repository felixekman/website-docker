
set COMPOSE_PROJECT_NAME=harmony

docker-compose build

docker-compose stop
docker-compose kill
docker-compose rm -f

docker-compose up -d

docker ps
