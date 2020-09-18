<template>
  <div>
    <el-carousel :interval="2000" type="card" height="350px" v-loading="loading">
      <el-carousel-item>
        <img src="../assets/images/rloop/134.jpg" alt="134" @load="loadingOk">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/images/rloop/21.jpg" alt="21" @load="loadingOk">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/images/rloop/22.jpg" alt="22" @load="loadingOk">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/images/rloop/23.jpg" alt="23" @load="loadingOk">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/images/rloop/31.jpg" alt="31" @load="loadingOk">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/images/rloop/4.jpg" alt="4" @load="loadingOk">
      </el-carousel-item>
    </el-carousel>
    <div class="card" style="margin-top: 15px">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>音乐播放器</span>
          <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
        </div>
        <p>Do You Want to Build a Snowman</p>
        <audio controls title="111" src="../assets/music/5E圣诞节BGM提取 - Do You Want to Build a Snowman -.mp3"></audio>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>搜索</span>
          <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
        </div>
        <div>
          <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-card>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true
    }
  },
  methods: {
    loadingOk() {
      this.loading = false
    }
  },
}
</script>
<style lang="scss" scoped>
  // 走马灯
  .el-carousel {
    margin-top: 30px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__item img {
    width: 100%;
    height: 100%;
  }
  .card {
    display: flex;
    justify-content: space-around;
  }
  .box-card {
    width: 540px;
  }
</style>