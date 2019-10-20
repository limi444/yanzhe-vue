<template>
<div class="headers">
  <div class="header-logo">
    <a href="/" class="logo"><img src="../../static/images/tutorials/main_logo.png" alt=""></a>
  </div>
  <div class="header-search">
    <form id="form" name="form" method="GET" action="/">
      <input name="q" type="text" class="keywords" id="textfield" maxlength="50" value="" placeholder="Search..." />
      <input name="b" type="button" src="/static/tutorial/images/search.gif" class="button" value="GO"/>
    </form>
  </div>
  <!-- Collect the nav links, forms, and other content for toggling -->
  <div id="navbar">
    <Navbar></Navbar>
  </div>
</div>
  <!-- /.container-fluid -->
  <!-- <div class="push"></div> -->
</template>

<script>
import navbar from '../../components/Navbar'
export default {
  name: 'tutorial-header',
  data () {
    return {
      // user: {
      //   username: 'cml'
      // }
    }
  },
  components: {
    'Navbar': navbar
  },

  methods: {

  }
}
</script>
<style scoped>
.headers {
  background-color: #EEEEEE;
  border: 2px solid #42b983;
  /*border: 2px solid #aaaaaa;*/
  border-radius: 60px 10px 10px 60px/50px 10px 10px 50px;
  /*min-width: 800px;*/
  height: 50px;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  -webkit-transition: all 0.6s;
  -moz-transition: all 0.6s;
  -o-transition: all 0.6s;
  transition: all 0.6s;
  -webkit-backface-visibility: hidden;
  display: flex;
  flex-direction: row;
}

.logo {
  /*background-color: #aaaaaa;*/
  padding: 0;
  margin: 0 auto;
  border-radius: 5px;
  position: absolute;
  float: left;
  left: 20px;
  top:5px;
  /*bottom: 5px;*/
}
.logo img {
  height: 45px;
  width: 80px;
  transition: all 0.2s ease 0s;
  -moz-transition: all 0.2s ease 0s;
  -webkit-transition: all 0.2s ease 0s;
  -o-transition: all 0.2s ease 0s;
}
.logo img:hover{
  transform: scale(1.1); /* 缩放1.1 */
}

.header-search {
  margin: 10px auto;
  /*border: 2px solid #68b21d;*/
  position: absolute;
  left: 20%;
  text-align: center;
  width: 250px;
  display: flex;
  flex-direction: row;
  /*vertical-align: top;*/
}
.header-search form .keywords {
  width:200px;
  line-height:13px;
  height:18px;
  background:none;
  padding:8px 0;
  margin:0;
  border-radius: 3px;
  font:normal 15px Arial, Helvetica, sans-serif;
  color:#767676;
}
.header-search form .button {
  background-color: #aaaaaa;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  margin:0;
  padding:0;
  border:0;
  /*position:relative;*/
}
/*#navbar{*/
/*  position: absolute;*/
/*  float: right;*/
/*}*/
#navbar{
  /*margin: 0 auto;*/
  left: 600px;
  /*width: 400px;*/
  /*float: right;*/
  position: absolute;
}

</style>
