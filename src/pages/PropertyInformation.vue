<template>
  <div class="bg-img">
    <div class="nav-type">
      <img src="../assets/logo/logo.png" alt="" width="180" />

      <div>
        <router-link to="/sign-up">
          <button class="nav-btn-sign-up sign-up-btn">Log out</button>
        </router-link>
      </div>
    </div>
    <div class="for-flex">
      <div class="log-box-div">
        <p class="login-email">Property Information</p>

        <p class="p-information">
          Managing you rental business with Vendr starts with adding your
          first property. You can add more units later on.
        </p>
        <div>
          <label class="lable-inp">
            Property type*
            <select name="cars" id="cars" class="box-aligment">
              <option value="volvo">Default</option>
              <option value="saab">Single family</option>
              <option value="opel">Multi Family</option>
            </select>
            <!-- <input v-model="firstName" type="text" class="box-aligment" /> -->
          </label>
          <br />
          <label class="lable-inp">
            Address*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Start typing your street address"
            />
          </label>
          <br />

          <label class="lable-inp">
            Market Rent*
            <input
              v-model="number"
              type="text"
              class="box-aligment"
              placeholder="0-0000000-00"
            />
          </label>
          <br />
        </div>

        <div class="btn-log-div">
          <button v-on:click="signUpUser" class="btn-log">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PropertyInformation",
};
</script>

<style >
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
  font-size: 12px;
  color: black;
}

.box-aligment {
  width: 100%;
  border-style: none;
  font-size: 14px;
}

.box-aligment::placeholder {
  color: rgb(199, 198, 198);
}

.btn-log-div {
  display: flex;
  justify-content: center;
}

.btn-log {
  width: 40%;
  border-style: none;
  border: 2px solid #007bff;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  font-size: 18px;
  border-radius: 5px;
  padding: 10px 0;
}
</style>