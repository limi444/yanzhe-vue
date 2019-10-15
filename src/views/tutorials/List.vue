<template>
  <div class="content">
    <!--    <h2>{{ selectData }}</h2>-->
    <div class="cate-descri" v-for="article in listData" :key="article.id">
<!--      <a @click="getCategoryData({id: cate.id})">{{ cate.title }}</a>-->
      <router-link :to="'/tutorials/detail/' + article.id" class="article-link">{{ article.title }}</router-link>
      <div class="clr"></div>
<!--      <p>{{ article.descri }}</p>-->
    </div>

    <div class="cate-descri" v-if="!listData">
      <h2>感谢您的关注！！！</h2>
      <div class="clr"></div>
      <p>此模块暂时没有内容哦！</p>
      <p>感谢您的关注！！！</p>
      <p><a @click="gohome">Read more </a></p>
    </div>
    <Pagination class="pagination" pre-text="上页" next-text="下页" end-show="false" :page="curPage" :total-page='totalPage' @pagefn="pagefn"></Pagination>
  </div>
</template>

<script>
import Pagination from '../../components/Pagination'
import {listArticle} from '../../api/api'

export default {
  name: 'index',
  // props: [
  //   'selectData'
  // ],
  data () {
    return {
      categoryId: '', // 当前选择的类别id
      curPage: 1, // 当前页码
      proNum: 0, // 商品数量
      listData: [] // 选择类别的列表数据
    }
  },
  computed: {
    totalPage(){
      return  Math.ceil(this.proNum/12)
    }
  },
  components: {
    'Pagination': Pagination
  },
  methods: {
    getListArticle () {
      this.categoryId = this.$route.params.categoryId
      listArticle({
        page: this.curPage, //当前页码
        top_category: this.categoryId
      })
        .then((response) => {
        console.log(response.data.results)
        this.listData = response.data.results
        this.proNum = response.data.count
      })
    },
    gohome () {
      this.$router.push({name: 'Index'})
    },
    pagefn(value){//点击分页
      this.curPage = value.page;
      this.getListArticle()
    }
  },
  created () {
    // this.getCategoryData({})
    this.getListArticle()
  }
}
</script>

<style scoped>

.content{
  margin-left: 250px;
  /*border: 3px solid green;*/
  position: relative;
  /*float: left;*/
}
.cate-descri{
  margin: 10px 20px;
  padding: 1px 20px;
  border-radius: 10px;
  background:#fefefe url(../../static/images/tutorials/post_bg.gif) top repeat-x;
}
.article-link {
  color: #aaaaaa;
}
.article-link:hover{
  color: #fa8341;
}
.pagination{
  /*border: 2px solid red;*/
  /*height: 60px;*/
  width: 300px;
  /*把元素变成定位元素*/
  position:absolute;
  /*设置元素的定位位置，距离上、下、左、右都为0*/
  left:0;
  right:0;
  /*top:0;*/
  /*bottom:0;*/
  /*设置元素的margin样式值为 auto*/
  margin:auto;
}

</style>
