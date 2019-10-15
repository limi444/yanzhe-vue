<template>
  <div class="main">
    <div class="content">
      <h1>{{article.title}}</h1>
      <div class="content_item">{{article.content}}</div>
    </div>
  </div>
</template>

<script>
import {getBlogsArticle} from '../../api/api'

export default {
  name: 'Detail',
  data () {
    return {
      article: {},
      articleId: null,
    }
  },
  methods: {
    getArticleData () {
      this.articleId = this.$route.params.articleId
      getBlogsArticle(this.articleId)
        .then((response) => {
        console.log(response.data)
        this.article = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  created () {
    this.getArticleData()
  }
}
</script>

<style scoped>
  .content {
    text-align: left;
    width: 740px;
    margin: 0 0 15px 0;
    background: #fff;border-bottom: 1px solid #D4D4D4;
    border: 1px solid #e5e5e5;
    border-radius: 7px 7px 7px 7px;
    -moz-border-radius: 7px 7px 7px 7px;
    -webkit-border: 7px 7px 7px 7px;
    float: left;
  }

  .content ul {
    margin: 2px 0 22px 0px;
  }

  .content ul li, .sidebar ul li {
    list-style-type: none;
    background: url(../../static/images/blogs/bullet.png) no-repeat;
    margin: 0 0 0 0;
    padding: 0 0 4px 25px;
    line-height: 1.5em;
  }
  .content h1 {
    background: #eee;padding: 10px 15px;
    font-size: 170%;
    border: 1px solid #fff;
    color: #063E4C;
    border-radius: 7px 7px 0 0;
    -moz-border-radius: 7px 7px 0 0;
    -webkit-border: 7px 7px 0 0;
  }

  .content h1 {
    margin: 0;
    padding: 5px 15px 10px 15px;
    color: #74706E;
  }
  .content_item {
    padding: 1px 15px;
  }
</style>
