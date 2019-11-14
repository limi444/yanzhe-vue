<template>
  <div class="tutorials">
    <div class="header">
      <tutorial-header></tutorial-header>
    </div>

    <div class="container">
      <tutorial-sidebar></tutorial-sidebar>
      <router-view name = "main"></router-view>
    </div>

    <div class="footer">
      <tutorial-footer></tutorial-footer>
    </div>
<!--    <router-view name = "footer" class="footer"></router-view>-->
  </div>
</template>

<script>
import tutorialHeader from './tutorial_header'
import tutorialSidebar from './tutorial_sidebar'
import tutorialFooter from '../../components/Footer'


export default {
  name: 'tutorial_base',
  data () {
    return {
      // menuData: 'hello cml!',
      // selectedData: []
    }
  },
  components: {
    tutorialHeader,
    tutorialSidebar,
    tutorialFooter
  }
}
</script>

<style scoped>
.tutorials{
  min-width: 680px;
  margin: 0 auto;
  /*position: relative;*/
}
.header {
  position: relative;
  /*left: 0;*/
  /*top: 0;*/

}
.container{
  width: 100%;
  height: 100%;
  /*margin: 100px auto;*/
  /*border: 3px dashed red;*/
  display: inline-block;
  /*position: relative;*/
  /*background: #eeeeee url("../../static/images/tutorials/circuit.png") top repeat-x;*/
}
.main{
  width: auto;
  margin-left: 250px;
  /*border: 3px solid green;*/
  position: relative;
  /*float: left;*/
}
.footer{
  /*float: bottom;*/
  /*margin-bottom: auto;*/
  height: 60px;
  width: 100%;
  /*position: fixed;*/
  /*bottom: 0;*/
  /*left: 0;*/
  border-top: 2px solid #cccccc;
}
</style>
