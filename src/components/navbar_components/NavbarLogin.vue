<template>
  <ul class="nav navbar-nav">
    <div v-if="user.username">
      <li><a href="">{{ user.username }}</a></li>
      <li><a v-on:click="loginOut">退出</a></li>
    </div>
    <div v-else>
      <li><router-link :to="'/login'" class="page-scroll">登錄</router-link></li>
      <li><router-link :to="'/register'" class="page-scroll" >注冊</router-link></li>
    </div>
  </ul>
</template>

<script>
  export default {
    name: 'NavbarLogin',
    computed: {
      user () {
        return {
          username: localStorage.getItem('username')
        }
      }
    },
    methods: {
      loginOut () {
        localStorage.clear()
        // 跳转到登录
        this.$router.go(0)
      }
    },
    created () {
      // sessionStorage.clear()
    }
  }
</script>

<style scoped>
  .navbar{
    /*display: flex;*/
    /*flex-direction: row;*/
    /*border: 2px solid #eeeeee;*/
    border-radius: 10px;
    width: 36%;
    /*height: 60px;*/
    margin: 0 auto;
    position: absolute;
    right: 3%;
    float: right;
  }
  .navbar ul{
    padding: 0;
  }
  .navbar li{
    float: left;
    /*float: right;*/
    /*text-align: right;*/
    list-style: none;
    padding: 2px;
    border: 2px solid #cccccc;
    border-radius: 5px;
    margin-right: 5px;
  }
  a {
    background-color: #cccccc;
    text-decoration: none;
    color: #555;
  }

  a:hover {
    color: #FF7E60;
    cursor: pointer;
    transition: all 0.25s ease 0s;
    -moz-transition: all 0.25s ease 0s;
    -webkit-transition: all 0.25s ease 0s;
    -o-transition: all 0.25s ease 0s;
    background-color: transparent;
  }

  a:focus {
    outline: none;
    outline-offset: 0;

  }

  a:link,
  a:visited {
    text-decoration: none;
  }
</style>
