<template>
  <div class="vacant-pro-main">
    <div>
      <button class="back-btn">Back</button>
    </div>
    <div class="sub-flex">
      <div class="flex-width">
        <h3 class="h3-occupied">Is this property occupied?</h3>
        <p class="p-occupied">
          If there are tenants moved in, click yes to add their tenancy details
          and setup recurring invoicing.
        </p>
        <div class="y-n-main">
          <div class="yn-sub">
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
          <div class="yn-sub">
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
</template>

<script>
export default {
  name: "PropertyOccupied",
};
</script>

<style scoped>
.vacant-pro-main {
  background-image: url("../assets/img/bg01.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.sub-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 230px;
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
</style>