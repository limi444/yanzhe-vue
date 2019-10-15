<template>
  <div class="content">
<!--    <h2>{{ selectData }}</h2>-->
    <div class="cate-descri" v-for="cate in selectData" :key="cate.id">
      <h2><a @click="getCategoryData({id: cate.id})">
        <span>{{ cate.name }}</span>
      </a></h2>
      <div class="clr"></div>
      <p>{{ cate.desc }}</p>
    </div>

    <div class="cate-descri" v-if="!selectData">
      <h2>感谢您的关注！！！</h2>
      <div class="clr"></div>
      <p>此模块暂时没有内容哦！</p>
      <p>感谢您的关注！！！</p>
      <p><a @click="gohome">Read more </a></p>
    </div>
  </div>
</template>

<script>
// import headers from './tutorial_header'
// import footers from './tutorial_footer'
// import sidebar from './tutorial_sidebar'
import {getCategory} from '../../api/api'

export default {
  name: 'index',
  props: [
    'selectData'
  ],
  // components: {
  //   headers, footers, sidebar
  // },
  data () {
    return {
      // selectData: [],
      categoryData: []
    }
  },
  methods: {
    getCategoryData (params) {
      getCategory(params).then((response) => {
        console.log(response.data)
        this.categoryData = response.data
      })
        .catch(function (error) {
          console.log(error)
        })
    },
    gohome () {
      this.$router.push({name: 'Index'})
    }
  },
  created () {
    this.getCategoryData({})
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
</style>
