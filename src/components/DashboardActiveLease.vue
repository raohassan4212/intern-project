<template>
  <div>
    <div class="link-div-flex">
      <router-link to="./login">
        <p>DASHBOARD</p>
      </router-link>
    </div>
    <div>
      <p class="p-inline p-mr">No Active Lease</p>
    </div>
    <div class="aplication-sub-flex">
      <div class="application-width">
        <p class="center-p h-p">No active lease</p>
        <p class="center-p p-p">
          Your landlord still hasn't shared the lease with you. Please, contact
          your landlord and ask to share the lease with you.
        </p>
      </div>
    </div>
    <div class="aplication-sub-flex">
      <div class="application-width">
        <p class="center-p h-p">Looking for a new home?</p>
        <p class="center-p p-p">
          If you want to rent a new home, start looking from thousands of
          Vendr listings and apply online using your Renters Profile.
        </p>
        <div class="btn-find-new">
          <router-link to="./application/findplace">
            <button>Find new</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardActiveLease",
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

.aplication-sub-flex {
  display: flex;
  justify-content: center;
  margin-top: 15%;
}

.center-p {
  text-align: center;
}

.h-p {
  font-weight: bold;
  font-size: 16px;
  color: #627d98;
  margin-bottom: 15px;
}

.p-p {
  font-size: 13px;
  font-weight: bold;
}

.application-width {
  width: 50%;
}

.btn-find-new {
  display: flex;
  justify-content: center;
  margin-top: 35px;
}

.btn-find-new button {
  border-style: none;
  color: #007bff;
  border: 1px solid #007bff;
  padding: 5px 25px;
  border-radius: 5px;
  font-weight: bold;
}
</style>