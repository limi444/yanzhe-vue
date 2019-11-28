<template>
  <div id="sidebar_container">
    <div class="sidebar">
      <h3>老鸭粉丝汤</h3>
      <div class="sidebar_item">
        <!-- <h5>{{ ana.time }}</h5> -->
        <p v-html="wiseword.content"></p>
        <h4 style="float:right;">{{ wiseword.auther }}</h4>
      </div>
      <div class="sidebar_base"></div>
    </div>
    <div class="sidebar">
      <h3>精华推荐</h3>
      <div class="sidebar_item">
        <ul v-if="recommendList">
          <li v-for="artRecom in recommendList"><a class="title" href="">{{ artRecom.title.substring(0,11) }}</a></li>
        </ul>
        <ul v-else>
          <li>暂时没有热门文章</li>
        </ul>
      </div>
      <div class="sidebar_base"></div>
    </div>
    <div class="sidebar">
      <h3>阅读排行</h3>
      <div class="sidebar_item">
        <ul v-if="rankingList">
          <li v-for="artRank in rankingList"><a class="title" href="">{{ artRank.title.substring(0,11) }}</a></li>
        </ul>
        <ul v-else>
          <li>暂时没有热门文章</li>
        </ul>
      </div>
      <div class="sidebar_base"></div>
    </div>
  </div>
</template>

<script>
  import {getWiseWord, listBlogsArticle} from '../../api/api'

  export default {
    name: 'blogs_sidebar',
    data () {
      return {
        recommendList: [
          // {id:1, title: '暂无推荐文章暂无推荐文章暂无推荐文章'},
          {id:1, title: '暂无推荐文章'},
        ],
        rankingList: '',
        wiseword: {
          content: '暂无内容',
          auther: 'cml'
        }
      }
    },
    methods: {
      getWiseWordData () {
        getWiseWord({}).then((response) => {
          this.wiseword = response.data[0]
        }).catch((error) => {
          console.log(error.data)
        })
      },
      getRecommendData () {
        listBlogsArticle({
          recommend:true
        })
          .then((response) => {
            console.log(response.data)
            this.recommendList = response.data
          })
          .catch((error) => {
            console.log(error.data)
          })
      },
      getRankingData () {
        listBlogsArticle({
          collect:true
        })
          .then((response) => {
            console.log(response.data)
            this.rankingList = response.data
          })
          .catch((error) => {
            console.log(error.data)
          })
      }
    },
    created () {
      this.getWiseWordData()
      this.getRankingData()
      this.getRecommendData()
    }
  }
</script>

<style scoped>
  #sidebar_container {
    float: right;
    width: 280px;
  }

  .sidebar {
    float: right;
    width: inherit;
    margin: 0 0 17px 0;
    background: #FFF;
    border: 1px solid #e5e5e5;
    border-radius: 7px 7px 7px 7px;
    -moz-border-radius: 7px 7px 7px 7px;
    -webkit-border: 7px 7px 7px 7px;
  }

  .sidebar h3{
    margin: 0;
    background: #eee;
    font-size: 170%;
    padding: 5px 15px 10px 15px;
    border: 1px solid #fff;
    color: #74706E;
    border-radius: 7px 7px 0 0;
    -moz-border-radius: 7px 7px 0 0;
    -webkit-border: 7px 7px 0 0;
  }
  .sidebar_item {
    padding: 5px 15px;
  }
  .sidebar_item ul {
    padding-left: 15px;
    margin: -10px 0 0 0;
  }
  .sidebar_item li {
    float: left;
    color: #444;
  }
  .sidebar_item p{
    font-size: 15px;
    margin: 5px;
  }
  .sidebar_item h4{
    margin: 5px;
  }
  ul {
    margin: 2px 0 22px 17px;
  }

  ul li {
    list-style-type: square;
    /*margin: 0 0 6px 0;*/
    /*padding: 0 0 4px 5px;*/
    line-height: 1.5em;
  }
  a {
    outline: none;
    text-decoration: none;
    color: #03D1FD;
  }

  a:hover {
    text-decoration: underline;
    color: #fa8341;
  }
</style>
