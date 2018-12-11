build:
	rm -rf dist
	tsc --project tsconfig.npm.json
	cp tsconfig.npm.json dist

start-dist:
	cd dist && ast dev

dev:
	yarn add astroboy.ts@latest
	yarn run dev
