<template>
  <div class="forums">
    <forums-header></forums-header>

    <!-- content-wrap starts here -->
    <div id="content-wrap">
      <div id="contenter">
        <div id="main">
          <router-view name="main"></router-view>
        </div>
        <div class="sidebar">
          <forums-sidebar></forums-sidebar>
        </div>
      </div>
    </div>

    <div class="list">
      <div id="g_upmine_menu" class="tip tip_3" style="display:none;">
        <div class="tip_c" style="color: #fff;background-color: #fff;">
          积分 0, 距离下一级还需  积分
        </div>
        <div class="tip_horn"></div>
      </div>
      <div id="scrolltop" onClick="window.scrollTo()" style="left: auto; right: 0px; visibility: hidden;color: #fff;">回顶部</div>
      <div id="ft"></div>
    </div>
    <forums-footer></forums-footer>
  </div>
</template>

<script>
import forumsHeader from './forums_header'
import forumsFooter from '../../components/Footer'
import forumsSidebar from './forums_sidebar'
export default {
  name: 'forums_base',
  data () {
    return {
      // user: {
      //   username: 'cml'
      // }
    }
  },
  components: {
    'forumsHeader': forumsHeader,
    'forumsFooter': forumsFooter,
    'forumsSidebar': forumsSidebar
  },
}
</script>

<style scoped>
  .forums{
    max-width: 1140px;
    min-width: 680px;
    margin: 0 auto;
    /*position: relative;*/
  }
  /* top elements */
  * { padding: 0; margin: 0; outline: 0; }

  /*body {*/
  /*  margin: 0; 	padding: 0;*/
  /*  font: normal 12px/1.7em 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, Sans-Serif;*/
  /*  color: #6A6A6A;*/
  /*  text-align: center;*/
  /*  background: #cccccc;*/
  /*}*/

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

  /* images */
  img {
    background: #444;
    border: 1px solid #222;
    padding: 4px;
  }
  img.no-border {	border: none; }
  img.float-right { margin: 5px 0px 5px 15px; }
  img.float-left { margin: 5px 15px 5px 0px; }


  code {
    margin: 5px 0;
    padding: 20px 15px;
    text-align: left;
    display: block;
    overflow: auto;
    font: 500 1em/1.5em 'Lucida Console', 'courier new', monospace;
    /* white-space: pre; */
    background: #444;
    border: 1px solid #151515;
  }
  acronym {
    cursor: help;
    border-bottom: 1px solid #777;
  }
  blockquote {
    margin: 15px;
    padding: 10px 0 10px 20px;
    background: #444;
    border: 1px solid #151515;
    font: bold 1.3em/1.5em 'Trebuchet MS', Sans-serif;
  }

  /* content */
  #content-wrap {
    clear: both;
    float: right;
    border-radius: 10px;
    background: rgba(149, 149, 151, 0.41);
    width: 100%;
  }
  #contenter {
    text-align: left;
    padding: 0; margin: 0 auto;
  }

  /* main */
  #main {
    float: left;
    margin: 20px 0;
    padding: 0;
    width: 75%;
  }
  #main h1 {
    font: bold 2.2em 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, Sans-Serif;
    color: #DBD0A3;
  }

  /* additional classes */
  .clear { clear: both; }
  .comments {
    border: 1px solid #151515;
    background: #444;
    padding: 8px 10px;
    margin: 20px 15px 10px 15px;
  }

</style>
