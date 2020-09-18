<template>
  <div class="body_container">
    
    <div class="bfc">
      <nav>
        <div class="container">
          <div class="logo">Logo头像</div>
          <ul class="navbar">
            <router-link to="/home" tag="li" activeClass="active">首页</router-link>
            <router-link to="/articles" tag="li" activeClass="active">文章</router-link>
            <router-link to="/photo" tag="li" activeClass="active">照片墙</router-link>
            <router-link to="/message" tag="li" activeClass="active">留言</router-link>
            <router-link to="/about" tag="li" activeClass="active">关于我</router-link>
          </ul>
          <div class="loginAndReg">
            <button class="login btn" @click="loginDialogVisible = true">登录</button>
            <button class="register btn" @click="regDialogVisible = true">注册</button>
          </div>
        </div>
      </nav>
    </div>

    <div class="container body_container">
      <router-view></router-view>
    </div>

    <!-- 登录对话框 -->
    <el-dialog title="登录" :visible.sync="loginDialogVisible" width="30%" :before-close="loginhandleClose">
      <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
      </el-form>
      
      <span slot="footer" class="dialog-footer">
        <el-button @click="loginhandleClose">取 消</el-button>
        <el-button type="primary" @click="loginSend">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 注册对话框 -->
    <el-dialog title="注册" :visible.sync="regDialogVisible" width="30%" :before-close="reghandleClose">
      <el-form :model="regForm" :rules="regRules" ref="regFormRef" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="regForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="regForm.password"></el-input>
        </el-form-item>
      </el-form>
      
      <span slot="footer" class="dialog-footer">
        <el-button @click="reghandleClose">取 消</el-button>
        <el-button type="primary" @click="regSend">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginDialogVisible: false,
      regDialogVisible: false,
      loginForm: {
        username: '1'
      },
      regForm: {
        username: '2'
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 1, max: 12, message: '长度在 1 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
      },
      regRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 1, max: 12, message: '长度在 1 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    loginhandleClose() {
      this.loginDialogVisible = false
      this.$refs.loginFormRef.resetFields();
    },
    reghandleClose() {
      this.regDialogVisible = false
      this.$refs.regFormRef.resetFields();
    },
    loginSend() {
      this.$refs.loginFormRef.validate((valid) => {
        if (valid) {
          this.$message.success("登录成功")
        } else {
          this.$message.error("请重新输入")
          return false;
        }
      });
    },
    regSend() {
      this.$refs.regFormRef.validate((valid) => {
        if (valid) {
          this.$message.success("注册成功")
        } else {
          this.$message.error("请重新输入")
          return false;
        }
      });
    }
  },
}
</script>
<style lang="scss" scoped>
  .active {
    color: pink;
    border-bottom: 3px solid pink;
  }
  .el-form-item {
    margin-left: -40px;
  }
  .container {
    width: 80%;
    margin: 0 auto;
  }
  .body_container {
    height: 100%;
  }
  .bfc {
    height: 65px;
    overflow: hidden;
  }
  nav {
    width: 100%;
    background-color: cadetblue;
    height: 65px;
    color: white;
    position: fixed;
    z-index: 3;
  }
  nav .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  .loginAndReg {
    display: flex;
    width: 150px;
    justify-content: space-between;
    cursor: pointer;
  }
  .btn {
    cursor: pointer;
    width: 50px;
    height: 30px;
    border: none;
    outline: none;
    background-color: cadetblue;
    color: white;
  }
  .btn:hover {
    color: pink;
  }
  .navbar {
    height: 100%;
    width: 730px;
    display: flex;
    justify-content: space-between;
    align-items: center;  
    overflow: hidden;
    box-sizing: border-box;
  }
  .navbar li {
    cursor: pointer;
    width: 100%;
    height: 100%;    
    text-align: center;
    line-height: 65px;
    margin: 0 2px;
    box-sizing: border-box;
  }
  .navbar li:hover {
    color: pink;
    border-bottom: 3px solid pink;
    transition: all 0.5s;
  }
</style>