<template>
  <div class="login">
    <div class="loginBox">
      <div class="leftBg">

      </div>
      <div class="rightInfo">
        <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <div class="form">

          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="账号:">
              <svg-icon name="login-user" width="16" height="16" ></svg-icon>
              <el-input v-model="form.account">
              </el-input>
            </el-form-item>
            <el-form-item label="密码:">
              <svg-icon name="password" width="16" height="16" ></svg-icon>
              <el-input v-model="form.password" type="password">
              </el-input>
            </el-form-item>
            <div class="textLink">
              <el-link type="primary">忘记密码?</el-link>
              <el-link type="primary">记住密码</el-link>
            </div>

            <div class="loginBtn">
              <el-button style="width: 24rem" type="primary" @click="onSubmit">登录</el-button>
              <el-button style="width: 24rem; margin-top:2rem" @click="onSubmit">注册</el-button>
            </div>
          </el-form>
        </div>
      </el-card>
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      form: {
        account: "",
        password: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit () {
      console.log("submit!");
    },
  },
};
</script>

<style  lang="less" scoped>
.login{
  background: url('../../assets/img/loginBg.jpg') no-repeat center;
  // background: black;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginBox {
  display: flex;
  justify-content: center;
  width: fit-content;
  height: 500px;
}
.loginBtn {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px;
}

.textLink {
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
}

.clearfix {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  height: 100%;
}
.el-input {
  width: 90%;
}
.leftBg{
  width: 250px;
  height: 100%;
  background: url('../../assets/img/loginDeskLeft.png');
}
.el-form-item{
  margin-top: 36px;
}

</style>
