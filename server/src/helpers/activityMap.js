
const mapActivityData = (activities) => {
    return activities.map(activity => {
        return {
            id: activity.id,
            name: activity.name,
            difficulty: activity.difficulty,
            duration: activity.duration,
            season: activity.season,
            countries: activity.Countries.map(country => country.name)
        }
    })
}

module.exports = {
    mapActivityData
}