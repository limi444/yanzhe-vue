<template>
  <header>
    <div id="logo">
      <div id="logo_text">
        <!-- class="logo_colour", allows you to change the colour of the text -->
        <h1><a href="{% url 'introduction:home' %}">言者<span class="logo_colour">-行僧</span></a></h1>
        <h2>个人博客</h2>
      </div>
      <form method="get" action="{% url 'blog:search' %}" id="search">
        <input class="search" type="text" name="kw" value="search....." onclick="javascript: document.forms['search'].search_field.value=''" />
        <input name="search" class="button" value="Search" type="submit"/>
       <!--  <input name="search" type="image" style="float: right;border: 0; margin: 20px 0 0 0;" src="../../static/images/blogs/search.png" alt="search" title="search" /> -->
      </form>
    </div>
    <div id="navbar">
      <Navbar></Navbar>
    </div>
  </header>
</template>

<script>
  import navbar from '../../components/Navbar'
  export default {
    name: 'blogs_header',
    components: {
      'Navbar': navbar
    },
  }
</script>

<style scoped>
  header {
    border-radius: 10px;
    background-color: #aaaaaa;
    height: 143px;
    display: flex;
    flex-direction: row;
    /*position: relative;*/
  }
  #navbar {
    /*position: relative;*/
    float: right;
    height: 40px;
    width: 40%;
    /*border: 1px solid red;*/
    display: flex;
    flex-direction: row;
    /*text-align: center;*/
    /*margin: 0 auto;*/
  }

  #logo {
    /*border: 1px solid red;*/
    width: 55%;
    position: relative;
    height: 75px;
    padding-top: 20px;
    background: transparent;
    margin: 0 20px;
  }

  #logo #logo_text {
    position: absolute;
    top: 5px;
    left: 0;
  }

  #logo h1, #logo h2 {
    font-size: 360%;
    border-bottom: 0;
    text-transform: none;
    margin: 0 0 0 15px;
    text-shadow: none;
  }

  #logo_text h1, #logo_text h1 a, #logo_text h1 a:hover {
    padding: 5px 0 0 0;
    color: #FFF;
    text-decoration: none;
  }

  #logo_text h1 a .logo_colour {
    color: #09D4FF;
  }

  #logo_text a:hover .logo_colour {
    color: #FFF;
  }

  #logo_text h2 {
    font-size: 125%;
    padding: 0 0 0 0;
    color: #7c7e70;
  }

  #search {
    float: right;
  }

  .search {
    border: 1px solid #666;
    border-radius: 7px 7px 7px 7px;
    -moz-border-radius: 7px 7px 7px 7px;
    -webkit-border: 7px 7px 7px 7px;
    float:left;
    margin:20px 0 0;
    padding:5px;
    vertical-align:middle;
    width:192px;
    color: #bbb;
    background:#5E5E5E;
  }
  .button {
    height: 28px;
    border-radius: 7px 7px 7px 7px;
    float: right;
    border: 0; 
    margin: 21px 0 0 0;
  }


</style>
