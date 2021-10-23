<template>
  <div>
      <div class="link-div-flex">
        <router-link to="./login">
          <p>DASHBOARD /</p>
        </router-link>
        <router-link to="./login">
          <p>APPLICATION /</p>
        </router-link>
        <router-link to="./login">
          <p>INVITATIONS /</p>
        </router-link>
      </div>
    <div>
      <p class="p-inline p-mr">Application</p>
      <p class="p-inline p-t"><span>0</span> Total</p>
    </div>
    <div class="aplication-sub-flex">
      <div>
        <div class="btn-div">
          <img
            src="https://cdn.tenantcloud.com/builds/v37.7.25/web/images/shared/stubs/applications/empty-list.svg"
            alt=""
          />
        </div>
        <p class="center-p h-p">No new invitations</p>
        <p class="center-p p-p">
          You may receive the invitation to apply if the listing matches your preferences at any time. Keep watching.
        </p>
        <p class="center-p p-v">update preferences</p>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApplicationInvitation",
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

.p-mr:hover {
  color: #007bff;
}

.p-t {
  color: #102a43;
  font-size: 13px;
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
    color: #627D98;
    font-weight: bold;
}

.p-v {
    font-size: 13px;
    color: #007bff;
    font-weight: bold;
}
</style>