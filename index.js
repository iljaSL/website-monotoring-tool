const Monitor = require('./utils/monitoring');
const config = require('./config/config');
// const test = require('./test/websitesWithDifferentStatusCodes');

const checkIfValidUrl = /^((http|https):\/\/)/;
const monitorSession = [];

config.websites.forEach(function (website) {
	console.log(
		'\x1b[44m%s\x1b[0m',
		'This monitoring sessions is about to begin! You can quit the programm with ctr + c'
	);
	if (!checkIfValidUrl.test(website.url))
		return console.log('Not a valid url!');
	const newRequest = new Monitor({
		website: website.url,
	});

	monitorSession.push(newRequest);
});
