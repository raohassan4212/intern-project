<template>
  <div>
    <div class="link-div-flex">
      <router-link to="./login">
        <p>DASHBOARD /</p>
      </router-link>
      <router-link to="./login">
        <p>HELP CENTER/</p>
      </router-link>
      <router-link to="./login">
        <p>CHOOSE/</p>
      </router-link>
      <router-link to="./login">
        <p>CATEGORY/</p>
      </router-link>
      <router-link to="./login">
        <p>MY RENTAL/</p>
      </router-link>
    </div>
    <div class="choose-flex">
      <div>
        <p class="choose-heading">Contact the Vendr Team</p>
        <p class="choose-para">Please, select the category.</p>
      </div>
    </div>
    <div class="label-p-flex">
      <label class="label-spans h-lable">
        <span class="circle-h">My rental</span>
      </label>
      <label class="label-spans">
        <span class="circle-span"></span>
        <span class="circle-p">Rental Information</span>
      </label>
      <label class="label-spans">
        <span class="circle-span"></span>
        <span class="circle-p">Maintenance</span>
      </label>
      <label class="label-spans">
        <span class="circle-span"></span>
        <span class="circle-p">Renters Insurance</span>
      </label>
      <label class="label-spans">
        <span class="circle-span"></span>
        <span class="circle-p">Find my perfect home</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpCircleOption",
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

.choose-flex {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.choose-heading {
  font-size: 28px;
  font-weight: 900;
  color: #536781;
}

.choose-para {
  text-align: center;
  margin-top: -10px;
  color: #536781;
  font-weight: 400;
  font-size: 19px;
}

.circle-span {
  border: 2px solid green;
  padding: 2px 10px;
  border-radius: 30px;
  margin-right: 10px;
}

.circle-p {
  font-size: 14px;
  color: black;
}

.label-spans {
  width: 80%;
  padding: 20px;
  border-radius: 6px;
}
.label-spans:hover {
  background-color: #dae2ec;
}

.label-p-flex {
  padding-left: 10%;
  margin-top: 25px;
}

.h-lable {
    background-color: #dae2ec;
}

.circle-h {
    color: #536781;
    font-size: 22px;
    font-weight: 900;
}
</style>