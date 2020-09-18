<template>
  <div id="app">
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="fetchImgsData" :maxCols="5" :imgWidth="210"></vue-waterfall-easy>
  </div>
</template>
<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
  data() {
    return {
      imgsArr: [],
      fetchImgsArr: [],
      once: false
    }
  },
  components: {
    vueWaterfallEasy
  },
  created() {
    this.imgsArr = this.getImages(0, 16)
    this.fetchImgsArr = this.getImages(16, 32)
  },
  methods: {
    getImages(n, m) {
      var arr = []
      for (var i = n; i < m; i++) {
        arr.push({ 
          src: require(`../assets/images/photos/img${i + 1}.jpg`), 
          link: "", 
          info: "一些图片描述文字"
				}) 
      }
      return arr
    },
    fetchImgsData() {    //获取新的图片数据的方法，用于页面滚动满足条件时调用
      if(!this.once){
        this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)  //数组拼接，把下一批要加载的图片放入所有图片的数组中
        this.once = true
      }else {
        this.$message.error("已经到底了！！")
      }
      
    }
  },
}
</script>
<style lang="scss" scoped>
  #app {
    width: 100%;
    height: 100%;
  }
  .container {
    width: 90%;
  }
  .vue-waterfall-easy-container {
    margin: 0;
    padding: 0;
  }
</style>