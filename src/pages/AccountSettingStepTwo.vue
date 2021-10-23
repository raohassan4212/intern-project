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
      <div class="div-width div-security">Security</div>
    </div>
    <div class="div-auth">
      <p class="two-step-h">Two-Step Authentication</p>
      <p>
        Keep your account secure with a second authentication step. Learn more
      </p>
      <button class="btn-enable">enable</button>
    </div>
    <div class="login-session">
      <p class="two-step-h">Login Sessions</p>
      <p>
        Places where you're logged into TenantCloud. You can log out of all
        devices
      </p>
    </div>
    <table class="table-width">
      <tr >
        <th>LOCATION</th>
        <th>DEVICE</th>
        <th>IP ADDRESS</th>
        <th>LAST ACTIVITY</th>
      </tr>
      <tr class="tr">
        <td class="tds">Karachi, Sindh, Pakistan</td>
        <td class="tds">Chrome - Windows</td>
        <td class="tds">101.53.228.6</td>
        <td class="tds">Just now</td>
        <td class="tds">Current Session</td>
      </tr>
    </table>
    <p class="location-data-p">Location data provided by MaxMind</p>
  </div>
</template>

<script>
export default {
  name: "AccountSettingStepTwo",
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

.btn-enable {
  color: #007bff;
  border: 1px solid #007bff;
  padding: 8px 25px;
  font-size: 16px;
  border-radius: 5px;
  font-weight: 900;
}

.two-step-h {
  margin-top: 10px;
  font-size: 18px;
  margin-bottom: 4px;
  color: black;
  font-weight: 700;
}

.div-auth {
  border-bottom: 1px solid rgb(214, 213, 213);
  padding-bottom: 25px;
}

.login-session {
  padding: 25px 0;
  border-bottom: 1px solid rgb(214, 213, 213);
}

.table-width {
    width: 100%;
}

.tr {
    border-top: 1px solid rgb(214, 213, 213);
    border-bottom: 1px solid rgb(214, 213, 213); 
}

.tds {
    padding: 20px 0;
}

.location-data-p {
    margin-top: 20px;
}
</style>