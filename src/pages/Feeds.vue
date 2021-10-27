<template>
  <div>
    <div class="link-div-flex">
      <router-link to="./login">
        <p>DASHBOARD /</p>
      </router-link>
      <router-link to="./login">
        <p>FEED /</p>
      </router-link>
    </div>
    <div class="feed-img-div-flex">
      <img src="../assets/img/feeds-calender-icon.png" alt="" width="50px" />
      <p>WHAT'S NEW?</p>
    </div>
    <div class="feed-img-div-flex">
      <img src="../assets/img/feed-cloud-icon.png" alt="" width="50px" />
      <p class="feeds-p-line">Welcome to Vendr</p>
    </div>
    <div class="feed-div-paras">
      <p>
        Your personal cloud office for all your rental information. In this news
        feed you'll get real-time notifications so you don't miss important
        messages.
        <br />
        <br />
        <span class="feeds-paras-span">Let's get started with Vendr!</span>
        <br />
        <br />
        To start using Vendr: <br />
        - fill in your <span class="feeds-paras-span"> renter profile</span>
        <br />
        - set up <span class="feeds-paras-span"> search preferences</span>
        <br />
        -
        <span class="feeds-paras-span">
          connect your landlord/property manager </span
        >and <span class="feeds-paras-span"> pay online</span>
        <br />
        <br />
        If you have any questions, our support team is ready to help. <br />
        Submit a ticket using Support page
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feeds",
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

.feed-img-div-flex {
  display: flex;
  margin: 15px 20px;
}

.feed-img-div-flex > p {
  margin-top: 15px;
  margin: 15px 0 0 22px;
  font-weight: 900;
}

.feeds-p-line {
  font-size: 15px;
  color: #007bff;
}

.feed-div-paras {
  width: 50%;
  margin-left: 90px;
}

@media only screen and (max-width: 1240px) {
  .feed-div-paras {
    width: 100%;
  }
}

.feeds-paras-span {
  color: #007bff;
}
</style>