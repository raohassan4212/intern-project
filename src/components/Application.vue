<template>
  <div class="main-application">
      <div class="link-div-flex">
        <router-link to="./login">
          <p>DASHBOARD /</p>
        </router-link>
        <router-link to="./login">
          <p>APPLICATION /</p>
        </router-link>
      </div>
    <div class="sub-header">
      <div>
        <p class="p-inline p-mr">Application</p>
        <p class="p-inline p-t"><span>0</span> Total</p>
      </div>
      <div>
        <router-link to="/application-invitation">
          <button class="btn-invitation">invitations to apply</button>
        </router-link>
        <router-link to="/application/findplace">
          <button class="btn-filter">find a place</button>
        </router-link>
      </div>
    </div>
    <div class="aplication-sub-flex">
      <div>
        <div class="btn-div">
          <img
            src="https://cdn.tenantcloud.com/builds/v37.7.25/web/images/shared/stubs/applications/empty-list.svg"
            alt=""
          />
        </div>
        <p class="center-p h-p">Looking for a place?</p>
        <p class="center-p p-p">
          Start right here! All search results are tailored to fit your Renter
          Profile
        </p>
        <p class="center-p p-v">view my profile</p>
        <div class="btn-div">
          <router-link to="/application/findplace">
            <button class="btn-search-profile">Seacrh new places</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApplicationFindPlace from "../components/ApplicationFindPlace.vue";
export default {
  name: "Application",
  components: {
    ApplicationFindPlace,
  },
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

.main-application {
  width: 100%;
}

.sub-header {
  display: flex;
  justify-content: space-between;
}

.p-inline {
  display: inline-block;
}

.p-mr {
  margin-right: 20px;
  font-size: 23px;
  color: #102a43;
}

.p-mr:hover {
  color: #007bff;
}

.p-t {
  color: #102a43;
  font-size: 13px;
}

.btn-invitation {
  border-style: none;
  font-size: 14px;
  padding: 6px 18px;

  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
}

.btn-invitation:hover {
  color: #686fdb;
}

.btn-filter {
  border-style: none;
  font-size: 14px;
  padding: 6px 18px;
  color: white;
  border-radius: 3px;
  background-color: #007bff;
}

.btn-filter:hover {
  background-color: #5aa6f7;
}

.aplication-sub-flex {
  display: flex;
  justify-content: center;
  margin-top: 15%;
}

.center-p {
  text-align: center;
}

.btn-div {
  display: flex;
  justify-content: center;
}

.btn-search-profile {
  border-style: none;
  background-color: #007bff;
  color: white;
  padding: 6px 18px;
  border-radius: 5px;
}

.btn-search-profile:hover {
  background-color: #5aa6f7;
}

.h-p {
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 0px;
}

.p-p {
  font-size: 13px;
  color: #627d98;
  font-weight: bold;
}

.p-v {
  font-size: 13px;
  color: #007bff;
  font-weight: bold;
}
</style>