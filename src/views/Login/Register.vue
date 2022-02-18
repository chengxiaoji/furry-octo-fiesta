<template>
  <div class="login">
    <div class="loginBox">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户注册</span>
        </div>
        <div class="form">

          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="Email:">
              <div class="icon">
                <svg-icon name="login-user" width="16" height="16"></svg-icon>
              </div>
              <el-input v-model="form.account" placeholder="请输入要激活的邮箱">
              </el-input>
            </el-form-item>
            <el-form-item label="学校:">
              <div class="icon">
                <svg-icon name="login-user" width="16" height="16"></svg-icon>
              </div>
              <el-input v-model="form.account" placeholder="请输入您所在的学校名">
              </el-input>
            </el-form-item>
            <el-form-item label="学号/工号:">
              <div class="icon">
                <svg-icon name="login-user" width="16" height="16"></svg-icon>
              </div>
              <el-input v-model="form.account" placeholder="学号/工号">
              </el-input>
            </el-form-item>
            <el-form-item label="身份:">
              <div class="icon">
                <svg-icon name="login-user" width="16" height="16"></svg-icon>
              </div>
              <el-input v-model="form.account" placeholder="学号/工号">
              </el-input>
            </el-form-item>
            <el-form-item label="密码:">
              <div class="icon">
                <svg-icon name="password" width="16" height="16"></svg-icon>
              </div>
              <el-input v-model="form.password" type="password" placeholder="6-20位的字母、数字或特殊符号">
              </el-input>
            </el-form-item>
            <!-- <div class="textLink">
              <el-link type="primary">忘记密码?</el-link>
              <el-checkbox v-model="remember">下次自动登录</el-checkbox>
            </div> -->

            <div class="loginBtn">
              <el-button class="btn" style="width: 24rem; " type="primary" @click="onSubmit">创建账户</el-button>
              <el-button class="btn" style="width: 24rem; margin-top:2rem" @click="toLogin">已有账号, 立即登录</el-button>
            </div>
          </el-form>
        </div>
      </el-card>

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
          type: [],
          resource: "",
          desc: "",
        },
        remember: false
      };
    },
    methods: {
      onSubmit() {
        console.log("submit!")
      },
      toLogin() {
        this.$router.push('login')
      }
    },
  };
</script>

<style lang="less" scoped>
  .login {
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
    // height: 500px;
  }

  .loginBtn {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 32px;

    .btn {
      font-weight: bold;
      font-size: 18px;
      border-radius: 20px;
      border: none;
      background-color: #fa911e;
    }
  }

  ::v-deep .el-form-item__label {
    text-align: center;
  }

  .btn:nth-of-type(1):hover {
    background-color: #f08200;
  }

  .btn:nth-of-type(2) {
    color: #fa911e;
    background-color: #fff;
  }


  .textLink {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }

  .el-link.el-link--primary {
    color: #666666;
  }

  ::v-deep .el-checkbox__label {
    padding-left: 3px;
  }

  .el-link.el-link--primary:hover {
    color: #fa911e;
    text-decoration: underline;
    border: none;
  }

  .el-link.is-underline:hover:after {
    border: none;
  }

  ::v-deep .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #fa911e !important;
  }

  ::v-deep .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #fa911e;
    border-color: #fa911e;
  }

  .clearfix {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fa9111;
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
    width: 94%;
  }

  .box-card {
    border-radius: 21px;
  }

  .el-form-item {
    margin-top: 36px;
  }

  .icon {
    position: absolute;
    top: 3px;
    left: 9px;
    z-index: 99;
  }

  ::v-deep .el-input__inner {
    padding-left: 32px;
  }

  ::v-deep .el-input.is-active .el-input__inner,
  ::v-deep .el-input__inner:focus {
    border-color: #fa911e;
  }
</style>