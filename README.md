## Dev update 5.30 Part 2

I had to change my `axios.get` back to `https://newsapi.org/v2/everything?`, some searches did not return anything so I'll have to leave it as is for now.

Message when there are 0 articles put in place, somehow I broke the spinner animation. I'll have to debug this.

The error message is now a component located in `/components/ErrorList.vue`. Tested the error message by modifying the API key. 

## Dev update 5.30 Part 1

I've changed my `axios.get` to `https://newsapi.org/v2/top-headlines?` in order to grab more popular/pertinent news articles. I've also incorporated flexbox into `ul.articles` to center, wrap, and make the content uniform.

## Dev update 5.28 Part 2

Article images now populate. The `img` tag is placed just after the `ul` tag and incorporates a `v:bind`. I had to define the width or else it would take up the entire page and overlap with other articles.

Loading animation added in `/src/components` and incorporated into `NewsVue.vue`.

## Dev update 5.28 Part 1
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