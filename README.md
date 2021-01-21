# **Nano tip**

Alert box for Nano tip in lives streams.

## How to use?

As this one was inspired in Alert Box from "SteamLabs", the use is similar: create a "browser" inside OBS and add a link with a Nano wallet to alerted when a transaction comes in.

### What is Nano?

Nano is digital money for the modern world. Try out a fee-less, eco-friendly and instant currency that is easy to use, accept and integrate with. You can to know more at [nano.org](https://nano.org/).

### Where to get a wallet?

An easy way to create a Nano wallet is through the [NanoVault](https://nanovault.io/). It is simple and straightforward.

### How to set up the environment?

This project uses React in the front-end to get the information from the URL. It used browserify to "transpile" the node code to a "bundle.js" executable in the browser, loaded in a static "index.html". This HTML file is the entry point, all request needs to be redirected to this one. All public files, what will be public, are in "www" folder.

**The [Nano_Callback_System](https://github.com/jamescoxon/Nano_Callback_System) server is used here to test. Unfortunately, It just allows connection by some seconds, what makes my project does not useful until I set an own server.**

The test environment has a nginx server with a "location" redirecting all to "/".

```bash
location / {
	try_files $uri /index.html;
}
```

After your application is hosted and configured, the entry available are:

- /home - Home from application
- /alert - Just shows an error
- /alert/:wallet - Where ":wallet"is your Nano wallet address.

An example could be: 

```bash
http://localhost/alert/nano_19qkxbngbr8msg6dnqxdnqgdu1xrqah3odot8krmk18oihskca6hspcord9e
```

You should see a GIF with and a white text, after some seconds for test. It should to go out and back when your wallet receives a transaction.

I recommend see the logs in the browser to keep up with the errors.

## How to set it on OBS:

To use the alert box is simple, get the address with the wallet, like the example up, and put it in a "browser" inside OBS. If everything is okay, just put it where you want in your screen.

## Scripts

It had many scripts, but when the project is focused in the browser, the only one needed at this moment is the "dev". A build script, what will do a production-react React build will be settled as soon as possible.

### dev

```bash
npm run dev
```

Running to watch the JSX files and "tanspile" it to a "bundle.js" in "www" folder.