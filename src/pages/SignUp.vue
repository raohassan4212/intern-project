<template>
  <div>
    <div v-if="step === '1'" class="login2-main-div">
      <div class="nav-type">
        <img src="../assets/logo/logo.png" alt="" width="180" />

        <div>
          <p class="sign-up-btn text-sign-up">Alerady have an account?</p>
          <router-link to="/login">
            <button class="nav-btn-sign-up sign-up-btn">Log in</button>
          </router-link>
        </div>
      </div>

      <div class="for-flex">
        <div class="log-box-div">
          <p class="login-email">Create account</p>

          <p class="p-information">Enter your information below to continue.</p>
          <label class="lable-inp">
            First Name
            <input v-model="firstName" type="text" class="box-aligment" />
          </label>
          <br />
          <label class="lable-inp">
            Last Name
            <input v-model="lastName" type="text" class="box-aligment" />
          </label>
          <br />

          <label class="lable-inp">
            Number
            <input
              v-model="number"
              type="text"
              class="box-aligment"
              placeholder="0-0000000-00"
            />
          </label>
          <br />

          <label class="lable-inp">
            Email
            <input v-model="email" type="email" class="box-aligment" />
          </label>
          <br />

          <label class="lable-inp">
            Password
            <input v-model="password" type="password" class="box-aligment" />
          </label>
          <br />

          <div class="btn-log-div">
            <button v-on:click="signUpUser" class="btn-log">Continue</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="step === '2'" class="login2-main-div">
      <div class="nav-type">
        <img src="../assets/logo/logo.png" alt="" width="180" />
      </div>

      <div class="for-flex">
        <div class="log-box-div">
          <p class="login-email">Verification</p>

          <p class="p-information">Enter your 6-digit verification code</p>

          <label class="lable-inp">
            Enter your six digit verification code
            <input v-model="code" type="email" class="box-aligment" />
          </label>
          <br />
            <div class="btn-log-div">
              <button v-on:click="verify" class="btn-log">Verify</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      password: "",
      step: "1",
      code: "",
    };
  },
  methods: {
    signUpUser() {
      fetch("http://localhost:5000/create", {
        cache: "default",
        mode: "cors",
        method: "POST",
        headers: {
          firstname: this.firstName,
          lastname: this.lastName,
          number: this.number,
          email: this.email,
          password: this.password,
        },
      })
        .then(async () => {
          console.log("email is send");
          console.log(this.lastName);
          this.step = "2";
        })
        .catch((err) => {
          console.log("err ====> ",err);
        });
    },
    verify() {
      fetch("http://localhost:5000/verify", {
        cache: "default",
        mode: "cors",
        method: "POST",
        headers: {
          email: this.email,
          code: this.code,
        },
      })
        .then(async (res) => {
          console.log(this.code);
          console.log(res);
          if (res.ok) {
            alert("User is verified");
            this.$router.push("/login");
          } else {
            alert("Verification code is invalid");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    com() {
      console.log("Chal raha ah");
    },
  },
};
</script>

<style scoped>
.nav-type {
  display: flex;
  justify-content: space-between;
  padding: 30px;
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

.six-label {
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
</style>
