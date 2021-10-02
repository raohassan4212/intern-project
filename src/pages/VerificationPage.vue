<template>
  <div class="login2-main-div">
    <div class="nav-type">
      <img src="../assets/logo/logo.png" alt="" width="180" />
    </div>

    <div class="for-flex">
      <div class="log-box-div">
        <p class="login-email">Verification</p>

        <p class="p-information">Enter your 6-digit verification code</p>

        <label class="lable-inp">
          Enter your six digit verification code
          <input type="email" class="box-aligment" />
        </label>
        <br />

        

        <div class="btn-log-div">
          <button class="btn-log">Verify</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerificationPage",
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

/* .btn-log:active {
    
} */

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
