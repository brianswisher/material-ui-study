# Universal Routes

You will need `node` w/ `npm`.

```
# is node already isnstalled (~v0.10.33)
node -v

# install with
brew install node

```

When developing, do this:

```
npm install
npm run watch
```

The watch command will generate a file that loads conditionally in the `development` environment so that you can see your edits in a browser. When it's time to commit, you should run the bundle command:

```
npm run bundle
```
