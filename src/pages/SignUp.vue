<template>
  <div class="login2-main-div">
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
          <input type="text" class="box-aligment" />
        </label>
        <br />
        <label class="lable-inp">
          Last Name
          <input type="text" class="box-aligment" />
        </label>
        <br />

        <label class="lable-inp">
          Number
          <input type="text" class="box-aligment" placeholder="0-0000000-00" />
        </label>
        <br />

        <label class="lable-inp">
          Email
          <input type="email" class="box-aligment" />
        </label>
        <br />

        <label class="lable-inp">
          Confirm Email
          <input type="email" class="box-aligment" />
        </label>
        <br />

        <router-link to="/verification">
          <div class="btn-log-div">
            <button class="btn-log">Continue</button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
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
