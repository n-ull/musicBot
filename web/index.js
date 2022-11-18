const utils = require('../utils')

module.exports.start_server = function (client) {
	const path = require('path');
	const express = require('express');
	const player = client.player;

	const app = express();

	app.use('', express.static(path.join(__dirname, 'public')));

	app.get('/', (req, res) => {
		return res.sendFile('web/index.html', { root: '.' });
	});

	app.get('/auth/discord', (req, res) => {
		return res.sendFile('web/player.html', { root: '.' });
	});

	app.get('/pause', (req, res) => {
		utils.pause(player)
	})

	app.get('/add/', (req, res) => {
		utils.add(player, )
	})

	app.get('/player/queue', (req, res) => {
		if (player.queues.legnth == 0 || !player.queues.has(process.env.GUILD_ID)) {
			return false
		}

		var guild_player = player.queues.get(process.env.GUILD_ID)

		return res.json({
			tracks: guild_player.tracks,
			currentTrack: guild_player.nowPlaying()
		})
	})

	const port = '3000';
	app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
}