<template>
  <div class="bg-img">
    <div class="for-flex">
      <div class="log-box-div">
        <p class="login-email">Enter lease details</p>

        <p class="p-information">
          Provide basic lease information, you can always edit it later.
        </p>
        <div>
          <label class="lable-inp">
            Lease type*
            <select name="cars" id="cars" class="box-aligment">
              <option value="volvo">Fixed</option>
              <option value="opel">Month to Month</option>
            </select>
            <!-- <input v-model="firstName" type="text" class="box-aligment" /> -->
          </label>
          <br />

          <div class="two-label">
            <label class="lable-inp gap">
              Start data*
              <input
                v-model="lastName"
                type="date"
                class="box-aligment"
              />
            </label>
            <br />
            <label class="lable-inp gap">
              End data*
              <input
                v-model="lastName"
                type="date"
                class="box-aligment"
              />
            </label>
          </div>

          <div class="two-label">
            <label class="lable-inp gap">
              Rent Monthly*
              <input
                v-model="lastName"
                type="text"
                class="box-aligment"
                placeholder="0.00"
              />
            </label>
            <br />
            <label class="lable-inp gap">
              Deposite*
              <input
                v-model="lastName"
                type="text"
                class="box-aligment"
                placeholder="0.00"
              />
            </label>
          </div>

          <br />
        </div>

        <div class="btn-log-div">
          <button v-on:click="signUpUser" class="btn-log">Continue</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeaseDetail",
};
</script>

<style scoped>
.bg-img {
  background-image: url("../assets/img/bg01.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}


.for-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  margin-top: 200px;
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

.two-label {
    display: flex;
    justify-content: space-between;
}

.gap {
    width: 48% !important;
}
</style>