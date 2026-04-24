PROJECT_DIR := louis-blog
NPM := npm --prefix $(PROJECT_DIR)
PORT := 5173

.PHONY: install run dev build deploy kill-port

install:
	$(NPM) install

kill-port:
	@pids="$$(lsof -ti tcp:$(PORT) 2>/dev/null)"; \
	if [ -n "$$pids" ]; then \
		echo "Port $(PORT) is busy; killing $$pids"; \
		kill -9 $$pids; \
	fi

run: kill-port
	$(NPM) run dev

dev: run

build:
	$(NPM) run build

deploy:
	$(NPM) run deploy
