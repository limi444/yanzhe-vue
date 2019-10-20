<template>
  <div class="sidebar">
    <div class="gadget">
      <h3><a href="/tutorials/index" style="font-weight:bold;color: #2c3e50">INDEX</a></h3>
      <div class="clr"></div>
      <ul class="parent_menu">
<!--        <li class="parent_category" v-for="cate1 in allMenuLabel" :key="cate1.id" @mouseover="overAllmenu" @mouseout="outAllmenu">-->
        <li class="category1" v-for="(cate1,index) in allMenuLabel" :key="cate1.id" >
          <a @click="clickCategory1(cate1, index)" @dblclick="dblclickArticleData(cate1.id)">{{cate1.name}}</a>
<!--          <router-link :to="'/tutorials/category/'+cate1.id" style="font-weight:bold;" @dblclick="getCategoryData({id: cate1.id})">{{cate1.name}}</router-link>-->
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
    </div>
    <div class="gadget">
      <h3><span>精华推荐</span></h3>
      <div class="clr"></div>
      <ul class="ex_menu" v-if="recommendList">
        <li v-for="artRecom in recommendList"><a class="title" href="">{{artRecom.title.substring(0,10)}}</a></li>
      </ul>
      <ul class="ex_menu" v-else>
        <li>暂时没有热门文章</li>
      </ul>
    </div>
    <div class="gadget">
      <h3><span>阅读排行</span></h3>
      <div class="clr"></div>
      <ul class="ex_menu" v-if="rankingList">
        <li v-for="artRank in rankingList"><a class="title" href="">{{artRank.title.substring(0,10)}}</a></li>
      </ul>
      <ul class="ex_menu" v-else>
        <li>暂时没有排行文章</li>
      </ul>
    </div>
    <div class="gadget">
      <a v-on:click="getWiseWordData"><h3>Wise Words</h3></a>
      <div class="clr"></div>
      <p class="wise">   <img src="../../static/images/tutorials/test_1.gif" alt="image" width="18" height="17" /> <em v-html="wiseword.content"> </em><img src="../../static/images/tutorials/test_2.gif" alt="image" width="18" height="17" /></p>
      <p class="ww-author" style="float:right;"><strong>{{wiseword.author}}</strong></p>
    </div>
  </div>
</template>

<script>
import { getWiseWord, listArticle } from '../../api/api'
import { getCategory } from '../../api/api'
export default {
  name: 'tutorial_sidebar',
  // props: ['allMenuLabel'],
  data () {
    return {
      // hotSearch: [], //热词
      // searchWord: '', //搜索词
      showAllmenu1: false, // 菜单显示控制
      showAllmenu2: false, // 菜单显示控制
      // 菜单
      allMenuLabel: [],
      // showChildrenMenu: -1 // 菜单显示控制
      // showShopCar:false, // 购物车显示控制
      // isShowVip:false,
      contentData: [],
      recommendList: [
        {id:1, title: '暂无推荐文章暂无推荐文章暂无推荐文章'},
        {id:1, title: '暂无推荐文章'},
      ],
      rankingList: '',
      wiseword: {
        content: '暂无内容',
        auther: 'cml'
      }
    }
  },
  computed: {
    // Data () {
    //   this.allMenuLabel =
    //   return
    // }
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
      listArticle({})
        .then((response) => {
          this.recommendList = response.data
        })
        .catch((error) => {
          console.log(error.data)
        })
    },
    getRankingData () {
      listArticle({

      })
        .then((response) => {
          this.rankingList = response.data
        })
        .catch((error) => {
          console.log(error.data)
        })
    },
      getMenu () { // 获取菜单
          getCategory({
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
  },
  created () {
    this.getWiseWordData() // 获取鸡汤
    this.getMenu() // 获取菜单
    // this.getHotSearch() // 获取热词
    // 更新store数据
    // this.$store.dispatch('setShopList') // 获取购物车数据
  }
}
</script>

<style scoped>
h3 {
  margin: 0;
}
.sidebar{
  float: left;
  outline-style: none;
  /*border: 2px solid #0D6EB2;*/
}
/*.content .sidebar { margin:0; padding:0; float:right; }*/
.gadget {
  position: relative;
  margin:10px 10px;
  padding:10px 20px;
  width:200px;
  border:1px solid #d8d6d6;
  border-radius: 5px;
  background:#fefefe url(../../static/images/tutorials/post_bg.gif) top repeat-x;
}

ul {
  margin:0 0 0 8px;
  padding:1px 0 0 0;
  /*border: 1px solid red;*/
  text-align: left;
  /*list-style:none;*/
  /*标记是实心方块*/
  /*list-style-type: square;*/
  /*标记放置在文本以内*/
  /*list-style-position:inside;*/
  color:#959595;

}
li {
  /*border: 1px solid green;*/
  border-bottom:1px solid #dedede;
  /*line-height:20px;*/
}
/*.J_subView {*/
/*  height: 20px;*/
/*}*/
.parent_menu li, ul.ex_menu li{ padding:1px 0 1px 1px; text-align: left}
.parent_menu li a, ul.ex_menu li a { color:#959595; text-decoration:none; margin-left:-8px;}
.parent_menu li a:hover, ul.ex_menu li a:hover { color:#2cadff; text-decoration:underline;}
/*.child_menu{visibility: hidden;}*/
/*.sb_menu li a:hover ~ .child_menu{ visibility: visible;}*/
dl {
  margin: 0;
}
dd {
  margin-left: 10px;
  border-bottom:1px solid #dedede;
}

.wise {
  text-align: center;
}
.wise > img {
  height: 10px;
}
.ww-author {
  /*position: absolute;*/
  margin-top: -12px;
  /*padding-top: -10px;*/
  /*padding: 10px auto;*/
}
em {
  font-size: 10px;
}
</style>
