<template>
  <div class="list" id="threadlist" style="position: relative;">
    <div id="post_list" class="post_list" v-for="post in listData">
      <!-- <a href="{{ post.get_absolute_url }}" title=""><img src="{{ post.author.avatar }}"></a> -->
      <h3><router-link :to="'/forums/detail/' + post.id" class="title" rel="bookmark">{{post.title}}</router-link>
      </h3>
      <span title="">{{ post.author }} 发表于•{{ post.created_time }}•
        阅读({{ post.get_curday_readnum }})&nbsp;&nbsp;
        评论(1)&nbsp;&nbsp;
        点赞(1)
      </span>
      <!-- <div class="lastreply">
          <a href="" target="_blank" title="1 分钟前">{{ post.last_response }}最后回复</a>
      </div> -->
      <div width="11%" valign="middle" class="rbox">
        <a href="" target="_blank">{{ post.comment_nums }}/{{ post.view_times }}--- {{post.column}}</a>
      </div>
    </div>
    <Pagination class="pagination" pre-text="上页" next-text="下页" end-show="false" :page="curPage" :total-page='totalPage' @pagefn="pagefn"></Pagination>
  </div>
</template>

<script>
import {listNote} from '../../api/api'
import Pagination from '../../components/Pagination'

export default {
  name: 'Index',
  data () {
    return {
      proNum: 0, // 商品数量
      curPage: 1, // 当前页码
      listData: [
        // {title: 'title1', auther: 'cml', created_at: '2019-10-10 23:21', get_read_num: 12,},
        // {title: 'title2', auther: 'cml', created_at: '2019-10-10 23:21', get_read_num: 12,},
        // {title: 'title3', auther: 'cml', created_at: '2019-10-10 23:21', get_read_num: 12,},
        // {title: 'title4', auther: 'cml', created_at: '2019-10-10 23:21', get_read_num: 12,}
      ]
    }
  },
  components: {
    'Pagination': Pagination,
  },
  computed: {
    totalPage(){
      return  Math.ceil(this.proNum/12)
    }
  },
  methods: {
    pagefn(value){//点击分页
      this.curPage = value.page;
      this.getListNote()
    },
    getListNote () {
      this.categoryId = this.$route.params.categoryId
      listNote({
        page: this.curPage, //当前页码
        top_category: this.categoryId
      })
        .then((response) => {
        console.log(response.data.results)
        this.listData = response.data.results
        this.proNum = response.data.count
      })
    },
    // getListData () {
    //   listNote({}).then((response) => {
    //     this.postList = response.data
    //   })
    // }
  },
  created () {
    // alert('进入forums index')
    this.getListNote()
  }
}
</script>

<style scoped>
  .avatar{
    background-color: #222;
    width: 100%;
    margin-bottom: 20px;
  }

  .avatar img {
    margin: 5px 20px;
    width: 50px;
    height: 50px;
  }
  .rbox {
    float: right;
  }

  .post_list {
    background-color: #aaaaaa;
    border-radius: 5px;
    margin: 10px 40px;
    height: 60px;
    padding: 0px 20px 8px 20px;
  }

  /* white-spce:nowrap:表示将所有的文字在一行中显示完，不要换行 */
  /* text-overflow:ellipsis:表示当进行超字符隐藏的时候，显示“...” */
  .title{
    width:190px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;

  }
  a {
    color: #2c3e50;
    text-decoration: none;
  }
  a:hover {
    color: #63c89b;
  }
  a:visited {
    color: #CCCCCC;
  }
  span {
    color: #eeeeee;
  }

.pagination{
  width: 400px;
  /*把元素变成定位元素*/
  /*position:absolute;*/
  /*设置元素的定位位置，距离上、下、左、右都为0*/
  left:0;
  right:0;
  /*top:0;*/
  /*bottom:0;*/
  /*设置元素的margin样式值为 auto*/
  margin:auto;
}
</style>
