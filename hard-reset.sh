#!bin/bash

docker volume prune
docker-compose down
docker volume create postgres-data
docker volume create pgadmin
docker-compose up --build