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

In this sections, I list the improvements I had in mind for this program, but could not finish within the 2 day limit.

* Creating a server, in order to use it inside a web browser.
* Creating a GUI inside the web browser.
* Creating a middleware for the display of error messages.
* Separating the writing of the errors in a specific logger file.
* Creating a automated tester with the help of jest.

## Software Design

I decided to use JavaScript's prototypes for my program, because they use less memory.
It might be not a big deal for my small program yet, but I tried to think of the big picture, when the program needs to work with bigger loads of data and request. In that case the program would highly benefit from the prototypes.
This memory will be saved by creating a constructer which is in my case 'Monitor'. For this constructer, I created a prototype, which is the 'blue print' for any new instances, so it does not create all the time new memory for each call, which it would do in a normal functional.
Furthermore, I used closures in my program to remember the environment in which it was created, so I could have access to the outer functions variable and parameters, which is a big help for the asynchronous setInterval function inside the Monitor prototype.
