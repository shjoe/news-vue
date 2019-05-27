<template>
  <div class="newsVue">
    <form v-on:submit.prevent="findNews">
      <p>
        Search news for:
        <input type="text" v-model="query" placeholder="Enter a topic">
        <button type="submit">Search</button>
      </p>
    </form>
    <ul class="articles" v-if="articles && articles.length > 0">
      <li class="item" v-for="(item,index) of articles" :key="index">
        <p>
          <strong>{{articles}}</strong>
        </p>
      </li>
    </ul>
    <div class="no-articles" v-else-if="articles && articles.length==0">
      <h2>No News Found</h2>
      <p>Please adjust your search to find more news.</p>
    </div>

    <ul class="errors" v-if="errors && errors.length > 0">
      <li v-for="(error,index) of errors" :key="index">{{error.message}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NewsVue",
  data() {
    return {
      articles: [],
      errors: [],
      query: [],
    };
  },
  methods: {
    findNews: function() {
      axios
        .get("https://newsapi.org/v2/everything?apiKey=84d4d2e235b442abbc10d838567c37da", {
          params: {
            q: this.query,
          }
        })
        .then(response => {
          this.articles = response.data.articles;
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newsVue {
  font-size: 1.4rem;
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

ul.articles {
  list-style-type: none;
  padding: 0;
}

.articles li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
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

a {
  color: #42b983;
}
</style>