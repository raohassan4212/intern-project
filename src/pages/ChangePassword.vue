<template>
  <div class="login2-main-div">
    <div class="nav-type">
      <img src="../assets/logo/logo.png" alt="" width="180" />
    </div>

    <div class="for-flex">
      <div class="log-box-div">
        <p class="login-email">Change Password</p>

        <p class="p-information">Enter your new password.</p>
        <label class="lable-inp">
          Current Password
          <input
            :type="passwordFeildType"
            v-model="currentPassword"
            class="eye-flex"
          />
          <button
            class="eye-flex-btn"
            type="password"
            v-on:click="switchVisibility"
          >
            <img
              v-if="eyeChange"
              src="../assets/img/eye.png"
              alt=""
              width="20px"
            />
            <img v-else src="../assets/img/eye-cross.png" alt="" width="20px" />
          </button>
        </label>
        <br />
        <label class="lable-inp">
          New Password
          <input
            :type="passwordFeildTypeNew"
            v-model="newPassword"
            class="eye-flex"
          />
          <button
            class="eye-flex-btn"
            type="password"
            v-on:click="switchVisibilityNew"
          >
            <img
              v-if="eyeChangeNew"
              src="../assets/img/eye.png"
              alt=""
              width="20px"
            />
            <img v-else src="../assets/img/eye-cross.png" alt="" width="20px" />
          </button>
        </label>
        <br />

        <label class="lable-inp">
          Confirm Password
          <input
            :type="passwordFeildTypeConfirm"
            v-model="confirmPassword"
            class="eye-flex"
          />
          <button
            class="eye-flex-btn"
            type="password"
            v-on:click="switchVisibilityConfirm"
          >
            <img
              v-if="eyeChangeConfirm"
              src="../assets/img/eye.png"
              alt=""
              width="20px"
            />
            <img v-else src="../assets/img/eye-cross.png" alt="" width="20px" />
          </button>
        </label>
        <br />

        <div class="btn-log-div">
          <button class="btn-log">Change Password</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePassword",
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      passwordFeildType: "password",
      passwordFeildTypeNew: "password",
      passwordFeildTypeConfirm: "password",
      eyeChange: true,
      eyeChangeNew: true,
      eyeChangeConfirm: true,
    };
  },

  methods: {
    switchVisibility() {
      this.passwordFeildType =
        this.passwordFeildType == "password" ? "text" : "password";
      this.eyeChange = !this.eyeChange;
    },
    switchVisibilityNew() {
      this.passwordFeildTypeNew =
        this.passwordFeildTypeNew == "password" ? "text" : "password";
      this.eyeChangeNew = !this.eyeChangeNew;
    },
    switchVisibilityConfirm() {
      this.passwordFeildTypeConfirm =
        this.passwordFeildTypeConfirm == "password" ? "text" : "password";
      this.eyeChangeConfirm = !this.eyeChangeConfirm;
    },
  },
};
</script>

<style scoped>
.nav-type {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  margin-bottom: 5%;
}

.sign-up-btn {
  display: inline-block;
}

.login2-main-div {
  background-image: url("../assets/img/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.for-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 400px;
}

.log-box-div {
  width: 45%;
}

.box-aligment {
  width: 100%;
  border-style: none;
}

.login-email {
  font-size: 35px;
  font-weight: bolder;
  color: black;
}

.p-information {
  font-size: 20px;
  color: #829ab1;
}

.lable-inp {
  border: 2px solid lightgrey;
  width: 100%;
  border-radius: 6px;
  padding: 7px;
  padding-left: 15px;
  margin-bottom: 20px;
}

.btn-log {
  width: 71%;
  border-style: none;
  border: 2px solid #41a541;
  background-color: #41a541;
  color: white;
  font-weight: bold;
  font-size: 18px;
  border-radius: 5px;
  padding: 10px 0;
}

.btn-log-div {
  display: flex;
  justify-content: center;
}

.nav-btn-sign-up {
  width: 89px;
  height: 33px;
  margin-left: 20px;
  border-radius: 6px;
  border-style: none;
  border: 2px solid #f0b429;
  color: #f0b429;
  font-weight: bold;
}

.nav-btn-sign-up:hover {
  background-color: #f0b429;
  color: white;
}

.text-sign-up {
  color: #829ab1;
  font-size: 14px;
}

.he {
  margin: 0px !important;
  padding: 0px !important;
}

.eye-flex {
  display: inline-block;
  width: 90%;
  border-style: none;
}

.eye-flex-btn {
  display: inline-block;
  border-style: none;
}
</style>
