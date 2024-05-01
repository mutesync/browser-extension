# Mutesync Browser Extension

Extends mutesync desktop app to web clients.

## Installation:
```
yarn
```

## Usage/Development

Make sure you have the [mutesync](https://mutesync.com/virtual-mute-button) desktop app installed and running.

If you have Node.js v17 or newer installed
* set `NODE_OPTIONS` variable in `.env` file to `"--openssl-legacy-provider"`

Build the app in dev mode via
```
yarn start
```

Then load the project directory in your web browser as an unpacked extension.

## Build Zipped Extension
* set `NODE_ENV` variable in `.env` file to `"production"`
```
yarn build
```
