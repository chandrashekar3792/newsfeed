
let {buildResponse} = require('../utils/utils');
let request         = require('async-request')

module.exports.getNewsFeed = async(event, context)=>{
    try {
        let feedResult = await request(`https://newsapi.org/v2/everything?q=bitcoin&from=${event.from}&sortBy=publishedAt&apiKey=${process.env.NEWS_FEED_API_KEY}`)
        let result = JSON.parse(feedResult.body)
        if(result && result.status == "ok" && result.articles.length)
            return buildResponse(200, result.articles, 'Successfully fetched news feeds for the given date', 'data')
        else return buildResponse(400, result, 'Error in fetching news feeds', 'data')
    } catch (error) {
       return buildResponse(500, error, 'Error in logging in', 'error')
    }
}
