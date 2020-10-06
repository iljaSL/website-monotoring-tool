## About The Project

This is a web site monotoring tool, which can read a list of web pages (HTTP and HTTPS) and outputs the current state of the website.
It is part of the two-day long homework assignment by F-Secure.

Features:
* You can add as much websites as you want to the websitelist inside the config.js file.
* You can set how often you want to send an HTTP/S request, inside the config.js file (default: 5000 ms).
* The program measures and displays the time it took for the web server to complete the whole request.
* The program displays the status code, status message and the current time of the request.
* The output is getting stored inside a log file and can be accessed at any time.

### Built With

I tried to keep the ussage of npm packages a little as possible, and just used packages, that I really needed.

* [nodeJS](https://nodejs.org/en/)
* [Needle](https://www.npmjs.com/package/needle)
* [Node.js: fs-extra](https://www.npmjs.com/package/fs-extra)

## Installation

1. Clone the repo
```sh
git clone https://github.com/iljaSL/website-monotoring-tool.git
```
2. Install NPM packages
```sh
npm install
```
## Usage

You can include/remove websites and set the interval (default: 5000ms) for the HTTP/S requests inside `config/config.js` file. <br>
Start the program with:

```sh
npm start
```
## Improvements

In this sections, I list the improvements I had in mind for this program, but could not finish within 2 days.

* Creating a server, in order to use it inside a web browser.
* Creating a GUI inside the web browser.
*
