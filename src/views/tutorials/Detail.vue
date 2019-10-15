<template>
  <div class="content">
    <div class="cate-descri" v-bind="articleData">
      <h2><span>{{ articleData.title }}</span></h2>
      <div class="clr"></div>
      <div v-if="articleData.edit_mode===2">
        <p v-html="articleData.content"></p>
      </div>
      <div v-else>
        <p>{{ articleData.content }}</p>
      </div>

    </div>

    <div class="cate-descri" v-if="!articleData">
      <h2>感谢您的关注！！！</h2>
      <div class="clr"></div>
      <p>此模块暂时没有内容哦！</p>

      <p>感谢您的关注！！！</p>
      <p><a href="#">Read more </a></p>
    </div>
  </div>
</template>

<script>
import {getArticle} from '../../api/api'

export default {
  // name: 'article',

  data () {
    return {
      articleId: 0,
      articleData: {}
    }
  },
  methods: {
    getArticleData () {
      getArticle(this.articleId).then((response) => {
        console.log(response.data)
        this.articleData = response.data
      })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  created () {
    this.articleId = this.$route.params.articleId
    this.getArticleData()
  }
}
</script>

<style scoped>
body {
  line-height: 1;
  font-family: "Poppins",sans-serif;
}

body,html{
  width: 100%;
  height: 100%;
}
/*.container{*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  margin: 3px;*/
/*  !*border: 3px solid red;*!*/
/*  display: inline-block;*/
/*  position: relative;*/
/*}*/
.content{
  margin-left: 250px;
  /*border: 3px solid green;*/
  position: relative;
  /*float: left;*/
}
.cate-descri{
  text-align: left;
  margin: 10px 20px;
  padding: 1px 20px;
  border-radius: 10px;
  background:#fefefe url(../../static/images/tutorials/post_bg.gif) top repeat-x;
}
footer{
  float: bottom;
  /*margin-bottom: auto;*/
}
</style>
