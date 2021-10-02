.PHONY: setup

setup:
	cd docker && docker-compose up -d --build

destroy:
	cd docker && docker-compose down