<template>
  <div id="blogs">
    <div id="header">
      <blogs-header></blogs-header>
    </div>
    <div class="inner_copyright"></div>
    <div id="container">
      <div id="sidebar" class="right">
        <blogs-sidebar></blogs-sidebar>
      </div>
      <div id="content" class="left">
        <router-view name="main"></router-view>
      </div>
    </div>
    <footer>
      <p><a href="index.html">Home</a> | <a href="examples.html">Examples</a> | <a href="page.html">A Page</a> | <a href="another_page.html">Another Page</a> | <a href="contact.php">Contact Us</a></p>
      <p>Copyright &copy; CSS3_one | <a href="http://www.cssmoban.com">模板之家</a></p>
    </footer>
  </div>
</template>

<script>
import blogsSidebar from './blogs_sidebar'
import blogsHeader from './blogs_header'
export default {
  name: 'blogs_base',
  components: {
    blogsSidebar,
    blogsHeader
  }
}
</script>

<style scoped>
  #blogs{
    min-width:47.5rem;
    max-width:66.25rem;
   /* max-width: 1060px;
    min-width: 680px;*/
    margin: 0 auto;
    /*position: relative;*/
  }
  /*@font-face {*/
  /*  font-family: Yanone Kaffeesatz;*/
  /*  src: url('../../static/fonts/blogs/YanoneKaffeesatz-Regular.eot');*/
  /*  src: local("Yanone Kaffeesatz"), url('../../static/fonts/blogs/YanoneKaffeesatz-Regular.ttf');*/
  /*}*/

  /*html {*/
  /*  height: 100%;}*/

  * {
    margin: 0;
    padding: 0;}

  /* tell the browser to render HTML 5 elements as block */
  article, aside, figure, footer, header, hgroup, nav, section {
    display:block;}

  p {
    padding: 0 0 20px 0;
    line-height: 1.7em;
  }

  img {
    border: 0;
  }

  h1, h2 {
    color: #AEB002;
    padding: 0 0 5px 0;
    font: normal 110% arial;
    text-transform: uppercase;
  }

  .left {
    float: left;
    width: auto;
    margin-right: 10px;
  }

  .right {
    float: right;
    width: auto;
    margin-left: 10px;
  }

  .center {
    display: block;
    text-align: center;
    margin: 20px auto;
  }

  .inner_copyright{text-indent:-9999px;height:0;line-height:0;font-size:0;overflow:hidden;}

  #main, #container, footer {
    margin-left: auto;
    margin-right: auto;
  }

  #container {
    /*width: 70%;*/
    overflow: hidden;
    margin: 20px auto 0 auto;
    padding: 0 0 10px 0;
  }
  #sidebar{
    width: 25%;
    margin: 0 1px;
  }
  #content{
    width: 74%;
    margin: 0 1px;
  }

  footer {
    width: 100%;
    font-family: 'trebuchet ms', sans-serif;
    font-size: 90%;
    height: 60px;
    padding: 20px 0 5px 0;
    text-align: center;
    border-top: 1px solid #000;
    background: #545454;
    color: #A8AA94;
    margin: 0 0 0 0;
    text-transform: uppercase;
  }

  footer p {
    line-height: 1.7em;
    padding: 0 0 10px 0;
  }

  footer a {
    color: #A8AA94;
    text-decoration: none;
  }

  footer a:hover {
    color: #FFF;
    text-decoration: none;
  }


</style>
