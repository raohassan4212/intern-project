<template>
  <div class="bg-img">
    <div>
      <button class="back-btn">Back</button>
    </div>
    <div class="for-flex">
      <div class="for-width">
        <h3 class="h3-occupied">Free Listing Website</h3>
        <p class="p-occupied">
          Choose a subdomain name for your free Listing Website. All your
          listings will be posted there.
        </p>
        <div class="domain">
          <div>
            <p class="p-domain">Your free website address</p>
            <span class="span-domain">https://</span>
            <input class="inp-domain" type="text" name="subdomain" placeholder="My subdomain" />
            <span class="span-domain">.vendr.com</span>
          </div>
        </div>
        <div class="btn-log-div">
          <button class="btn-log">Continue</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FreeWebsite",
};
</script>

<style scoped>
.bg-img {
  background-image: url("../assets/img/bg01.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
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
  top: 30px;
  left: 80px;
}

.for-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 190px;
}

.for-width {
    max-width: 700px;
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

.domain {
  display: flex;
  justify-content: center;
}

.span-domain {
    background-color: #DAE2EC;
    padding: 10px 20px;
    color: #41a541;
}

.inp-domain {
    padding-left: 12px;
    border-style: none;
}

.inp-domain::placeholder {
    color: #70879D;
    font-size: 13px;
}

.p-domain {
    color: #70879D;
    font-size: 14px;
    font-weight: bold;
}

.btn-log-div {
  display: flex;
  justify-content: center;
  margin-top: 70px;
}

.btn-log {
  width: 25%;
  border-style: none;
  border: 2px solid #007bff;
  background-color: #007bff;
  color: white;
  font-size: 18px;
  border-radius: 5px;
  padding: 10px 0;
}
</style>