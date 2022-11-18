module.exports.play = function (player) {
    const queue = player.getQueue(process.env.GUILD_ID)
    if (!queue) {
        console.log('Theres no queue')
    } else {
        queue.setPaused(false)
    }
}

module.exports.pause = function (player) {
    const queue = player.getQueue(process.env.GUILD_ID)
    if (!queue) {
        console.log('Theres no queue')
    } else {
        queue.setPaused(true)
    }
}

module.exports.stop = function (player) {
    const queue = player.getQueue(process.env.GUILD_ID)
    if (!queue) {
        console.log('Theres no queue')
    } else {
        queue.destroy()
    }
}

module.exports.add = async function (player, terms) {
    let name = terms
    const queue = await player.createQueue(process.env.GUILD_ID)
    const result = await client.player.search(name, {
        requestedBy: interaction.user,
        searchEngine: QueryType.YOUTUBE_VIDEO
    })

    if (result.tracks.length === 0)
        return interaction.editReply("No results")

    const song = result.tracks[0]
    await queue.addTrack()
}

module.exports.remove = function (player, track) {
    const queue = player.getQueue(process.env.GUILD_ID)
    try {
        queue.remove(track)
    } catch (e) {
        console.log('The track is not in the queue')
    }
}

module.exports.next = function (player) {
    const queue = player.getQueue(process.env.GUILD_ID)
    if (!queue) {
        console.log('Theres no queue')
    } else {
        queue.skip()
    }
}

module.exports.jump = function (player, track) {
    const queue = player.getQueue(process.env.GUILD_ID)
    try {
        queue.skipTo(track)
    } catch (e) {
        console.log('The track is not in the queue')
    }
}

module.exports.previous = function (player) {
    const queue = player.getQueue(process.env.GUILD_ID)
    if (!queue) {
        console.log('Theres no queue')
    } else {
        queue.back()
    }
}

module.exports.shuffle = function (player) {
    const queue = player.getQueue(process.env.GUILD_ID)
    if (!queue) {
        console.log('Theres no queue')
    } else {
        queue.shuffle()
    }
}
