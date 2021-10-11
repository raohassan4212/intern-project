<template>
  <div class="bg-img">
    <div class="nav-type">
      <img src="../assets/logo/logo.png" alt="" width="180" />

      <div>
        <router-link to="/sign-up">
          <button class="nav-btn-sign-up">Log out</button>
        </router-link>
      </div>
    </div>
    <div class="for-flex">
      <div>
        <div class="img-thum">
          <img
            src="https://cdn.tenantcloud.com/builds/v37.6.11/web/images/shared/stubs/success/well-done.svg"
            alt=""
          />
        </div>
        <h3 class="h3-occupied">Congratulations!</h3>
        <p class="p-occupied">
          You're all set, your free plan includes these awesome features
        </p>
        <div class="desc-div">
          <div class="div-height">
            <p class="main-t">Everything you get from Free</p>
            <p class="tr-c">Listings</p>
            <p class="tr-c">Scheduling</p>
            <p class="tr-c">Applications</p>
            <p class="tr-c">Screenings</p>
            <p class="tr-c">Rent Payments (Debit and Credit)</p>
            <p class="tr-c">Maintenance Management</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Congratulation",
};
</script>

<style scoped>
.nav-type {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  margin-bottom: 5%;
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

.for-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.h3-occupied {
  font-size: px;
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

.img-thum {
  display: flex;
  justify-content: center;
}

.div-height {
  height: 200px;
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

.desc-div {
    display: flex;
    justify-content: center;
}
</style>