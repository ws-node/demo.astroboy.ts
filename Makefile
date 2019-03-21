build:
	rm -rf dist
	tsc --project tsconfig.npm.json
	cp tsconfig.npm.json dist

update:
	yarn add astroboy.ts@latest

start-dist:
	cd dist && ast dev

dev:
	npx atc router --filetype ts --approot /v1
	yarn run dev
