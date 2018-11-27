export DB_HOST=database

default: build

build:
	docker-compose build
	docker-compose up -d

destroy:
	docker-compose rm -f -s -v
