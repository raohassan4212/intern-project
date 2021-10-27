<template>
  <div>
    <div class="link-div-flex">
      <router-link to="./login">
        <p>DASHBOARD /</p>
      </router-link>
      <router-link to="./login">
        <p>SETTINGS /</p>
      </router-link>
      <router-link to="./login">
        <p>SEARCH PREFERENCE</p>
      </router-link>
    </div>
    <div>
      <p class="p-inline p-mr">Account Settings</p>
    </div>
    <div class="nav-type-div">
      <div class="div-width div-profile">
        <router-link to="renter-setting">
          <div>Renter Profile</div></router-link
        >
      </div>
      <div class="div-width div-security">Search Preferences</div>
    </div>

    <p class="account-setting-h">Search Preferences</p>
    <p>
      You will receive daily e-mail updates about new listings matching these
      criteria, whenever your status for 'Looking for a place' is active.
    </p>
    <label class="switch-label sw-ma">
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      <span class="span-looking-place"> Looking for a new place </span>
    </label>
    <div class="with-flex-info-div">
      <div class="few-profile-span-flex">
        <label class="lable-inp">
          Your Public Renter Profile link*
          <input
            v-model="lastName"
            type="text"
            class="box-aligment"
            placeholder="https://tp446062.tenantcloud.com"
          />
        </label>
        <span>View profile</span>
      </div>
      <p>Specify the following details to find the perfect rental for you.</p>
      <label class="lable-inp width-match">
        Location*
        <input
          v-model="lastName"
          type="text"
          class="box-aligment"
          placeholder="Your location"
        />
      </label>
      <div class="two-label width-match">
        <label class="lable-inp gap">
          Move in Date*
          <input
            v-model="lastName"
            type="date"
            class="box-aligment"
            placeholder="Enter move in date"
          />
        </label>
        <br />
        <label class="lable-inp gap">
          Number Occupants*
          <select name="cars" id="cars" class="box-aligment">
            <option value="volvo">1</option>
            <option value="saab">2</option>
            <option value="opel">3</option>
          </select>
        </label>
      </div>
      <!--  -->
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
            <!-- <button class="btn-number col-btn">studio</button> -->
            <button class="btn-number col-btn">1</button>
            <button class="btn-number col-btn">2</button>
            <button class="btn-number col-btn">3</button>
            <button class="btn-number col-btn">4</button>
            <button class="btn-number col-btn">5+</button>
          </div>
        </label>
      </div>
      <!--  -->
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
        <div class="two-label width-match mr-d">
        <label class="lable-inp gap">
          Rental Type*
          <select name="cars" id="cars" class="box-aligment">
            <option value="volvo">Room</option>
            <option value="saab">Apartment</option>
            <option value="opel">Multiplex</option>
            <option value="volvo">Single-Family</option>
            <option value="saab">Townhouse</option>
            <option value="opel">Cando</option>
            <option value="opel">Commercial</option>
          </select>
        </label>
        <br />
        <label class="lable-inp gap">
          Size*
          <input
            v-model="lastName"
            type="number"
            class="box-aligment"
            placeholder="Enter move in date"
          />
        </label>
      </div>
      </div>
      <label class="switch-label sw-ma">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        Pets Allowed
      </label>
      <br>
    
      <label class="switch-label sw-ma">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        Furnish
      </label>
      <br>
      <button class="account-setting-btn-update">update</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPreference",
  data() {
      return {
          val: 0
      }
  }
};
</script>

<style scoped>
.link-div-flex {
  display: flex;
}

.link-div-flex p {
  font-size: 12px;
  margin-right: 15px;
  color: black;
}

.link-div-flex p:hover {
  color: #007bff;
}

.p-inline {
  display: inline-block;
}

.p-mr {
  margin-right: 20px;
  font-size: 23px;
  color: #102a43;
}

.div-width {
  width: 100%;
  text-align: center;
  padding: 15px 0;
}

.nav-type-div {
  display: flex;
  justify-content: space-evenly;
}

.div-profile {
  background-color: #d6dae0;
  color: #536781;
  font-size: 19px;
}

.div-security {
  border-bottom: 2px solid #007bff;
  color: #007bff;
  font-size: 18px;
  font-weight: 800;
}

.account-setting-h {
  color: #536781;
  font-size: 18px;
  font-weight: 800;
  margin-top: 25px;
  margin-bottom: 3px;
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

/* che */

.span-looking-place {
  font-weight: 700;
  font-size: 18px;
}

.with-flex-info-div {
  width: 88%;
}

/*  */
.few-profile-span-flex {
  display: flex;
  align-items: center;
}

.few-profile-span-flex > span {
  width: 155px;
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 20px;
  color: #007bff;
}

.width-match {
  width: 87%;
}

.btn-number {
  border-style: none;
  padding: 10px 26px;
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

.per-month-div-flex {
  display: flex;
  justify-content: space-between;
}

.min-stack {
  margin-right: 90px;
}

.h3-inline-block {
  display: inline-block;
}

.h3-color {
  color: #007bff;
}

.h3-per-month {
  text-align: center;
  font-size: 15px;
}

.slidecontainer {
  width: 100%;
}

.ran {
  width: 300px;
}

.mr-d {
    margin-top: 25px;
}

.account-setting-btn-update {
  margin: 20px 0;
  border-style: none;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

@media only screen and (max-width: 600px) {
  .col-btn{
    /* width: 10px; */
    padding: 0 10px;
  }
}
</style>