<template>
  <div id="sidebar" >
    <div class="sidebox">
      <a v-on:click="getWiseWordData"><h3>老鸭粉丝汤~</h3></a>
      <div class="clr"></div>
      <p class="wise" style="color: green">   <em v-html="wiseword.content"> </em></p>
      <!-- <p class="ww-author" style="float:right;"><strong>{{wiseword.author}}</strong></p> -->
    </div>
    <div class="sidebox">
      <h1>热门版块</h1>
      <ul class="sidemenu">
        <li class="category1" v-for="(cate1,index) in allMenuLabel" :key="cate1.id" >
          <a @click="clickCategory1(cate1, index)" @dblclick="dblclickArticleData(cate1.id)">{{cate1.name}}</a>
          <ul class="child_menu" v-show="showAllmenu1 === index">
            <li class="category2" v-for="(cate2,ind) in cate1.sub_category" :key="cate2.id" >
              <div class="J_subView" >
                <dl>
                  <dt><a @click="clickCategory2(cate2, ind)" @dblclick="dblclickArticleData(cate2.id)">{{cate2.name}}</a></dt>
                  <dd  v-show="showAllmenu2 === ind" v-for="cate3 in cate2.sub_category" :key="cate3.id">
                    <a @dblclick="dblclickArticleData(cate3.id) ">{{cate3.name}}</a>
                  </dd>
                </dl>
                <div class="clear"></div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div class="topbo">
        <!-- Block Square -->
        <div class="block_square">
          <a href="/forums/index/" class="bnor">所有板块</a>
        </div>
        <!-- End -->
      </div>
    </div>

    <div class="sidebox">
      <h1>热点帖子</h1>
      <ul class="sidemenu" v-if="recommendList">
        <li v-for="artRecom in recommendList"><a class="title" href="">{{artRecom.title.substring(0,20)}}</a></li>
      </ul>
      <ul class="sidemenu" v-else>
        <li>暂时没有热门文章</li>
      </ul>
    </div>

    <!-- <div class="sidebox">
      <h1>论坛统计</h1>
      <ul>
        <li>在线人数: {% get_online_ips_count  %}</li>
        <li>注册人数：{{ foruminfo.account_number }}</li>
        <li>帖子数：{{ foruminfo.post_number }}</li>
        <li>今日: {{ foruminfo.today_post_number }}</li>
        <li>昨日: {{ foruminfo.lastday_post_number }}</li>

      </ul>
    </div> -->

    <div class="sidebox">
      <h1>最近评论</h1>
      <ul class="sidemenu" v-if="rankingList">
        <li v-for="artRank in rankingList"><a class="title" href="">{{artRank.title.substring(0,10)}}</a></li>
      </ul>
      <ul class="sidemenu" v-else>
        <li>暂时没有排行文章</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { getWiseWord, listNote } from '../../api/api'
  import { getTutorialsCategory, getBlogsCategory, getForumsCategory } from '../../api/api'
  export default {
    name: 'forums_sidebar',
    data () {
      return {
        column: {},
        hot_post: {},
        foruminfo: {},
        last_comment: {},
        allMenuLabel: [],
        showAllmenu1: false, // 菜单显示控制
        showAllmenu2: false, // 菜单显示控制
        recommendList: [
          {id:1, title: '暂无推荐文章'},
          {id:1, title: '暂无推荐文章'},
        ],
        rankingList: [
          {id:1, title: '暂无推荐文章'},
          {id:1, title: '暂无推荐文章'},
        ],
        wiseword: {
          content: '老鸭粉丝汤老鸭粉丝汤老鸭粉丝汤老鸭粉丝汤老鸭粉丝汤',
          author: 'cml'
        }
        // user: {
        //   username: 'cml'
        // }
      }
    },
    methods: {
      // 双击获取分类文章数据
      dblclickArticleData (cateid) {
        this.$router.push({name: 'tutorialsListArticle', params: { categoryId: cateid }})
      },
      // 单击获取类别下的子类信息描述
      clickCategory1 (cateData, index) {
        this.showAllmenu1 = index
        this.$emit('selectedHandle', cateData.sub_category)
      },
      clickCategory2 (cateData, index) {
        this.showAllmenu2 = index
        this.$emit('selectedHandle', cateData.sub_category)
      },
      getWiseWordData () {
        getWiseWord({}).then((response) => {
          this.wiseword = response.data[0]
        }).catch((error) => {
          console.log(error.data)
        })
      },
      getRecommendData () {
        listNote({recommend:true})
          .then((response) => {
            this.recommendList = response.data
            console.log(this.recommendList)
          })
          .catch((error) => {
            console.log(error.data)
          })
      },
      getRankingData () {
        listNote({collect:true})
          .then((response) => {
            this.rankingList = response.data 
          })
          .catch((error) => {
            console.log(error.data)
          })
      },
      getMenu () { // 获取菜单
        var site_type = this.$route.matched[0].path
        if (site_type === '/blogs') {
          getBlogsCategory({
              params: {}
          }).then((response) => {
              console.log(response.data)
              this.allMenuLabel = response.data
              // this.selectedData = response.data
          })
          .catch(function (error) {
              console.log(error)
          })
        }
        if (site_type === '/forums') {
          getForumsCategory({
              params: {}
          }).then((response) => {
              console.log(response.data)
              this.allMenuLabel = response.data
              // this.selectedData = response.data
          })
          .catch(function (error) {
              console.log(error)
          })
        }
        if (site_type === '/tutorials') {
          getTutorialsCategory({
              params: {}
          }).then((response) => {
              console.log(response.data)
              this.allMenuLabel = response.data
              // this.selectedData = response.data
          })
          .catch(function (error) {
              console.log(error)
          })
        }
      }
    },
    created () {
      this.getWiseWordData() // 获取鸡汤
      this.getMenu()
      this.getRecommendData() // 获取热词
      this.getRankingData() // 获取热词
    }
  }
</script>

<style scoped>
/* sidebar */
#sidebar {
  float: right;
  width: 260px;
  margin: 20px 0;
  padding: 0;
}
#sidebar h1 {
  font: bold 1.6em 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, Sans-Serif;
  /*background: #444 url(images/arrow.gif) no-repeat 10px .6em;*/
  padding: 7px 0 7px 35px;
  margin-bottom: 10px;
  color: #B22222;
}
#sidebar ul.sidemenu {
  list-style:none;
  margin: 0;
  padding: 5px 0 15px 0;
}
#sidebar ul.sidemenu li {
  padding: 0 10px;
}
#sidebar ul.sidemenu a {
  display: block;
  font-weight:bold;
  color: #CCC;
  height: 1.5em;
  text-decoration: none;
  padding: 5px 0 5px 15px;
  /*background: #444;*/
  border-bottom: 1px solid #0D0D0D;
  line-height: 1.5em;
}
#sidebar ul.sidemenu a.top{
  border-top: 1px solid #0D0D0D;
}
#sidebar ul.sidemenu a:hover {
  padding: 5px 0 5px 10px;
  /*background: #444;*/
  border-left: 5px solid  #D30F16;
  color: #D30F16;
}
#sidebar .sidebox {
  background: #aaaaaa;
  margin: 5px 15px 10px 15px;
  border-radius: 5px;
}
/* links */
a:link, a:visited {
  color: #F88F26;
  background-color: inherit;
  text-decoration: none
}
a:hover {
  color: #FFF;
  background-color: inherit;
}

/* headers */
h1, h2, h3 {
  font: bold 1.3em 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, Sans-Serif;
  color: #A0080D;
}
h1 { font-size: 2.2em; }
h2 { font-size: 1.8em; text-transform:uppercase;}
h3 { font-size: 1.3em; }

p, h1, h2, h3 {
  margin: 0;
  padding: 10px 15px;
}

ul, ol {
  margin: 10px 30px;
  padding: 0 15px;
  color: #CCC;
}
ul span, ol span {
  color: #CCC;
}
</style>
