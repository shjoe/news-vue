<template>
  <div class="newsVue">
    <form v-on:submit.prevent="findNews">
      <p>
        Search news for:
        <input type="text" v-model="query" placeholder="Enter a topic">
        <button type="submit">Search</button>
      </p>
    </form>
    <spinner v-if="showSpinner"></spinner>
    <ul class="articles" v-if="articles && articles.length > 0">
      <li class="articles" v-for="(articles,index) in articles" :key="index">
        <a class="articleLink" v-bind:href="articles.url" target="_blank">
          <img class="articleImage" v-bind:src="articles.urlToImage">
          <h3>{{articles.title}}</h3>
          <p>{{articles.description}}</p>
          <p class="citation">Author: {{articles.author}} / Source: {{articles.source.name}}</p>
        </a>
      </li>
    </ul>
    <div class="no-articles" v-else-if="articles && articles.length==0">
      <h2>No News Found</h2>
      <p>Please adjust your search to find more news.</p>
    </div>
    <error-list v-bind:errorList="errors"></error-list>
  </div>
</template>

<script>
import axios from "axios";
require("vue2-animate/dist/vue2-animate.min.css");
import Spinner from "@/components/Spinner";
import ErrorList from "@/components/ErrorList";
export default {
  name: "NewsVue",
  components: {
    spinner: Spinner
  },
  data() {
    return {
      results: null,
      articles: [],
      errors: [],
      query: [],
      showSpinner: false
    };
  },
  methods: {
    findNews: function() {
      this.showSpinner = true;
      axios
        .get(
          "https://newsapi.org/v2/everything?apiKey=84d4d2e235b442abbc10d838567c37da",
          {
            params: {
              q: this.query,
              sortBy: "popularity",
              pageSize: 12 //The number entered here will dictate how many results show on the page
            }
          }
        )
        .then(response => {
          this.showSpinner = false;
          this.articles = response.data.articles;
        })
        .catch(error => {
          this.showSpinner = false;
          this.errors.push(error);
        });
    }
  },
  components: {
    "error-list": ErrorList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newsVue {
  font-size: 1.2rem;
}
input[type="text"] {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0, 0, 0, 0.02);
  padding: 0.5rem;
}
button {
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1,
h2 {
  font-weight: normal;
}
h3 {
  font-weight: bold;
  text-decoration-line: underline;
}
.citation {
  font-size: 0.8rem;
}
ul.articles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
}
.articles li {
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  max-width: 350px;
  color: #fff;
  background: black;
  border-radius: 15px;
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}
.articleLink {
  text-decoration: none;
  color: #fff;
}
.articleImage {
  width: 350px;
  border-radius: 15px;
}
</style>