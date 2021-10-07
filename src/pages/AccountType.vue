<template>
  <div class="bg-img">
    <div class="nav-type">
      <img src="../assets/logo/logo.png" alt="" width="180" />

      <div>
        <router-link to="/sign-up">
          <button class="nav-btn-sign-up">Log out</button>
        </router-link>
      </div>
    </div>

    <div class="for-flex">
      <div class="log-box-div">
        <p class="login-email">Account Type</p>

        <p class="p-information">Select the account type that suit you the best. Every account have different set of tools.</p>
        <label class="lable-inp">
          <span class="radio-span"><input class="inp-radio" type="radio"></span>
          <span class="inline-span">
              <div class="b-text"> <b>Landlord</b> </div>
              <div>Accept rent online and manage rentals</div>
          </span>
        </label>
        <br />
        <label class="lable-inp">
          <span class="radio-span"><input class="inp-radio" type="radio"></span>
          <span class="inline-span">
              <div class="b-text"> <b>Vendr</b> </div>
              <div>Find a place and pay rent online</div>
          </span>
        </label>
        <br />

        <label class="lable-inp">
          <span class="radio-span"><input class="inp-radio" type="radio"></span>
          <span class="inline-span">
              <div class="b-text"> <b>Service Pro</b> </div>
              <div>Manage request from landlords and find new job</div>
          </span>
        </label>
        <br />

        <div class="btn-log-div">
          <button class="btn-log">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountType",
};
</script>


<style scoped>
.bg-img {
  background-image: url("../assets/img/bg01.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.nav-type {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  margin-bottom: 5%;
}

.nav-btn-sign-up {
  width: 89px;
  height: 33px;
  margin-left: 20px;
  border-radius: 6px;
  border-style: none;
  /* border: 2px solid #f0b429;
  color: #f0b429; */
  font-weight: bold;
}

.nav-btn-sign-up:hover {
  /* border-bottom: 1px solid black; */
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

.login-email {
  font-size: 35px;
  font-weight: bolder;
  color: black;
  text-align: center;
}

.p-information {
  font-size: 20px;
  /* color: #829ab1; */
  text-align: center;
}

.lable-inp {
  border: 2px solid lightgrey;
  width: 100%;
  border-radius: 6px;
  padding: 7px;
  padding-left: 15px;
  margin-bottom: 20px;
}

.btn-log-div {
  display: flex;
  justify-content: center;
}

.btn-log {
  width: 40%;
  border-style: none;
  border: 2px solid #007BFF;
  background-color: #007BFF;
  color: white;
  font-weight: bold;
  font-size: 18px;
  border-radius: 5px;
  padding: 10px 0;
}

.inline-span {
    display: inline-block;
}

.radio-span {
    margin-right: 20px;
}

.inp-radio {
    position: relative;
    bottom: 7px;
}

.b-text {

    font-size: 15px;
}
</style>