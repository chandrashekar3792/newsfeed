define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/feeds",
    "title": "4.Newsfeeds",
    "version": "1.0.0",
    "group": "Newsfeed",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"message\": \"Successfully fetched news feeds for the given date\",\n    \"data\": [\n        {\n            \"source\": {\n                \"id\": null,\n                \"name\": \"Newsbtc.com\"\n            },\n            \"author\": \"Tony Spilotro\",\n            \"title\": \"McAfee Just Backtracked From His Infamous $1 Million Bitcoin Price Prediction\",\n            \"description\": \"John McAfee, the eccentric crypto promoter and iconic cybersecurity expert, made a bold prediction years back that Bitcoin would reach $1 million per BTC by the end of the year of 2020. Now that the year is upon us, and Bitcoin price is experiencing a case of…\",\n            \"url\": \"https://www.newsbtc.com/2020/01/29/mcafee-just-backtracked-from-his-infamous-1-million-bitcoin-price-prediction/\",\n            \"urlToImage\": \"https://www.newsbtc.com/wp-content/uploads/2020/01/bitcoin-price-prediction-impotence-crypto-mcafee-shutterstock_507199288-1200x780.jpg\",\n            \"publishedAt\": \"2020-01-29T16:21:13Z\",\n            \"content\": \"John McAfee, the eccentric crypto promoter and iconic cybersecurity expert, made a bold prediction years back that Bitcoin would reach $1 million per BTC by the end of the year of 2020.\\r\\nNow that the year is upon us, and Bitcoin price is experiencing a case o… [+2981 chars]\"\n        },\n        {\n            \"source\": {\n                \"id\": \"business-insider\",\n                \"name\": \"Business Insider\"\n            },\n            \"author\": \"Charles Weeks\",\n            \"title\": \"After years as a financial planner, I know my first question sparks fear, dread, and confusion — and that's on purpose\",\n            \"description\": \"I'm a financial planner, and I always ask new clients the same question: Do you have financial statements? What I mean is, do you have a personal balance sheet and income statement? A balance sheet includes things like your liabilities and assets, and your in…\",\n            \"url\": \"https://www.businessinsider.com/scary-question-ask-my-financial-planning-clients\",\n            \"urlToImage\": \"https://i.insider.com/5e30c1df62fa81520a663c13?width=1200&format=jpeg\",\n            \"publishedAt\": \"2020-01-29T16:15:51Z\",\n            \"content\": \"As a financial planner, there's one question I always ask when meeting with a new client: Do you have financial statements? And by that I mean a personal balance sheet and income statement.\\r\\nYou can imagine the equal parts fear, dread, and confusion this one … [+5274 chars]\"\n        }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "   HTTP/1.1 401 Unauthorized\n\t{\n    \"statusCode\": 401,\n    \"error\": \"Unauthorized\",\n    \"message\": \"Unauthorized\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/getNewsFeed.js",
    "groupTitle": "Newsfeed",
    "name": "GetApiV1Feeds"
  },
  {
    "type": "post",
    "url": "/api/v1/login",
    "title": "3.Login User",
    "version": "1.0.0",
    "group": "Newsfeed",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n\t\"email\":\"chandrashekar998@gmail.com\",\n\t\"password\":\"Chandru@1992\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"message\": \"Successfully Logged In\",\n    \"data\": {\n        \"token\": \"eyJraWQiOiI5ZDRRb1Mzc0NNUncxXC9HZjU5T2p2WT....\",\n        \"email\": \"chandrashekar998@gmail.com\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "   HTTP/1.1 500 Internal Server Error\n{\n    \"status\": true,\n    \"message\": \"Error in logging in\",\n    \"error\": \"Incorrect username or password.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/login.js",
    "groupTitle": "Newsfeed",
    "name": "PostApiV1Login"
  },
  {
    "type": "post",
    "url": "/api/v1/register",
    "title": "1.Register User",
    "version": "1.0.0",
    "group": "Newsfeed",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": " {\n\t\"email\":\"chandrashekar998@gmail.com\",\n\t\"mobile\":\"7899032001\",\n\t\"password\":\"Chandru@1992\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"message\": \"Verify Token Sent\",\n    \"data\": {\n        \"username\": \"chandrashekar998@gmail.com\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "   HTTP/1.1 500 Internal Server Error\n{\n    \"status\": true,\n    \"message\": \"Error in logging in\",\n    \"error\": {\n        \"code\": \"UsernameExistsException\",\n        \"name\": \"UsernameExistsException\",\n        \"message\": \"An account with the given email already exists.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/register.js",
    "groupTitle": "Newsfeed",
    "name": "PostApiV1Register"
  },
  {
    "type": "post",
    "url": "/api/v1/verifyUser",
    "title": "2.Verify User",
    "version": "1.0.0",
    "group": "Newsfeed",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n\t\"email\":\"chandrashekar998@gmail.com\",\n\t\"token\":\"05800\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n    \"status\": true,\n    \"message\": \"Successfully Registered\",\n    \"data\": \"SUCCESS\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "   HTTP/1.1 500 Internal Server Error\n{\n    \"status\": true,\n    \"message\": \"Error in logging in\",\n    \"error\": {\n        \"code\": \"ExpiredCodeException\",\n        \"name\": \"ExpiredCodeException\",\n        \"message\": \"Invalid code provided, please request a code again.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/verifyUser.js",
    "groupTitle": "Newsfeed",
    "name": "PostApiV1Verifyuser"
  }
] });
