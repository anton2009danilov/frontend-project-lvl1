install:
	npm ci
brain-games:
	node bin/brain-games.js
test-publish:
	npm publish --dry-run
lint:
	npx eslint .