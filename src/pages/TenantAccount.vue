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
    <div v-if="step === 1" class="sub-flex">
      <div class="flex-width">
        <h3 class="h3-occupied">Are you looking for a new place?</h3>
        <p class="p-occupied">
          If you'd like to find a new long-term rental hit Yes. If you are
          happily moved-in just click No.
        </p>
        <div class="y-n-main">
          <div class="yn-sub" v-on:click="nextStep">
            <div class="yes">
              Y
              <input
                value="yes"
                class="inp-radio"
                style="height: 35px; width: 35px"
                type="radio"
              />
            </div>
            Yes
          </div>
          <div class="yn-sub" v-on:click="noNextBtn">
            <div class="No">
              N
              <input
                value="no"
                class="inp-radio"
                style="height: 35px; width: 35px"
                type="radio"
              />
            </div>
            No
          </div>
        </div>
      </div>
    </div>

    <!-- step  2-->
    <div v-if="step === 2">
      <div>
        <button class="back-btn" v-on:click="backBtn">Back</button>
      </div>
      <div class="sub-flex">
        <div class="flex-width">
          <h3 class="h3-occupied">Where do you want to live?</h3>
          <p class="p-occupied">
            Enter the city to let us find you the perfect fit among verified
            houses and apartment for rent.
          </p>
          <div class="label-div">
            <label class="lable-inp">
              Location*
              <input
                type="text"
                class="box-aligment"
                placeholder="Type city, state or zip code"
              />
            </label>
          </div>
          <div class="p-div-center">
            <p class="p-location">Use my current location</p>
          </div>
          <div class="btn-log-div">
            <button class="btn-log" v-on:click="nextStep">Next</button>
          </div>
        </div>
      </div>
    </div>

    <!-- step  3 -->

    <div v-if="step === 3">
      <div>
        <button class="back-btn" v-on:click="backBtn">Back</button>
      </div>
      <div class="sub-flex">
        <div>
          <h3 class="h3-occupied">What's included?</h3>
          <p class="p-occupied">
            Select the property features and amenities below.
          </p>
          <MultiSelectChip :data="fields[0].data" :change="handleClick" />
          <!-- <div class="main-chip-div">
            <div v-for="(item, i) in chips" class="chip" :key="i">
              {{ item.chip }}
            </div>
          </div> -->
          <div class="btn-log-div">
            <button class="btn-log" v-on:click="nextStep">Next</button>
          </div>
        </div>
      </div>
    </div>

    <!-- step  4 -->

    <div v-if="step === 4">
      <div>
        <button class="back-btn" v-on:click="backBtn">Back</button>
      </div>
      <div class="sub-flex">
        <div>
          <h3 class="h3-occupied">Specify the rental criteria</h3>
          <p class="p-occupied">
            Make your rental search more detailed and let Vendr find you a
            perfect home
          </p>
          <div class="sub-two-div">
            <div>
              <label>
                <b class="b-number">Beds</b>
                <div>
                  <button class="btn-number any-c">Any</button>
                  <button class="btn-number col-btn">studio</button>
                  <button class="btn-number col-btn">1</button>
                  <button class="btn-number col-btn">2</button>
                  <button class="btn-number col-btn">3</button>
                  <button class="btn-number col-btn">4</button>
                  <button class="btn-number col-btn">5+</button>
                </div>
              </label>
              <br />
              <label>
                <b class="b-number">Baths</b>
                <div>
                  <button class="btn-number any-c">Any</button>
                  <button class="btn-number col-btn">studio</button>
                  <button class="btn-number col-btn">1</button>
                  <button class="btn-number col-btn">2</button>
                  <button class="btn-number col-btn">3</button>
                  <button class="btn-number col-btn">4</button>
                  <button class="btn-number col-btn">5+</button>
                </div>
              </label>
              <br />
              <label class="switch-label sw-ma">
                <b>Additional</b> <br />
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
                Pets Allowed
              </label>
            </div>

            <div>
              <div class="per-month-div-flex">
                <div class="min-stack">
                  <h3 class="h3-inline-block">Min -</h3>
                  <h3 class="h3-inline-block h3-color">$ {{ val + 50 }}</h3>
                </div>
                <div>
                  <h3 class="h3-per-month">per month</h3>
                </div>
              </div>
              <div class="slidecontainer">
                <input
                  type="range"
                  min="1"
                  max="100"
                  v-model="val"
                  value="50"
                  class="ran"
                />
              </div>

              <div class="switch-2margin">
                <label class="switch-label">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                  Furnish
                </label>
              </div>
            </div>
          </div>
          <div class="btn-log-div">
            <button class="btn-log" v-on:click="nextStep">Next</button>
          </div>
        </div>
      </div>
    </div>

    <!-- step  5 -->

    <div v-if="step === 5">
      <div>
        <button class="back-btn" v-on:click="backBtn">Back</button>
      </div>
      <div class="sub-flex">
        <div class="flex-max-width">
          <h3 class="h3-occupied">
            Do you want to connect with your landlord?
          </h3>
          <p class="p-occupied">
            Tell your landlord you're using TenantCloud. We'll send them an
            email invite to join you and share the lease.
          </p>
          <div class="label-flex">
            <label class="lable-inp">
              Email*
              <input v-model="email" type="email" class="box-aligment" />
            </label>
          </div>
          <div class="other-btn-div">
            <button class="other-btn">I will do it later ></button>
          </div>
          <div class="btn-log-div">
            <button class="btn-log" v-on:click="nextStep">Next</button>
          </div>
        </div>
      </div>
    </div>

    <!-- step  6 -->

    <div v-if="step === 6">
      <div class="sub-flex">
        <div class="flex-max-width">
          <h3 class="h3-occupied">Well done!</h3>
          <p class="p-occupied">
            You have successfully set up your perfect home search preferences.
            Get the free TenantCloud app for a better experience.
          </p>
          <div class="qrCode">
            <div class="appleGoogleMargin">
              <div class="googlePlay">
                <img
                  src="https://cdn.tenantcloud.com/builds/v37.7.12/web/images/static/email/google-play@2x.png"
                  alt=""
                  width="150px"
                />
              </div>
              <div>
                <img
                  src="https://cdn.tenantcloud.com/builds/v37.7.12/web/images/static/email/app-store@2x.png"
                  alt=""
                  width="150px"
                />
              </div>
            </div>
            <div>
              <img
                src="https://cdn.tenantcloud.com/builds/v37.7.12/web/images/mobile/qr-code-app-link.svg"
                alt=""
                width="150px"
              />
            </div>
          </div>
          <div class="btn-log-div">
            <button class="btn-log" v-on:click="nextStep">Start Using Vendr</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import MultiSelectChip from "../components/MultiSelectChip.vue";
export default {
  name: "TenantAccount",
  components: {
    MultiSelectChip,
  },
  data() {
    return {
      yes: "",
      no: "",
      step: 1,
      val: 10,
      fields: [
        {
          title: "Cleaning",
          icon: "https://cdn.tenantcloud.com/builds/v37.6.21/web/images/shared/professional-category/cleaning.svg",
          desc: "Select services you can provide. Use the 'Other' option if you can't find your service type.",
          sel: 0,
          data: [
            { chip: "Room" },
            { chip: "Apartment" },
            { chip: "Multiplex" },
            { chip: "Single Family" },
            { chip: "Townhouse" },
            { chip: "Condo" },
            { chip: "Commercial" },
            { chip: "Storage" },
            { chip: "Parking Space" },
            { chip: "Suite" },
            { chip: "Mobile Home" },
            { chip: "Villa" },
          ],
        },
      ],
      chips: [
        { chip: "Room" },
        { chip: "Apartment" },
        { chip: "Multiplex" },
        { chip: "Single Family" },
        { chip: "Townhouse" },
        { chip: "Condo" },
        { chip: "Commercial" },
        { chip: "Storage" },
        { chip: "Parking Space" },
        { chip: "Suite" },
        { chip: "Mobile Home" },
        { chip: "Villa" },
      ],
    };
  },

  methods: {
    nextStep() {
      this.step = this.step + 1;
    },
    noNextBtn() {
      this.step = this.step + 4;
    },
    backBtn() {
      this.step = this.step - 1;
    },
    test() {
      console.log(this.val);
    },
  },
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
  margin-bottom: 1px;
}

.nav-btn-sign-up {
  width: 89px;
  height: 33px;
  margin-left: 20px;
  border-radius: 6px;
  border-style: none;
  font-weight: bold;
  color: black;
}

.back-btn {
  width: 89px;
  height: 33px;
  margin-left: 40px;
  border-radius: 6px;
  border-style: none;
  font-weight: bold;
  font-size: 18px;
  background-color: transparent;
  color: black;
  position: relative;
}

.sub-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 110px;
}

.h3-occupied {
  font-size: 32px;
  text-align: center;
  font-weight: 900;
  color: #102a43;
  margin: 30px;
}

.p-occupied {
  text-align: center;
  font-size: 21px;
  color: #102a43;
  margin-bottom: 60px;
}

.yes {
  border-style: none;
  border: 1px solid #829ab1;
  font-size: 45px;
  padding: 25px 0;
  padding-left: 49px;
  padding-right: 0px !important;
  border-radius: 10px;
  text-shadow: -4px 1px #829ab1;
  font-weight: bold;
  color: white;
}

.yes:active {
  background-color: #007bff;
}

.No:active {
  background-color: #007bff;
}

.No {
  border-style: none;
  border: 1px solid #829ab1;
  font-size: 45px;
  padding: 25px 0;
  padding-left: 45px;
  padding-right: 0px !important;
  border-radius: 10px;
  text-shadow: -4px 1px #829ab1;
  font-weight: bold;
  color: white;
}

.y-n-main {
  display: flex;
  justify-content: space-evenly;
}

.inp-radio {
  position: relative;
  top: 50px;
  left: 15px;
}

.flex-width {
  width: 600px;
}

.yn-sub {
  text-align: center;
  color: black;
  font-weight: bold;
  font-size: 18px;
}

.back-btn {
  width: 89px;
  height: 33px;
  margin-left: 40px;
  border-radius: 6px;
  border-style: none;
  font-weight: bold;
  font-size: 18px;
  background-color: transparent;
  color: black;
  position: relative;
  top: 45px;
  left: 190px;
}

.back-btn:active {
  color: grey;
}

.lable-inp {
  border: 2px solid lightgrey;
  width: 60%;
  border-radius: 6px;
  padding: 7px;
  padding-left: 15px;
  margin-bottom: 20px;
  font-size: 12px;
  color: black;
}

.box-aligment {
  width: 100%;
  font-size: 14px;
}

.box-aligment::placeholder {
  color: rgb(182, 182, 182);
}

.label-div {
  display: flex;
  justify-content: center;
}

.p-div-center {
  display: flex;
  justify-content: center;
}

.p-location {
  font-size: 14px;
  color: #007bff;
}

.btn-log-div {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.btn-log {
  width: 35%;
  border-style: none;
  border: 2px solid #007bff;
  background-color: #007bff;
  color: white;
  font-size: 18px;
  border-radius: 5px;
  padding: 10px 0;
}

.btn-log:active {
  border: 2px solid #5ba4f1;
  background-color: #5ba4f1;
}

/* step 3 css */

.main-chip-div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 100px;
  max-width: 700px;
}

.chip {
  margin: 10px 15px;
  color: #41a541;
  border: 1px solid #41a541;
  padding: 5px 10px;
  border-radius: 19px;
}

.chip:hover {
  color: white;
  background-color: #41a541;
}

/* step  4 css */

.sub-two-div {
  display: flex;
  justify-content: space-evenly;
}

.h3-inline-block {
  display: inline-block;
}

.per-month-div-flex {
  display: flex;
  justify-content: space-between;
}

.lable-number {
  font-size: 23px;
}

.b-number {
}

.btn-number {
  border-style: none;
  padding: 7px 16px;
}

.any-c {
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  margin-right: 10px;
}

.col-btn:hover {
  background-color: #007bff;
  color: white;
  border-radius: 5px;
}

.h3-color {
  color: #007bff;
}

.min-stack {
  margin-right: 90px;
}

.h3-per-month {
  text-align: center;
  font-size: 15px;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 1px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
  background-color: gray;
}

.slider.round:before {
  border-radius: 50%;
}

.slidecontainer {
  width: 100%;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 28px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #04aa6d;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04aa6d;
  cursor: pointer;
}

.ran {
  width: 300px;
}

.switch-2margin {
  margin-top: 75px;
}

.sw-ma {
  margin-top: 15px;
}

/* step no 5 */

.lable-inp {
  border: 2px solid lightgrey;
  width: 60%;
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

.label-flex {
  display: flex;
  justify-content: center;
}

.flex-max-width {
  max-width: 700px;
}

.other-btn-div {
  display: flex;
  justify-content: center;
}

.other-btn {
  border-style: none;
  font-size: 20px;
  color: #007bff;
}

/* step  6 */

.qrCode {
  display: flex;
  justify-content: center;
}

.googlePlay {
  margin-bottom: 50px;
  margin-top: 5px;
}

.appleGoogleMargin {
  margin-right: 20px;
}
</style>