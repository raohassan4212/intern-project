<template>
  <div class="bg-img">
    <div class="nav-type">
      <img src="../assets/logo/logo.png" alt="" width="180" />

      <div>
        <!-- <router-link to="/sign-up"> -->
          <button class="nav-btn-sign-up">Log out</button>
        <!-- </router-link> -->
      </div>
    </div>

    <!-- step  1 -->

    <div v-if="step === '1'">
      <div class="sub-flex">
        <div>
          <h3 class="h3-occupied">Where do you want to live?</h3>
          <p class="p-occupied">
            Enter the city to let us find you the perfect fit among verified
            houses and apartment for rent.
          </p>
          <div class="y-n-main">
            <div class="yn-sub width-set">
              <div class="yes">
                <img
                  src="https://cdn.tenantcloud.com/builds/v37.6.21/web/images/shared/professional-category/cleaning.svg"
                  alt=""
                />
                <input
                  class="inp-radio"
                  style="height: 35px; width: 35px"
                  type="radio"
                />
              </div>
              Cleaning
            </div>
            <div class="yn-sub width-set">
              <div class="No">
                <img
                  src="https://cdn.tenantcloud.com/builds/v37.6.21/web/images/shared/professional-category/general-providers.svg"
                  alt=""
                />
                <input
                  class="inp-radio"
                  style="height: 35px; width: 35px"
                  type="radio"
                />
              </div>
              General providers
            </div>
            <div class="yn-sub width-set">
              <div class="No">
                <img
                  src="https://cdn.tenantcloud.com/builds/v37.6.21/web/images/shared/professional-category/handyman-repairs.svg"
                  alt=""
                />
                <input
                  class="inp-radio"
                  style="height: 35px; width: 35px"
                  type="radio"
                />
              </div>
              Handyman and Repair
            </div>
          </div>

          <div class="y-n-main">
            <div class="yn-sub width-set">
              <div class="yes">
                <img
                  src="https://cdn.tenantcloud.com/builds/v37.6.21/web/images/shared/professional-category/home-services.svg"
                  alt=""
                />
                <input
                  class="inp-radio"
                  style="height: 35px; width: 35px"
                  type="radio"
                />
              </div>
              Home services
            </div>
            <div class="yn-sub width-set">
              <div class="No">
                <img
                  src="https://cdn.tenantcloud.com/builds/v37.6.21/web/images/shared/professional-category/landlord-services.svg"
                  alt=""
                />
                <input
                  class="inp-radio"
                  style="height: 35px; width: 35px"
                  type="radio"
                />
              </div>
              Landlord services
            </div>

            <div class="yn-sub width-set">
              <div class="No">
                <img
                  src="https://cdn.tenantcloud.com/builds/v37.6.21/web/images/shared/professional-category/plumbing.svg"
                  alt=""
                />
                <input
                  class="inp-radio"
                  style="height: 35px; width: 35px"
                  type="radio"
                />
              </div>

              Plumbing
            </div>
          </div>
          <div class="other-btn-div">
            <button class="other-btn">other</button>
          </div>
        </div>
      </div>
    </div>

    <!-- step   2 -->

    <div v-if="step === '2'">
      <div class="sub-flex">
        <div>
          <h3 class="h3-occupied">Cleaning</h3>
          <p class="p-occupied">
            Select services you can provide. Use the 'Other' option if you can't find your service type.
          </p>
          <div class="main-chip-div">
            <div v-for="item in chips" class="chip">{{ item.chip }}</div>
          </div>
          <div class="btn-log-div">
            <button class="btn-log">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProServices",
  data() {
    return {
      step: "1",
      chips: [
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
    };
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
  flex-wrap: wrap;
}

.inp-radio {
  position: relative;
  top: 50px;
  left: 20px;
}

.flex-width {
  /* width: 600px; */
}

.yn-sub {
  text-align: center;
  color: black;
  font-weight: bold;
  font-size: 18px;
}

.width-set {
  width: 160px;
  margin-bottom: 30px;
}

.other-btn-div {
  display: flex;
  justify-content: center;
}

.other-btn {
  border-style: none;
  font-size: 22px;
  color: #007bff;
}

/* step 2 */

.main-chip-div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 100px;
  max-width: 700px;
  /* border: 1px solid red; */
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
</style>