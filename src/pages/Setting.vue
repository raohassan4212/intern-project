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
      <p class="p-inline p-mr">Settings</p>
    </div>
    <div>
      <router-link to="account-setting">
        <div class="setting-div">Account Setting</div>
      </router-link>
      <div class="setting-div">Renter Profile</div>
      <div class="setting-div">Online Payment</div>
      <div class="setting-div">File Manager</div>
      <div class="setting-div log-color">Log Out</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Setting",
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

.setting-div {
  margin-top: 30px;
  font-size: 18px;
  color: #536781;
  font-weight: 900;
}

.log-color {
  color: #911111;
}
</style>