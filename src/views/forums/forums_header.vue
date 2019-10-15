<template>
  <div id="header">
    <div id="header-content">
      <div class="logo">
        <h1 id="logo">言者</h1>
        <h2 id="slogan">如有侵权请联删!!!</h2>
      </div>

      <div class="searchform">
        <form id="scarch_bar_form" method="get" autocomplete="off" onSubmit="searchFocus($(scarch_bar_txt))" action="/search">
          <p>
            <input id="scarch_bar_txt" name="srchtxt" type="text" dir="ltr" size="35" spellcheck="false" value="" autocomplete="off" x-webkit-speech="" speech="" class=" xg1" placeholder="请输入搜索内容">
            <input name="search" class="button" value="Search" type="submit" />
          </p>
        </form>
      </div>

      <Navbar></Navbar>
    </div>
  </div>
</template>

<script>
import navbar from '../../components/Navbar'
export default {
  name: 'forums_header',
  components: {
    'Navbar': navbar,
  },
  methods: {

  }
}
</script>

<style scoped>

  /* search form */
  .searchform form{
    position: absolute;
    top: 10px;
    left: 20%;
    /*right: 10px;*/
    background-color: transparent;
    border: none;
    margin: 0; padding: 0;
  }
  .searchform input {
    margin: 0 auto;
    padding: 0 2px;
    border-radius: 5px;
    /*width: 130px;*/
    /*background: #444;*/
    color: #FFF;
    height: 20px;
    vertical-align: top;
  }
  .searchform input.button {
    font: bold 12px Arial, Sans-serif;
    background: #444;
    color: #fff;
    width: 70px;
    height: 22px;
    border: none;
    padding: 3px 5px;
    vertical-align: top;
  }

  /* header */
  #header {
    /*background: #444 url(/static/forum/images/headerbg1.jpg) repeat-x 0 0;*/
    background: #6A6A6A;
    border-radius: 10px;
    height: 80px;
    text-align: left;
    position: relative;
    -webkit-background-size: cover;
    background-size:cover;
  }
  #header-content {
    position: relative;
    margin: 0 auto;
    padding: 0;
  }
  #header-content #logo {
    position: absolute;
    font: bold 40px Verdana, 'Trebuchet Ms', Sans-serif;
    letter-spacing: -5px; /*字符间距缩小*/
    color: #F88F26;
    margin: 0 30px;
    padding: 0;
    /* change the values of left and top to adjust the position of the logo */
    top: 5px;
    left: 20px;

  }
  #header-content #slogan {
    position: absolute;
    font: bold 15px 'Trebuchet Ms', Sans-serif;
    text-transform: none;
    color: #CCC;
    margin: 0;
    padding: 0;
    /* change the values of left and top to adjust the position of the slogan */
    top: 50px;
    left: 35px;
  }

  /* form elements */
  form {
    width: 540px;
    margin: 15px;
    padding: 15px 10px;
    background: #444;
    border: 1px solid #151515;
  }
  label {
    display:block;
    font-weight:bold;
    margin:5px 0;
  }
  input {
    padding: 3px 2px;
    border: 1px solid #CCC;
    color:#444;
    background: #CCC;
  }
  textarea {
    width: 250px;
    padding:3px 2px;
    border: 1px solid #CCC;
    height:100px;
    display:block;
    color:#444;
    background: #CCC;
  }
  input.button {
    margin: 0;
    border: 1px solid #CCC;
    padding: 2px 3px;
    color: #444;
    background: #CCC;
  }
</style>
