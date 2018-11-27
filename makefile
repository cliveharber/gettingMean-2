default: build

build:
	docker-compose build
	docker-compose up

destroy:
	docker-compose rm -f -s -v
