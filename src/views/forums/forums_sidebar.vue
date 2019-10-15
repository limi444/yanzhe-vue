<template>
  <div id="sidebar" >
    <div class="sidebox">
      <h1>热门版块</h1>
      <ul class="sidemenu">
        <li><a href="" >{{column.name}}</a></li>
      </ul>
      <div class="topbo">
        <!-- Block Square -->
        <div class="block_square">
          <a href="{% url 'forum:column_all' %}" class="bnor">所有板块</a>
        </div>
        <!-- End -->
      </div>
    </div>

    <div class="sidebox">
      <h1>热点帖子</h1>
      <ul class="sidemenu">
        {% for hot_post in foruminfo.hot_posts %}
        <li>
          <a class="title" href="">{{ hot_post.title }}</a>
        </li>
        {% endfor %}
      </ul>
    </div>

    <div class="sidebox">
      <h1>论坛统计</h1>
      <ul>
        <li>在线人数: {% get_online_ips_count  %}</li>
        <li>注册人数：{{ foruminfo.account_number }}</li>
        <li>帖子数：{{ foruminfo.post_number }}</li>
        <li>今日: {{ foruminfo.today_post_number }}</li>
        <li>昨日: {{ foruminfo.lastday_post_number }}</li>

      </ul>
    </div>

    <div class="sidebox">
      <h1>最近评论</h1>
      <ul>
        {% for last_comment in last_comments %}
        <li>
          <a href="">{{ last_comment.owner }}:{{ last_comment.text }}</a>
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'forums_sidebar',
    data () {
      return {
        column: {},
        hot_post: {},
        foruminfo: {},
        last_comment: {},
        // user: {
        //   username: 'cml'
        // }
      }
    },
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
