## Dev update 5.28
I focused on getting the search page up and running. This may or may not be the main page.

I was able to call on certain objects in the `articles` array in order to populate some HTML. Currently, I have the basics down: title, description, author, source, and url that is linked in the articles `li`. 

In the future, I will need to figure out how to import the object `urlToImage` so that it displays on top of the article title. Once that is done, I can move on to how I want to structure the main and seconday page.

## Dev update 5.26
API calls currently return `articles` array. Will need to address and format so that articles are displayed in individual cards that include: title/link, source, and short description.

In the future, the main page will have top headlines and a second page will include the search box.

## Instructions for working with this application

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

```

**Note:** This application has been configured to build files to the `/docs` directory, making it compatible with the "Serve from `master` `/docs` directory" setting for GitHub Pages. Please adjust your GH Pages settings accordingly on your repository settings page.

For detailed explanation on how Vue works, check out the [guide](https://cli.vuejs.org/guide/) and [docs for vue-loader](https://cli.vuejs.org/config/#css-loaderoptions).

## Credits
This project makes use of the [News API](https://newsapi.org/), which is a wonderful, free API service that you should support.