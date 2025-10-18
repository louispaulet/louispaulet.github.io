PROJECT_DIR := louis-blog
NPM := npm --prefix $(PROJECT_DIR)

.PHONY: install run build deploy

install:
	$(NPM) install

run:
	$(NPM) run dev -- --port 5173

build:
	$(NPM) run build

deploy:
	$(NPM) run deploy
