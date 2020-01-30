
let {buildResponse} = require('../utils/utils');
let request         = require('async-request')
/**
		 * @api {get} /api/v1/feeds 4.Newsfeeds
		 * @apiVersion 1.0.0
		 * @apiGroup Newsfeed
		 * @apiSuccessExample {json} Success
		 *    HTTP/1.1 200 OK
		 *{
    "status": true,
    "message": "Successfully fetched news feeds for the given date",
    "data": [
        {
            "source": {
                "id": null,
                "name": "Newsbtc.com"
            },
            "author": "Tony Spilotro",
            "title": "McAfee Just Backtracked From His Infamous $1 Million Bitcoin Price Prediction",
            "description": "John McAfee, the eccentric crypto promoter and iconic cybersecurity expert, made a bold prediction years back that Bitcoin would reach $1 million per BTC by the end of the year of 2020. Now that the year is upon us, and Bitcoin price is experiencing a case of…",
            "url": "https://www.newsbtc.com/2020/01/29/mcafee-just-backtracked-from-his-infamous-1-million-bitcoin-price-prediction/",
            "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2020/01/bitcoin-price-prediction-impotence-crypto-mcafee-shutterstock_507199288-1200x780.jpg",
            "publishedAt": "2020-01-29T16:21:13Z",
            "content": "John McAfee, the eccentric crypto promoter and iconic cybersecurity expert, made a bold prediction years back that Bitcoin would reach $1 million per BTC by the end of the year of 2020.\r\nNow that the year is upon us, and Bitcoin price is experiencing a case o… [+2981 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Charles Weeks",
            "title": "After years as a financial planner, I know my first question sparks fear, dread, and confusion — and that's on purpose",
            "description": "I'm a financial planner, and I always ask new clients the same question: Do you have financial statements? What I mean is, do you have a personal balance sheet and income statement? A balance sheet includes things like your liabilities and assets, and your in…",
            "url": "https://www.businessinsider.com/scary-question-ask-my-financial-planning-clients",
            "urlToImage": "https://i.insider.com/5e30c1df62fa81520a663c13?width=1200&format=jpeg",
            "publishedAt": "2020-01-29T16:15:51Z",
            "content": "As a financial planner, there's one question I always ask when meeting with a new client: Do you have financial statements? And by that I mean a personal balance sheet and income statement.\r\nYou can imagine the equal parts fear, dread, and confusion this one … [+5274 chars]"
        }]
}
		 * @apiErrorExample {json} Error
		 *    HTTP/1.1 401 Unauthorized
	{
    "statusCode": 401,
    "error": "Unauthorized",
    "message": "Unauthorized"
}
*/
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
