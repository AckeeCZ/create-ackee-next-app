# create-ackee-next-app

## Usage

Run

```sh
$ npx create-ackee-next-app
```

or

```sh
$ yarn create ackee-next-app
```

It's just a "proxy binary" that runs this command:

```sh
$ yarn create next-app --example=https://github.com/AckeeCZ/next-app-template
```

### Branch specific
```sh
yarn create next-app --example=https://github.com/AckeeCZ/next-app-template/tree/{branch} --example-path=template
```
