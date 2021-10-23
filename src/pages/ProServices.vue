<template>
  <div class="bg-img">
    <div class="nav-type">
      <img src="../assets/logo/logo.png" alt="" width="180" />

      <div>
        <button class="nav-btn-sign-up">Log out</button>
      </div>
    </div>

    <!-- step  1 -->

    <div v-if="step === 1">
      <div class="sub-flex">
        <div>
          <h3 class="h3-occupied">Where do you want to live?</h3>
          <p class="p-occupied">
            Enter the city to let us find you the perfect fit among verified
            houses and apartment for rent.
          </p>
          <div class="y-n-main">
            <!--  -->

            <div
              v-for="(item, i) in fields"
              :key="i"
              v-on:click="getSelectedOption(item.sel)"
              class="yn-sub width-set"
            >
              <div class="yes">
                <img v-bind:src="item.icon" alt="" />
                <input
                  class="inp-radio"
                  style="height: 35px; width: 35px"
                  type="radio"
                />
              </div>
              {{ item.title }}
            </div>
          </div>

          <div class="other-btn-div">
            <button class="other-btn">other</button>
          </div>
        </div>
      </div>
    </div>

    <!-- step   2 -->

    <div v-if="step === 2">
      <div>
        <button class="back-btn" v-on:click="getBack">Back</button>
      </div>
      <div class="sub-flex">
        <div>
          <h3 class="h3-occupied">{{ fields[selected].title }}</h3>
          <p class="p-occupied">
            {{ fields[selected].desc }}
          </p>
          <MultiSelectChip
            :data="fields[selected].data"
            :change="handleClick"
          />
          <div class="btn-log-div">
            <button class="btn-log" v-on:click="saveChipValNext">Next</button>
          </div>
        </div>
      </div>
    </div>

    <!-- step  3 -->

    <div v-if="step === 3">
      <div>
        <button class="back-btn" v-on:click="getBack">Back</button>
      </div>
      <div class="sub-flex">
        <div class="flex-width">
          <h3 class="h3-occupied">Connect a landlord</h3>
          <p class="p-occupied">
            If you know a landlord already using TenantCloud, we'll send them an
            email invite to connect with you in the system. Once you are
            connected, you'll be able to receive tasks from them.
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
            <button class="btn-log" v-on:click="saveChipValNext">Next</button>
          </div>
        </div>
      </div>
    </div>

    <!-- step  4 -->

    <div v-if="step === 4">
      <div>
        <button class="back-btn" v-on:click="getBack">Back</button>
      </div>
      <div class="sub-flex">
        <div class="flex-width">
          <h3 class="h3-occupied">
            Would you like to setup a public Business profile?
          </h3>
          <p class="p-occupied">
            Create a free website to advertise your business! Share the link to
            your Business Profile and attract new customers.
          </p>
          <div class="y-n-main">
            <div class="yn-sub" v-on:click="saveChipValNext">
              <div class="yes">
                Y
                <input
                  class="inp-radio"
                  style="height: 35px; width: 35px"
                  type="radio"
                />
              </div>
              Yes
            </div>
            <div class="yn-sub" v-on:click="packageStep">
              <div class="No">
                N
                <input
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
    </div>

    <!-- step  5 -->

    <div v-if="step === 5">
      <div>
        <button class="back-btn" v-on:click="getBack">Back</button>
      </div>
      <div class="sub-flex">
        <div class="flex-width">
          <h3 class="h3-occupied">Your business name</h3>
          <p class="p-occupied">
            The name in your account will be displayed as your business name.
            You can update it here if you like.
          </p>
          <div class="two-label">
            <label class="lable-inp gap">
              First Name*
              <input v-model="lastName" type="text" class="box-aligment" />
            </label>
            <br />
            <label class="lable-inp gap">
              Last Name*
              <input v-model="lastName" type="text" class="box-aligment" />
            </label>
          </div>
          <div class="btn-log-div">
            <button class="btn-log" v-on:click="saveChipValNext">Next</button>
          </div>
        </div>
      </div>
    </div>

    <!-- step  9 -->

    <div v-if="step === 9">
      <div>
        <button class="back-btn" v-on:click="getBack">Back</button>
      </div>
      <div class="sub-flex">
        <div>
          <h3 class="h3-occupied">Well done :)</h3>
          <p class="p-occupied">
            You are all set up and can start using your account right away. You
            can upgrade your account to get the most of it.
          </p>
          <div class="card-main-div">
            <div class="card-div">
              <p class="free f">Free</p>
              <p class="price-month f">$0 <sub>/m</sub></p>

              <button class="btn-get-start">Get Started</button>

              <div class="div-height">
                <p class="main-t">Everything you get from Free</p>
                <p class="tr-c">Task Management</p>
                <p class="tr-c">Messenger</p>
                <p class="tr-c">Public Business Profile</p>
                <p class="tr-c">Task Payments (Debit and Credit)</p>
                <p class="tr-c">Task Payments (ACH)</p>
                <p class="tr-c">Email and Feed Notifications</p>
                <p class="tr-c">Full Data Export</p>
              </div>
            </div>

            <div class="card-div">
              <p class="free f">Starter</p>
              <p class="price-month f">$45 <sub>/m</sub></p>

              <button class="btn-get-start">Free trial</button>

              <div class="div-height">
                <p class="main-t">All the benefits of Free, and</p>
                <p class="tr-c">
                  Premium Leads <span class="soon">coming soon</span>
                </p>
                <p class="tr-c">
                  Zip Codes of Working Area
                  <span class="soon">coming soon</span>
                </p>
                <p class="tr-c">Leases</p>
                <p class="tr-c">
                  Task Board coming <span class="soon">coming soon</span>
                </p>
                <p class="tr-c">
                  Client Management Tools <span class="soon">coming soon</span>
                </p>
                <p class="tr-c">Google Calendar Sync</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- step  6 -->

    <div v-if="step === 6">
      <div>
        <button class="back-btn" v-on:click="getBack">Back</button>
      </div>
      <div class="sub-flex">
        <div class="flex-width">
          <h3 class="h3-occupied">Phone number and email</h3>
          <p class="p-occupied">
            Your email can be changed only in Preferences. Edit the contact
            phone number displayed publicly here.
          </p>
          <div>
            <div class="flex-publicly">
              <label class="lable-inp gap">
                Email*
                <input v-model="lastName" type="text" class="box-aligment" />
              </label>
              <label class="switch-label sw-ma">
                <!-- <b>Additional</b> <br /> -->
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
                Display publicly
              </label>
              <br />
              <label class="lable-inp gap">
                Phone*
                <input v-model="lastName" type="text" class="box-aligment" />
              </label>
              <label class="switch-label sw-ma">
                <!-- <b>Additional</b> <br /> -->
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
                Display publicly
              </label>
            </div>
          </div>
          <div class="btn-log-div">
            <button class="btn-log" v-on:click="saveChipValNext">Next</button>
          </div>
        </div>
      </div>
    </div>

    <!-- step  7 -->

    <div v-if="step === 7">
      <div>
        <button class="back-btn" v-on:click="getBack">Back</button>
      </div>
      <div class="sub-flex">
        <div>
          <h3 class="h3-occupied">Business address</h3>
          <p class="p-occupied">
            Please add your Business address and let customers know where you're
            located.
          </p>

          <div class="div-flex">
            <label class="lable-inp">
              Listing title*
              <input v-model="lastName" type="text" class="box-aligment" />
            </label>
          </div>

          <label class="label-margin">
            <input type="radio" />
            Show full address
          </label>
          <br />
          <label class="label-margin">
            <input type="radio" />
            Show city and state to customer
          </label>
          <div class="btn-log-div">
            <button class="btn-log" v-on:click="saveChipValNext">Next</button>
          </div>
        </div>
      </div>
    </div>

    <!-- step  8 -->

    <div v-if="step === 8">
      <div>
        <button class="back-btn" v-on:click="getBack">Back</button>
      </div>
      <div class="sub-flex">
        <div class="flex-width">
          <h3 class="h3-occupied">Website subdomain</h3>
          <p class="p-occupied">
            Choose a subdomain that is related to your business name. It will be
            part of you Business profile web address.
          </p>
          <div class="domain">
            <div>
              <p class="p-domain">Your free website address</p>
              <span class="span-domain">https://</span>
              <input
                class="inp-domain"
                type="text"
                name="subdomain"
                placeholder="My subdomain"
              />
              <span class="span-domain">.vendr.com</span>
            </div>
          </div>
          <div class="btn-log-div">
            <button class="btn-log" v-on:click="saveChipValNext">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MultiSelectChip from "../components/MultiSelectChip.vue";
export default {
  name: "ProServices",
  components: {
    MultiSelectChip,
  },
  data() {
    return {
      step: 1,
      selected: 0,
      email: "",
      fields: [
        {
          title: "Cleaning",
          icon: "https://cdn.tenantcloud.com/builds/v37.6.21/web/images/shared/professional-category/cleaning.svg",
          desc: "Select services you can provide. Use the 'Other' option if you can't find your service type.",
          sel: 0,
          data: [
            { chip: "Carpet Cleaning" },
            { chip: "Commercial Cleaning Services" },
            { chip: "Debris Removal" },
            { chip: "Declutter and Organization" },
            { chip: "Exterior Surface Power-washing" },
            { chip: "House Cleaning" },
            { chip: "Steam Cleaning" },
            { chip: "Window Cleaning" },
            { chip: "other" },
          ],
        },

        {
          title: "General providers",
          icon: "https://cdn.tenantcloud.com/builds/v37.6.21/web/images/shared/professional-category/general-providers.svg",
          desc: "Select services you can provide. Use the 'Other' option if you can't find your service type.",
          sel: 1,
          data: [
            { chip: "Accountants and CPA's" },
            { chip: "Appraiser" },
            { chip: "Architecture and Engineer" },
            { chip: "Bond" },
            { chip: "Cable and Communication Services" },
            { chip: "Cable/Satellite" },
            { chip: "City Services" },
            { chip: "City Taxes and Fees" },
            { chip: "Computer Solution" },
            { chip: "Electrical Services" },
            { chip: "Equipment" },
            { chip: "Escrow" },
            { chip: "Fire Protection/Extinguisher and Safety Equipment" },
            { chip: "Fire/Building Insurance" },
            { chip: "Flood" },
          ],
        },

        {
          title: "Handyman & Repair",
          icon: "https://cdn.tenantcloud.com/builds/v37.6.21/web/images/shared/professional-category/handyman-repairs.svg",
          desc: "Select services you can provide. Use the 'Other' option if you can't find your service type.",
          sel: 2,
          data: [
            { chip: "Flooring Contractors" },
            { chip: "General Contractor" },
            { chip: "Gutter and Drainage" },
            { chip: "Home Inspections" },
            { chip: "Masonry" },
            { chip: "Painting and Drywall" },
            { chip: "Repairs and Equipment" },
            { chip: "Roofing Contractor" },
            { chip: "other" },
          ],
        },

        {
          title: "Home services",
          icon: "https://cdn.tenantcloud.com/builds/v37.6.21/web/images/shared/professional-category/home-services.svg",
          desc: "Select services you can provide. Use the 'Other' option if you can't find your service type.",
          sel: 3,
          data: [
            { chip: "Appliance Installation" },
            { chip: "Appliance Repair" },
            { chip: "Cabinets and Refinishing" },
            { chip: "Electricians" },
            { chip: "Heating and A/C" },
            { chip: "Landscaping" },
            { chip: "Lawn moving" },
            { chip: "Looksmith" },
            { chip: "Pest Control" },
            { chip: "Security/Cameras/Surveillance " },
            { chip: "Snow Removal" },
            { chip: "other" },
          ],
        },

        {
          title: "Landlord services",
          icon: "https://cdn.tenantcloud.com/builds/v37.6.21/web/images/shared/professional-category/home-services.svg",
          desc: "Select services you can provide. Use the 'Other' option if you can't find your service type.",
          sel: 4,
          data: [
            { chip: "Eviction" },
            { chip: "Leasing Agents" },
            { chip: "Property Managment Services" },
            { chip: "Realtor" },
            { chip: "other" },
          ],
        },

        {
          title: "Landlord services",
          icon: "https://cdn.tenantcloud.com/builds/v37.6.21/web/images/shared/professional-category/home-services.svg",
          desc: "Select services you can provide. Use the 'Other' option if you can't find your service type.",
          sel: 5,
          data: [
            { chip: "Plumber and Leak Detection" },
            { chip: "Pool Services" },
            { chip: "Solar Heating" },
            { chip: "Sprinkler and sewer" },
            { chip: "Water Conditioning" },
            { chip: "other" },
          ],
        },
      ],
    };
  },
  methods: {
    getSelectedOption(val) {
      console.log(val);
      this.step = this.step + 1;
      this.selected = val;
    },

    getBack() {
      this.step = this.step - 1;
    },

    saveChipValNext() {
      this.step = this.step + 1;
    },

    packageStep() {
      this.step = 9;
    },

    handleClick(seChip) {
      console.log(seChip);
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

.No {
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

.y-n-main {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.inp-radio {
  position: relative;
  top: 50px;
  left: 20px;
}

.flex-width {
  width: 650px;
}

.yn-sub {
  text-align: center;
  color: black;
  font-weight: bold;
  font-size: 18px;
}

.yes:active {
  background-color: #007bff;
}

.width-set {
  width: 160px;
  margin: 0 90px;
  margin-bottom: 30px;
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

/* step 2 */

.btn-log-div {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.btn-log {
  width: 25%;
  border-style: none;
  border: 2px solid #007bff;
  background-color: #007bff;
  color: white;
  font-size: 18px;
  border-radius: 5px;
  padding: 10px 0;
}

.btn-log:active {
  background-color: #5ba4f1;
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

/* step 3 */

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

/* step  9*/

.card-main-div {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  margin-top: 70px;
  flex-wrap: wrap;
}

.card-div {
  width: 350px;
  margin-bottom: 100px;
}

.f {
  text-align: center;
}

.free {
  font-weight: bold;
  font-size: 22px;
  color: black;
}

.price-month {
  font-weight: bold;
  font-size: 45px;
  color: black;
}

.btn-get-start {
  width: 100%;
  border-style: none;
  background-color: #007bff;
  color: white;
  padding: 15px 10px;
  border-radius: 5px;
  font-weight: bold;
}

.main-t {
  color: #627d98;
  font-weight: bold;
  margin-top: 10px;
}

.tr-c {
  margin-bottom: 5px;
  color: black;
}

.div-height {
  height: 200px;
}

.soon {
  font-size: 12px;
  margin-left: 35px !important;
  color: #e1b35e !important;
  font-weight: bold;
}

/* step  6 */

.sw-ma {
  margin-left: 50px;
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

/* step  7 */

.div-flex {
  display: flex;
  justify-content: center;
}

.label-margin {
  margin-left: 20%;
}

/* "step 8" */

.domain {
  display: flex;
  justify-content: center;
  margin-bottom: 90px;
}

.span-domain {
  background-color: #dae2ec;
  padding: 10px 20px;
  color: #41a541;
}

.inp-domain {
  padding-left: 12px;
  border-style: none;
  width: 350px;
}

.inp-domain::placeholder {
  color: #70879d;
  font-size: 13px;
}

.p-domain {
  color: #70879d;
  font-size: 14px;
  font-weight: bold;
}

@media only screen and (max-width: 570px) {
.inp-domain {
  width: 40%;
}
}
</style>