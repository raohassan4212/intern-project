<template>
  <div class="bg-img">
    <div>
      <button class="back-btn">Back</button>
    </div>
    <div class="for-flex">
      <div>
        <h3 class="h3-l">about your listing.</h3>
        <label class="cover-label">
          cover photo <br />
          <div class="opa">
            <img
              width="600px"
              height="450px"
              src="https://sdgs.by/dist/img/no_image.png"
              alt=""
            />
          </div>
          <label for="upload"></label>
          <input type="file" name="upload" />
        </label>

        <p class="p-upload-text">
          Upload high-definition JPEG or PNG files to make the details stand
          out.
        </p>
        <div class="btn-log-div">
          <button class="btn-log">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Image",
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
  margin-top: 40px;
}

.opa {
  box-shadow: 0 0 10px grey;
  margin-top: 25px;
  margin-bottom: 15px;
}

.opa:hover {
  opacity: 0.8;
}

.h3-l {
  text-align: center;
  color: black;
}

.cover-label {
  font-weight: bold;
  color: black;
  margin-top: 60px;
}

.p-upload-text {
  margin-top: 15px;
  font-size: 14px;
  color: #6491c2;
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
</style>