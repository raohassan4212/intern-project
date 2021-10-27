<template>
  <div>
    <div class="link-div-flex">
      <router-link to="./login">
        <p>DASHBOARD /</p>
      </router-link>
      <router-link to="./login">
        <p>SETTINGS</p>
      </router-link>
    </div>
    <div>
      <p class="p-inline p-mr">Account Settings</p>
    </div>
    <div class="nav-type-div">
      <div class="div-width div-profile">Profile</div>

      <div class="div-width div-security">
        <router-link to="account-setting-step-two"> <div>Security</div> </router-link>
      </div>
    </div>
    <p class="account-setting-h">Profile details</p>
    <p>Your profile is visible to your connected users.</p>

    <div class="account-setting-div-flex">
      <div class="debug-margin">
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
        <label class="lable-inp">
          Company Name*
          <input v-model="lastName" type="text" class="box-aligment" />
        </label>
        <div>
          <input type="checkbox" />
          <span class="span-p-display">Display as a company</span>
        </div>
        <button class="account-setting-btn-update">update</button>
        <div class="account-setting-div-borser">
          <div class="information-div information-div-mr">
            <p class="email-p">Email address</p>
            <br />
            <p>Your email is ibrahimalvi122@gmail.com</p>
          </div>
          <button class="information-div btn-change">change</button>
        </div>
        <div class="account-setting-div-borser">
          <div class="information-div information-div-mrd">
            <p class="email-p">Password</p>
            <br />
            <p>Last updated on Oct 22, 2021</p>
          </div>
          <button class="information-div btn-change">change</button>
        </div>
        <div class="additional-settin-p-div">
          <p class="email-p">Additional settings</p>
          <br />
          <p>Customize the additional settings of your account.</p>
        </div>
        <b-container class="bv-example-row">
          <b-row>
            <b-col cols="8">
              <label class="lable-inp">
                Time Zone*
                <select name="cars" id="cars" class="box-aligment">
                  <option value="volvo">
                    +00:00 East Greenland Time - ...
                  </option>
                  <option value="saab">Single family</option>
                  <option value="opel">Multi Family</option>
                </select>
              </label>
            </b-col>
            <b-col>
              <label class="lable-inp">
                Currency*
                <select name="cars" id="cars" class="box-aligment">
                  <option value="volvo">$ US Dollar</option>
                  <option value="saab">Single family</option>
                  <option value="opel">Multi Family</option>
                </select>
              </label>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4"
              ><label class="lable-inp">
                Date format*
                <select name="cars" id="cars" class="box-aligment">
                  <option value="volvo">dd/mm/yyyy</option>
                  <option value="saab">mm/dd/yyyy</option>
                </select>
              </label></b-col
            >
            <b-col cols="4"
              ><label class="lable-inp">
                Time format*
                <select name="cars" id="cars" class="box-aligment">
                  <option value="volvo">24 hour</option>
                  <option value="saab">AM/PM</option>
                </select>
              </label></b-col
            >
            <b-col
              ><label class="lable-inp">
                Measurement*
                <select name="cars" id="cars" class="box-aligment">
                  <option value="volvo">imperial</option>
                  <option value="saab">metric</option>
                </select>
              </label></b-col
            >
          </b-row>
          <b-row>
            <b-col cols="8"
              ><label class="lable-inp">
                Parking*
                <select name="cars" id="cars" class="box-aligment">
                  <option value="volvo">Parking</option>
                  <option value="saab">Single family</option>
                  <option value="opel">Multi Family</option>
                </select>
              </label></b-col
            >
          </b-row>
        </b-container>
        <div class="information-div information-div-mr">
          <p class="email-p">Delete account</p>
          <br />
          <p>
            Please note that all of the information will be permanently deleted.
          </p>
          <button class="delete-btn-setting-account">delete account</button>
        </div>
      </div>
      <div class="profile-display-none">
        <div class="circle-profile">IA</div>
        <div class="btn-div-circle-profile">
          <button class="btn-circle-profile">upload an image</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountSetting",
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
  flex-wrap: wrap;
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

.email-p {
  font-size: 18px;
  font-weight: 900;
  margin-bottom: -8px;
}

.account-setting-div-borser {
  border-top: 1px solid rgb(214, 213, 213);
  margin-bottom: 20px;
}

.additional-settin-p-div {
  border-top: 1px solid rgb(214, 213, 213);
}

.delete-btn-setting-account {
  border-style: none;
  background-color: #d64545;
  color: white;
  padding: 8px 25px;
  border-radius: 5px;
}

@media only screen and (max-width: 615px) {
  .profile-display-none {
    display: none;
  }
}

@media only screen and (max-width: 720px) {
  .debug-margin {
    margin: 0 40px;
  }
}

@media only screen and (max-width: 405px) {
  .debug-margin {
    margin-left: 30px;
  }
}


</style>