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
        <p>RENTER PROFILE</p>
      </router-link>
    </div>
    <div>
      <p class="p-inline p-mr">Renter Profile</p>
    </div>
    <div class="nav-type-div">
      <div class="div-width div-profile">Renter Profile</div>
      <div class="div-width div-security">
        <router-link to="search-preference">
        <div>Search Preferences</div>
        </router-link>
      </div>
    </div>
    <p class="account-setting-h">Application details</p>
    <p>
      Your profile information will automatically be copied to your rental
      application form when you apply online.
    </p>

    <div class="account-setting-div-flex">
      <div>
        <div class="two-label">
          <label class="lable-inp gap">
            First Name*
            <input v-model="lastName" type="text" class="box-aligment" />
          </label>
          <br />
          <label class="lable-inp gap">
            Middle Name*
            <input v-model="lastName" type="text" class="box-aligment" />
          </label>
        </div>
        <label class="lable-inp">
          Last Name*
          <input v-model="lastName" type="text" class="box-aligment" />
        </label>
        <div class="two-label">
          <label class="lable-inp gap">
            Date of birth*
            <input v-model="lastName" type="text" class="box-aligment" />
          </label>
          <br />
          <label class="lable-inp gap">
            Phone number*
            <input v-model="lastName" type="text" class="box-aligment" />
          </label>
        </div>
        <button class="account-setting-btn-update">update</button>
      </div>
      <!--  -->
      <div>
        <div class="circle-profile">IA</div>
        <div class="btn-div-circle-profile">
          <button class="btn-circle-profile">upload an image</button>
        </div>
      </div>
    </div>
    <div class="personal-info-div">
      <p class="account-setting-h">Personal info</p>
      <p>Update the information below to speed up the application process.</p>
      <div class="with-flex-info-div">
        <label class="lable-inp">
          SNN*
          <input
            v-model="lastName"
            type="text"
            class="box-aligment"
            placeholder="Enter Your Social Security Number"
          />
        </label>
        <div class="two-label">
          <label class="lable-inp gap">
            Driver license*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter Your Driver Licence Number"
            />
          </label>
          <br />
          <label class="lable-inp gap">
            Driver license State/Region*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Select State"
            />
          </label>
        </div>
        <label class="lable-inp about-me">
          About me*
          <input
            v-model="lastName"
            type="text"
            class="box-aligment"
            placeholder="Provide a short bio which will be used on your public profil"
          />
        </label>
        <p class="p-limit">Character limit: 0 / 1000</p>
        <button class="account-setting-btn-update">update</button>
      </div>
    </div>
    <div>
      <p class="account-setting-h">Residence history</p>
      <p>
        Information about your current and past homes. You can add up to 10
        different residences.
      </p>
      <p class="account-setting-h">Residence 1</p>
      <label class="switch-label sw-ma">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        Current Address
      </label>
      <div class="with-flex-info-div">
        <div class="two-label">
          <label class="lable-inp gap">
            Move in date*
            <input
              v-model="lastName"
              type="date"
              class="box-aligment"
              placeholder="Enter Your Driver Licence Number"
            />
          </label>
          <br />
          <label class="lable-inp gap">
            Move out date*
            <input
              v-model="lastName"
              type="date"
              class="box-aligment"
              placeholder="Select State"
            />
          </label>
        </div>
        <div class="two-label">
          <label class="lable-inp gap">
            Street address*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter address"
            />
          </label>
          <br />
          <label class="lable-inp gap">
            Unit/Ap.#*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Unit/Ap.#*"
            />
          </label>
        </div>
        <div class="two-label">
          <label class="lable-inp gap">
            Country*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter Your Country"
            />
          </label>
          <br />
          <label class="lable-inp gap">
            city*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter Your City"
            />
          </label>
        </div>
        <b-container class="bv-example-row">
          <b-row>
            <b-col
              ><label class="lable-inp">
                Zip*
                <input
                  v-model="lastName"
                  type="text"
                  class="box-aligment"
                  placeholder="Enter Zip"
                /> </label
            ></b-col>
            <b-col
              ><label class="lable-inp">
                State / region*
                <input
                  v-model="lastName"
                  type="text"
                  class="box-aligment"
                  placeholder="State/region"
                /> </label
            ></b-col>
            <b-col cols="6"
              ><label class="lable-inp">
                Monthly rent*
                <input
                  v-model="lastName"
                  type="text"
                  class="box-aligment"
                  placeholder="Enter Monthly rent"
                /> </label
            ></b-col>
          </b-row>
        </b-container>
      </div>
      <p class="account-setting-h">Landlord info</p>
      <div class="inp-div-margin-no-landlord">
        <input type="checkbox" />
        <span>No Landlord/Property manager</span>
      </div>
      <div class="with-flex-info-div">
        <div class="two-label">
          <label class="lable-inp gap">
            First Name*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter First Name"
            />
          </label>
          <br />
          <label class="lable-inp gap">
            Last Name*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter Last Name"
            />
          </label>
        </div>
        <div class="two-label">
          <label class="lable-inp gap">
            Email*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter Email"
            />
          </label>
          <br />
          <label class="lable-inp gap">
            Phone Number*
            <input v-model="lastName" type="text" class="box-aligment" />
          </label>
        </div>
      </div>
      <div class="add-residence">
        <span>+</span>
        Add residence
      </div>

      <div class="with-flex-info-div">
        <label class="lable-inp about-me">
          About me*
          <input
            v-model="lastName"
            type="text"
            class="box-aligment"
            placeholder="Provide a short bio which will be used on your public profil"
          />
        </label>
        <p class="p-limit">Character limit: 0 / 1000</p>
        <button class="account-setting-btn-update">update</button>
      </div>
    </div>
    <p class="account-setting-h">Pet information</p>
    <p>Add pets you'll be living with. You can add up to 10 pets.</p>
    <p class="account-setting-h">Pet 1</p>
    <div class="account-setting-div-flex">
      <div>
        <div class="two-label">
          <label class="lable-inp gap">
            Name*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter pet name"
            />
          </label>
          <br />
          <label class="lable-inp gap">
            Type*

            <select name="cars" id="cars" class="box-aligment">
              <option value="volvo">Dog</option>
              <option value="saab">Cat</option>
              <option value="opel">other</option>
            </select>
          </label>
        </div>
        <div class="two-label">
          <label class="lable-inp gap">
            Breed*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter Breed"
            />
          </label>
          <br />
          <label class="lable-inp gap">
            Weight (lbs)*
            <input v-model="lastName" type="text" class="box-aligment" />
          </label>
        </div>
        <div class="add-residence">
          <span>+</span>
          Add pet
        </div>
        <button class="account-setting-btn-update">update</button>
      </div>
      <!--  -->
      <div>
        <div>
          <img
            src="https://sdgs.by/dist/img/no_image.png"
            width="100px"
            alt=""
          />
        </div>
        <input type="file" name="" id="" />
      </div>
    </div>
    <div class="personal-info-div">
      <p class="account-setting-h">Employment information</p>
      <p>
        We recommend showing your employment history for the past 2 years. You
        can add up to 10 different positions.
      </p>
      <p class="account-setting-h">Employer 1</p>
      <label class="switch-label sw-ma">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <span class="currently-work-here">I current work here</span>
      </label>
      <div class="with-flex-info-div">
        <div class="two-label">
          <label class="lable-inp gap">
            Start Date*
            <input
              v-model="lastName"
              type="date"
              class="box-aligment"
              placeholder="Enter Your Driver Licence Number"
            />
          </label>
          <br />
          <label class="lable-inp gap">
            End Date*
            <input
              v-model="lastName"
              type="Date"
              class="box-aligment"
              placeholder="Select State"
            />
          </label>
        </div>
        <label class="lable-inp">
          Company Name*
          <input
            v-model="lastName"
            type="text"
            class="box-aligment"
            placeholder="Enter company name"
          />
        </label>
        <div class="two-label">
          <label class="lable-inp gap">
            Position/Title*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter position/title"
            />
          </label>
          <br />
          <label class="lable-inp gap">
            Monthly income*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter monthly income"
            />
          </label>
        </div>
        <div class="two-label">
          <label class="lable-inp gap">
            Street Address*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter address"
            />
          </label>
          <br />
          <label class="lable-inp gap">
            City*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter city"
            />
          </label>
        </div>
        <b-container class="bv-example-row">
          <b-row>
            <b-col cols="6"
              ><label class="lable-inp">
                Country*
                <select name="cars" id="cars" class="box-aligment">
                  <option value="volvo">USA</option>
                  <option value="saab">UK</option>
                  <option value="opel">KSA</option>
                </select>
              </label></b-col
            >
            <b-col
              ><label class="lable-inp">
                Zip*
                <input
                  v-model="lastName"
                  type="text"
                  class="box-aligment"
                  placeholder="Enter Zip"
                /> </label
            ></b-col>
            <b-col
              ><label class="lable-inp">
                State / region*
                <input
                  v-model="lastName"
                  type="text"
                  class="box-aligment"
                  placeholder="State/region"
                /> </label
            ></b-col>
          </b-row>
        </b-container>
        <div class="two-label">
          <label class="lable-inp gap">
            Office number*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter office number"
            />
          </label>
          <br />
          <!-- <label class="lable-inp gap">
            Monthly income*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter monthly income"
            />
          </label> -->
        </div>
        <div class="two-label">
          <label class="lable-inp gap">
            Work email*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter work email"
            />
          </label>
          <br />
          <label class="lable-inp gap">
            Work phone*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter work phone"
            />
          </label>
        </div>
        <p class="account-setting-h">Supervisor information</p>
        <div class="two-label">
          <label class="lable-inp gap">
            First Name*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter first name"
            />
          </label>
          <br />
          <label class="lable-inp gap">
            Last Name*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter last name"
            />
          </label>
        </div>
        <div class="two-label">
          <label class="lable-inp gap">
            Email*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter supervisor email"
            />
          </label>
          <br />
          <label class="lable-inp gap">
            Phone*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter supervisor phone"
            />
          </label>
        </div>
        <div class="add-residence">
          <span>+</span>
          Add an employer
        </div>

        <label class="lable-inp about-me">
          Additional employment or income details*
          <input
            v-model="lastName"
            type="text"
            class="box-aligment"
            placeholder="enter additional employment or income details"
          />
        </label>

        <p class="p-limit">Character limit: 0 / 5000</p>
        <button class="account-setting-btn-update">update</button>
      </div>
      <div class="br-line"></div>
      <p class="account-setting-h">Source 1</p>
      <p>
        Add any additional income sources. You can add up to 5 different
        sources.
      </p>
      <p class="account-setting-h">Employer 1</p>
      <!-- working -->
      <div class="with-flex-info-div">
        <div class="two-label">
          <label class="lable-inp gap">
            Income source*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter income source"
            />
          </label>
          <br />
          <label class="lable-inp gap">
            Monthly income*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter monthly income"
            />
          </label>
        </div>
        <div class="add-residence">
          <span>+</span>
          Add an income
        </div>
        <button class="account-setting-btn-update">update</button>
        <p class="account-setting-h">Vehicle information</p>
        <p>
          Add any vehicles you own. You can add up to 10 different vehicles.
        </p>
        <p class="account-setting-h">Vehicle 1</p>
        <div class="two-label">
          <label class="lable-inp gap">
            Type*
            <select name="cars" id="cars" class="box-aligment">
              <option value="volvo">Automobile</option>
              <option value="saab">Motorcycle</option>
              <option value="opel">Moped</option>
              <option value="opel">Truck</option>
              <option value="opel">Van</option>
            </select>
          </label>
          <br />
          <label class="lable-inp gap">
            Maker*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter make"
            />
          </label>
        </div>
        <div class="two-label">
          <label class="lable-inp gap">
            Model*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter model"
            />
          </label>
          <br />
          <label class="lable-inp gap">
            Year made*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter year"
            />
          </label>
        </div>
        <div class="two-label">
          <label class="lable-inp gap">
            Color*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter color"
            />
          </label>
          <br />
          <label class="lable-inp gap">
            Licence Plate #
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter licence plate #"
            />
          </label>
        </div>
        <div class="add-residence">
          <span>+</span>
          Add an income
        </div>
        <button class="account-setting-btn-update">update</button>
        <p class="account-setting-h">Emergency contact</p>
        <p>
          Provide details about the person you would like to be contacted in
          case of an emergency.
        </p>
        <p class="account-setting-h">Emergency Contact 1</p>
        <div class="two-label">
          <label class="lable-inp gap">
            First Name*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter first name"
            />
          </label>
          <br />
          <label class="lable-inp gap">
            Last Name*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter last name"
            />
          </label>
        </div>
        <div class="two-label">
          <label class="lable-inp gap">
            Email*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter email"
            />
          </label>
          <br />
          <label class="lable-inp gap">
            Phone Number*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter phone number"
            />
          </label>
        </div>
        <div class="two-label">
          <label class="lable-inp gap">
            Relationship*
            <input
              v-model="lastName"
              type="text"
              class="box-aligment"
              placeholder="Enter Relationship"
            />
          </label>
          <br />
        </div>

        <label class="lable-inp about-me">
          Details*
          <input
            v-model="lastName"
            type="text"
            class="box-aligment"
            placeholder="Provide any important information about emergencey contact"
          />
        </label>
        <div class="add-residence">
          <span>+</span>
          Add an emergencey contact
        </div>

        <p class="p-limit">Character limit: 0 / 200</p>
        <button class="account-setting-btn-update">update</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RenterSetting",
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
  border-bottom: 2px solid #007bff;
  color: #007bff;
  font-size: 18px;
  font-weight: 800;
}

.div-security {
  background-color: #d6dae0;
  color: #536781;
  font-size: 19px;
}

.account-setting-h {
  color: #536781;
  font-size: 18px;
  font-weight: 800;
  margin-top: 25px;
  margin-bottom: 3px;
}

.account-setting-div-flex {
  display: flex;
  justify-content: space-evenly;
}

.circle-profile {
  color: white;
  background-color: #4ec79e;
  padding: 80px;
  border-radius: 100px;
  font-size: 22px;
  font-weight: 900;
}

.btn-circle-profile {
  background-color: #007bff;
  border-style: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

.btn-div-circle-profile {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.span-p-display {
  font-size: 18px;
  margin-left: 5px;
}

.information-div {
  display: inline-block;
}

.information-div-mr {
  margin-right: 160px;
}

.information-div-mrd {
  margin-right: 240px;
}

.account-setting-btn-update {
  margin: 20px 0;
  border-style: none;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

.btn-change {
  border-style: none;
  color: #007bff;
  font-weight: 900;
}

.personal-info-div {
  border-top: 1px solid rgb(214, 213, 213);
  border-bottom: 1px solid rgb(214, 213, 213);
}

.with-flex-info-div {
  width: 68%;
}

.about-me {
  padding: 10px 0 35px 15px;
}

.p-limit {
  display: flex;
  justify-content: flex-end;
  font-size: 13px;
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

.inp-div-margin-no-landlord {
  padding-top: 10px;
  margin-bottom: 25px;
}

.inp-div-margin-no-landlord > span {
  margin-left: 2%;
  font-weight: 700;
}

.add-residence {
  font-size: 18px;
  color: #2196f3;
  margin-bottom: 20px;
}

.add-residence > span {
  font-weight: 900;
}

.currently-work-here {
  font-weight: 700;
  margin-left: 10px;
}

.br-line {
  border: 1px solid rgb(214, 213, 213);
}
</style>