<template>
<div class="category-select">
  <div class="category">
    <div class="category-box">
      <label for="category1">类别:</label>
      <select name="category" id="category1" v-model.number="selectedCate1Index">
        <option value="" selected="">---------</option>
        <option :value="index" v-for="(cate1,index) in categoryData1List" :key="cate1.id">{{cate1.name}}</option>
      </select>
    </div>

    <div class="category-box">
      <label for="category2"> >> </label>
      <select name="category" id="category2" v-model.number="selectedCate2Index">
        <option value="" selected="">---------</option>
        <option :value="index" v-for="(cate2,index) in categoryData2List" :key="cate2.id">{{cate2.name}}</option>
      </select>
    </div>

    <div class="category-box">
      <label for="category3"> >> </label>
      <select name="category" id="category3" v-model.number="categoryId" v-on:change="handleCategory">
        <option value="" selected="">---------</option>
        <option :value="cate3.id" v-for="cate3 in categoryData3List" :key="cate3.id">{{cate3.name}}</option>
      </select>
    </div>
  </div>
</div>
</template>

<script>
import { getCategory } from '../api/api'
export default {
  name: 'Category.vue',
  props: {
    selectedCategoryId: Number
  },
  data () {
    return {
      categoryId: 0, // 需要上传的第三类别ID
      selectedCate1Index: -1, // 已选择的一级类别的索引值
      selectedCate2Index: -1, // 已选择的二级类别的索引值
      categoryData1List: [] // 一级类别的数组
    }
  },
  computed: {
    // 二级类别的数组
    categoryData2List () {
      let category1obj = this.categoryData1List[this.selectedCate1Index]
      return category1obj ? category1obj.sub_category : []
    },
    // 三级类别的数组
    categoryData3List () {
      let category2obj = this.categoryData2List[this.selectedCate2Index]
      return category2obj ? category2obj.sub_category : []
    }
  },
  methods: {
    handleCategory: function () {
      alert(this.categoryId)
      this.$emit('selectCategoryhandle', this.categoryId)
    },
    getTotalCategory () { // 获取菜单
      getCategory({
        params: {}
      }).then((response) => {
        console.log(response)
        this.categoryData1List = response.data
      })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  created () {
    this.getTotalCategory()
  }
}
</script>

<style scoped>
.category {
  display: flex;
  flex-direction: row;
}
.category-box {
  margin-right: 10px;
}
</style>
