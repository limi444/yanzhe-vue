<template>
  <div id="section-footer">
    <div class="footer-content-block">
      <div class="navbar">
        <Navbar></Navbar>
      </div>
    </div>
    <div class="overlay feature"></div><br>
    <p>Copyright &copy; 2017.言者科技 All rights reserved.</p>
  </div>
</template>

<script>
import navbar from '../../components/navbar_components/NavbarSite'
export default {
  name: 'tutorial_footer',
  components: {
    'Navbar': navbar,
  },
}
</script>

<style scoped>
#section-footer{
  position: relative;
  /*background: url("../../static/images/tutorials/footer-bg.jpg") fixed center center;*/
  background-color: rgba(200,200,200,0.3);
  -webkit-background-size: cover;
  background-size:cover ;
  height: 60px;
  padding: 10px 0px;
  border-radius: 10px;
  margin: 20px 5px;
  border: 2px solid #42b983;
}

ul{
  position: absolute;
  margin: 10px auto;
}
li{
  float: left;
  list-style: none;
  padding: 4px;
  border: 2px solid #cccccc;
  border-radius: 5px;
  margin-right: 10px;
  background-color: #42b983;
}

.footer-content-block a{
  color: #fff;
  text-transform: capitalize;
  border-bottom: 1px solid#0D6EB2;
  text-decoration: none;
}

.overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  content:"";
  /*background: #cccccc;*/
  /*opacity: .16;*/
  top: 0px;
  left: 0px;
  border-radius: 20px;
}
p{
  color: white;
  /*text-align: center;*/
  margin: 20px auto;
  bottom: 10px;
  width: 100%;
  /*position: fixed;*/
}
</style>
