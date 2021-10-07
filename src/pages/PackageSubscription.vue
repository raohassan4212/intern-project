<template>
  <div class="bg-img">
    <div class="nav-type">
      <img src="../assets/logo/logo.png" alt="" width="180" />

      <div>
        <router-link to="/sign-up">
          <button class="nav-btn-sign-up sign-up-btn">Log out</button>
        </router-link>
      </div>
    </div>

    <!-- <div>
      <button class="back-btn">Back</button>
    </div> -->

    <div class="package-flex">
      <div class="sub-flex">
        <h2 class="h2-done">Well done :)</h2>

        <p class="p-done">
          You are all set up and can start managing your properties right away.
          You can upgrade your account to get the most of it.
        </p>

        <div class="card-main-div">
          <div class="card-div">
            <p class="free f">Free</p>
            <p class="price-month f">$0 <sub>/m</sub></p>

            <button class="btn-get-start">Get Started</button>

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

          <div class="card-div">
            <p class="free f">Starter</p>
            <p class="price-month f">$15 <sub>/m</sub></p>

            <button class="btn-get-start">Free trial</button>

            <div class="div-height">
                <p class="main-t">Everything in Free, plus</p>
                <p class="tr-c">Premium Leads</p>
                <p class="tr-c">Leases</p>
                <p class="tr-c">Tax Reports and More</p>
                <p class="tr-c">Vendor Network</p>
                <p class="tr-c">Vendor Management Tools</p>
                
            </div>
          </div>

          <div class="card-div">
            <p class="free f">Free</p>
            <p class="price-month f">$50 <sub>/m</sub></p>

            <button class="btn-get-start">Free trial</button>

            <div class="div-height">
                <p class="main-t">Everything in Starter, plus</p>
                <p class="tr-c">Individual Owner Portal</p>
                <p class="tr-c">Fees and Distribution Tools</p>
                <p class="tr-c">Tenant Management</p>
                <p class="tr-c">Management Fees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PackageSubscription",
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
  margin-bottom: 5%;
}

.nav-btn-sign-up {
  width: 89px;
  height: 33px;
  margin-left: 20px;
  border-radius: 6px;
  border-style: none;
  font-weight: bold;
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
  color: #007bff;
}

.package-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 400px;
}

.sub-flex {
  /* width: 75%; */
}

.h2-done {
  text-align: center;
}

.p-done {
  text-align: center;
  font-size: 20px;
}

.card-main-div {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  margin-top: 70px;
  flex-wrap: wrap;
}

.card-div {
    width: 350px;
    margin-bottom: 40px;
}

.f {
    text-align: center;
}

.free {
  font-weight: bold;
  font-size: 22px;
  color: black;
}

.price-month {
  font-weight: bold;
  font-size: 45px;
  color: black;
}

.btn-get-start {
    width: 100%;
    border-style: none;
    background-color: #007bff;
    color: white;
    padding: 15px 10px;
    border-radius: 5px;
    font-weight: bold;
}

.main-t {
    color: #627D98;
    font-weight: bold;
    margin-top: 10px;
}

.tr-c {
    margin-bottom: 5px;
    color: black;
}


.div-height {
    height: 200px;
}
</style>