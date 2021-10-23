<template>
  <div class="main-application">
    <div class="link-div-flex">
      <router-link to="./login">
        <p>DASHBOARD /</p>
      </router-link>
      <router-link to="./login">
        <p>HELP CENTER /</p>
      </router-link>
    </div>
    <div class="sub-header">
      <div>
        <p class="p-inline p-mr">Tickets</p>
        <p class="p-inline p-t"><span>0</span> Total</p>
        <select name="cars" id="cars" class="option-nav">
          <option value="volvo">Display All</option>
          <option value="opel">New</option>
          <option value="opel">In Review</option>
          <option value="opel">Resolved</option>
        </select>
      </div>
      <div>
        <router-link to="/application-invitation">
          <button class="btn-invitation">Visit Help Center</button>
        </router-link>
        <router-link to="helpchoose">
          <button class="btn-filter"> <b>+</b> Submit A Ticket</button>
        </router-link>
      </div>
    </div>
    <div class="aplication-sub-flex">
      <div class="application-width">
        <div class="btn-div">
          <img
            src="https://cdn.tenantcloud.com/builds/v37.7.25/web/images/shared/stubs/applications/empty-list.svg"
            alt=""
          />
        </div>
        <p class="center-p h-p">Nothing over here</p>
        <p class="center-p p-p">
          It seems that you have not submitted any tech support requests. Keep in mind that you can do it anytime when you need help :)
        </p>
        <p class="center-p p-v">submit a ticket</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerSupport",
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
  margin-right: 20px;
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
  margin-top: 20px;
}

.option-nav {
  border-style: none;
}

.application-width {
  width: 42%;
}
</style>