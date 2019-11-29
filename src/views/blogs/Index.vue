<template>
  <div class="main">
    <div class="content" v-if="articleList" v-for="cate in categoryList" :key="cate.id">
      <h1>{{ cate.name}}</h1>
      <div class="content_item">
        <p><a href="" >Read more </a>{{ cate.descri }}</p>
        <ul>
          <li v-for="art in articleList" :key="art.id" v-if="art.category === cate.name"><a :href="'/blogs/detail/' + art.id">{{ art.title }}</a></li>
        </ul>
      </div>
    </div>
    <div class="content" v-else>
      <h1>简约设计</h1>
      <div class="content_item">
        <p>This simple, fixed width website template is released under a Creative Commons Attribution 3.0 Licence. This means you are free to download and use it for personal and commercial projects. However, you <strong>must leave the 'design from css3templates.co.uk' link in the footer of the template</strong>.</p>
        <p>This template is written entirely in <strong>HTML5</strong> and <strong>CSS3</strong>.</p>
        <p>You can view more free CSS3 web templates <a href="http://www.cssmoban.com">here</a>.</p>
        <p>This template is a fully documented 5 page website, with an <a href="examples.html">examples</a> page that gives examples of all the styles available with this design. There is also a working PHP contact form on the contact page.</p>
      </div>
    </div>
  </div>
</template>

<script>
import {listPost, listBlogsCategory} from '../../api/api'
export default {
name: 'Index',
data () {
  return {
    categoryList: [
      {id: 1, name: ''},
      {id: 2, name: ''},
    ],
    articleList: [
      // {title: 'title11', category: {id: 1, name: 'cate1'}},
      // {title: 'title12', category: {id: 1, name: 'cate1'}},
      // {title: 'title21', category: {id: 2, name: 'cate2'}},
      // {title: 'title22', category: {id: 2, name: 'cate2'}},
    ]
  }
},
methods: {
  getListData () {
    listPost({}).then((response) => {
      console.log(response.data)
      this.articleList = response.data
    })
  },
  getCategoryListData () {
    listBlogsCategory({}).then((response) => {
      console.log(response.data)
      this.categoryList = response.data
    })
  }
},
created () {
  // alert('进入forums index')
  this.getListData()
  this.getCategoryListData()
}
}
</script>

<style scoped>
  a {
    outline: none;
    text-decoration: none;
    color: #03D1FD;
  }

  a:hover {
    text-decoration: underline;
    color: #fa8341;
  }
  ul {
    margin: 2px 0 22px 17px;
  }

  ul li {
    list-style-type: circle;
    margin: 0 0 6px 0;
    padding: 0 0 4px 5px;
    line-height: 1.5em;
  }
  .content {
    text-align: left;
    width: 740px;
    margin: 0 0 15px 0;
    background: #fff;
    /*border-bottom: 1px solid #D4D4D4;*/
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
    /*background: url(../../static/images/blogs/bullet.png) no-repeat;*/
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
