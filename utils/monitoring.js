const needle = require('needle');
const fs = require('fs');
const config = require('../config/config');

function Monitor(options) {
	this.website = '';
	this.initialize(options);
}

Monitor.prototype = {
	initialize: function (options) {
		const that = this;

		that.website = options.website;
		that.startMonotoring();
	},
	startMonotoring: function () {
		const that = this;
		let time = new Date(Date.now()).toString();

		console.log(`\nLoading... ${that.website} \nTime: ${time}\n`);

		setInterval(function () {
			that.pingWebsite();
		}, config.timeout);
	},
	pingWebsite: function () {
		const that = this;

		try {
			needle.get(that.website, function (error, response) {
				if (!error && response.statusCode === 200) {
					that.isSuccess(response.statusCode, response.statusMessage);
				} else if (!error) {
					that.isOtherStatusCode(response.statusCode, response.statusMessage);
				} else {
					console.log(
						`\nloading error: something is wrong with the following url -> ${that.website}\n \n-----`
					);
				}
			});
		} catch (error) {
			console.log('something went comppletly wrong!', error);
		}
	},

	isSuccess: function (status, message) {
		this.printOutput(status, message);
	},

	isOtherStatusCode: function (status, message) {
		this.printOutput(status, message);
	},

	printOutput: function (status, message) {
		const start = new Date();

		let time = new Date(Date.now()).toString();
		let output = `Website: ${this.website}\nTime: ${time}\nStatus: ${status}\nMessage: ${message}`;

		needle.get(this.website, () => {
			let responseTime = new Date() - start;
			console.log('Response Time:', responseTime, 'ms \n------\n');
		});

		console.log(output);
		this.writeLog(output);
	},

	writeLog: function (output) {
		!fs.existsSync('./log')
			? fs.mkdirSync('./log')
			: fs.appendFile('./log/log.txt', output, (err) => {
					if (err) return console.log(err);
			  });
	},
};

module.exports = Monitor;
