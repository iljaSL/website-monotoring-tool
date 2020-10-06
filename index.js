const Monitor = require('./lib/monitoring');
const config = require('./config/config');

const checkIfValidUrl = /^((http|https):\/\/)/;
const monitorSession = [];

config.websites.forEach(function (website) {
	if (!checkIfValidUrl.test(website.url))
		return console.log('Not a valid url!');

	const newRequest = new Monitor({
		website: website.url,
	});

	monitorSession.push(newRequest);
});
