<template>
  <div class="bg-img">
    <div>
      <button class="back-btn">Back</button>
    </div>
    <div class="for-flex">
      <div>
        <h3 class="h3-occupied">What's included?</h3>
        <p class="p-occupied">Select the basic property amenities below.</p>
        <div class="lable-main">
          <label class="lable-inp">
            Parking*
            <select name="cars" id="cars" class="box-aligment">
              <option value="volvo">Parking</option>
              <option value="saab">Single family</option>
              <option value="opel">Multi Family</option>
            </select>
          </label>

          <label class="lable-inp">
            Laundry*
            <select name="cars" id="cars" class="box-aligment">
              <option value="volvo">Laundry</option>
              <option value="saab">Single family</option>
              <option value="opel">Multi Family</option>
            </select>
          </label>

          <label class="lable-inp">
            Air Conditioning*
            <select name="cars" id="cars" class="box-aligment">
              <option value="volvo">Air Conditioning</option>
              <option value="saab">Single family</option>
              <option value="opel">Multi Family</option>
            </select>
          </label>
        </div>

        <div class="btn-log-div">
          <button class="btn-log">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhatInclude",
};
</script>

<style scoped>
.bg-img {
  background-image: url("../assets/img/bg01.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.for-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 190px;
  
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

.lable-main {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin-bottom: 40px;
}

.lable-inp {
  border: 2px solid lightgrey;
  /* width: 50%; */
  border-radius: 6px;
  padding: 7px;
  padding-left: 15px;
  margin-bottom: 20px;
  font-size: 12px;
  color: black;
  margin-right: 20px;
}

.btn-log-div {
  display: flex;
  justify-content: center;
}

.btn-log {
  width: 40%;
  border-style: none;
  border: 2px solid #007bff;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  font-size: 18px;
  border-radius: 5px;
  padding: 10px 0;
}

</style>