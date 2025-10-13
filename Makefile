PROJECT_DIR := louis-blog
NPM := npm --prefix $(PROJECT_DIR)

.PHONY: run build deploy

run:
	$(NPM) run dev -- --port 5173

build:
	$(NPM) run build

deploy:
	$(NPM) run deploy
