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
        <p class="login-email">Add a Tenant to the property</p>

        <p class="p-information">
          Create a tenant contact and invite them to use Vendr with you.
        </p>
        <div>
        
        <label class="lable-inp">
          Tenant first name*
          <input
            v-model="lastName"
            type="text"
            class="box-aligment"
          />
        </label>
        <br />

        <label class="lable-inp">
          Tenant last name*
          <input
            v-model="lastName"
            type="text"
            class="box-aligment"
          />
        </label>
        <br />

        <label class="lable-inp">
          Tenant email*
          <input
            v-model="lastName"
            type="text"
            class="box-aligment"
          />
        </label>
        <br />

        

        <div>
            <input type="checkbox"  class="inline-check-p check" > <p class="inline-check-p">Invite the tenant to see lease information in Vendr</p>
        </div>

        <div>
          <p class="skip">Do you want to do this later? <br> <b class="skip-blue">Skip ></b>  </p>
        </div>

        
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
  name: "AddTenantProperty",
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
  width: 39%;
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
.box-aligment select{
-webkit-appearance:default-button;
}
.box-aligment {
  width: 100%;
  /* border-style: none; */
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

.inline-check-p {
  display: inline-block;
}

.check {
  margin-right: 10px;
}

.skip {
  text-align: center;
}

.skip-blue {
  color: #007bff;
}

</style>