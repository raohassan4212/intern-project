<template>
  <div class="bg-img">
    <div class="for-flex">
      <div class="log-box-div">
        <p class="login-email">List a vacant property</p>

        <p class="p-information">
          Tell your prospective tenants about your rental. Market it to your
          free listing website and other available ILS.
        </p>
        <div>
          <label class="lable-inp">
            Listing title*
            <input v-model="lastName" type="text" class="box-aligment" />
            <!-- <input v-model="firstName" type="text" class="box-aligment" /> -->
          </label>
          <br />

          <div class="two-label">
            <label class="lable-inp gap-4">
              Size, sq.ft*
              <input
                v-model="lastName"
                type="text"
                class="box-aligment"
                placeholder="Size, sq.ft"
              />
            </label>
            <br />
            <label class="lable-inp gap-4">
              Year Built*
              <input
                v-model="lastName"
                type="text"
                class="box-aligment"
                placeholder="Year Built"
              />
            </label>

            <label class="lable-inp gap-4">
              Baths*
              <select name="cars" id="cars" class="box-aligment">
                <option value="volvo">Baths</option>
                <option value="opel">Month to Month</option>
              </select>
            </label>

            <label class="lable-inp gap-4">
              Beds*
              <select name="cars" id="cars" class="box-aligment">
                <option value="volvo">Beds</option>
                <option value="opel">Month to Month</option>
              </select>
            </label>
          </div>

          <div class="two-label">
            <label class="lable-inp gap-3">
              Lease Duration*
              <select name="cars" id="cars" class="box-aligment">
                <option value="volvo">One Year</option>
                <option value="opel">Month to Month</option>
              </select>
            </label>

            <label class="lable-inp gap">
              Data available*
              <input v-model="lastName" type="date" class="box-aligment" />
            </label>
            <br />
            <label class="lable-inp gap">
              Market rent/month*
              <input
                v-model="lastName"
                type="text"
                class="box-aligment"
                placeholder="0.00"
              />
            </label>
          </div>

          <label class="lable-inp label-height">
            Marketing description*
            <input v-model="lastName" type="text" class="box-aligment" />
            <!-- <input v-model="firstName" type="text" class="box-aligment" /> -->
          </label>

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
  name: "VacantProperty",
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
  width: 55%;
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
  width: 23% !important;
}

.gap-3 {
  width: 50% !important;
  margin-right: 6px;
}

.gap-4 {
  width: 23% !important;
}

.label-height {
  height: 100px;
}
</style>