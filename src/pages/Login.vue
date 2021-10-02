<template>
  <div class="login2-main-div">
    <div class="nav-type">
      <img src="../assets/logo/logo.png" alt="" width="180" />

      <div>
        <p class="sign-up-btn text-sign-up">Don’t have an account?</p>

        <router-link to="/sign-up">
          <button class="nav-btn-sign-up sign-up-btn">Sign up</button>
        </router-link>
      </div>
    </div>

    <div class="for-flex">
      <div class="log-box-div">
        <p class="login-email">Log in with Email</p>

        <p class="p-information">
          Enter your account information below to continue
        </p>
        <label class="lable-inp">
          Email
          <input v-model="email" type="email" class="box-aligment" />
        </label>
        <br />
        <label class="lable-inp">
          Password <br />
          <input
            :type="passwordFeildType"
            v-model="password"
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

        <div class="incorrect" v-if="toShow">
          Incorrect username or password.
        </div>

        <!-- <label class="lable-inp wi">
          Password
          <password
          class="he"
            id="password"
            name="password"
            :tabindex="1"
            :placeholder="'password'"
            :hide="false"
            :value="passwordValue"
            :disabled="false"
            :is-view-password="true"
            :passwordFieldType="'password'"
            @change="onChangePassword"
            @blur="onBlur"
            @focus="onFocus"
          />
        </label> -->

        <div class="forget">
          <div>
            <input type="checkbox" class="remember-block check" />
            <p class="remember-block">Remember for 60 days</p>
          </div>
          <router-link to="/forget">
            <p class="forget-pass">Forget Password?</p>
          </router-link>
        </div>
        <div class="btn-log-div">
          <button v-on:click="getUser" class="btn-log">Log in</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import password from "vue-weblineindia-password";
export default {
  name: "Login",
  components: {
    password,
  },
  data() {
    return {
      email: "",
      password: "",
      passwordFeildType: "password",
      eyeChange: true,
      user: {},
      toShow: false,
    };
  },
  // data: function () {
  //   return {
  //     passwordValue: "",
  //   };
  // },
  methods: {
    switchVisibility() {
      this.passwordFeildType =
        this.passwordFeildType == "password" ? "text" : "password";
      this.eyeChange = !this.eyeChange;
    },

    /** on change password*/
    // onChangePassword(value, id) {
    //   this.passwordValue = value;
    // },

    /** on blur password field*/
    // onBlur(event, placeholder, errorObj) {
    // //   event.target.placeholder = placeholder;
    // },

    /** on focus password field*/
    // onFocus(event) {
    //   event.target.placeholder = "";
    // },

    async getUser() {
      await fetch("http://localhost:5000/user", {
        cache: "default",
        mode: "cors",
        method: "GET",
        headers: {
          "Content-type": "application/json;charset=UTF-8",
          email: this.email,
          password: this.password,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("userId", data.id);
          console.log(data);
          this.$router.push("dashboard");
        })
        .catch((err) => {
          console.log(`error ===> ${err}`);
          this.toShow = true;
        });
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
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* min-width: 300px; */
  width: 45%;
}

.box-aligment {
  width: 100%;
  border-style: none;
}

.forget {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
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

.remember-block {
  display: inline-block;
  color: #102a43;
  font-size: 14px;
}

.check {
  margin-right: 10px;
}

.forget-pass {
  color: #41a541;
  font-weight: bold;
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

.wi {
  /* height: 60px !important; */
}

.he {
  margin: 0px !important;
  padding: 0px !important;
}

.incorrect {
  color: red;
  margin-bottom: 5px;
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
