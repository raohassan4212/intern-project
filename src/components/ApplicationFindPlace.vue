<template>
  <div>
    <div class="link-div-flex">
      <router-link to="./login">
        <p>DASHBOARD /</p>
      </router-link>
      <router-link to="./login">
        <p>APPLICATIONS /</p>
      </router-link>
      <router-link to="./login">
        <p>FIND A PLACE</p>
      </router-link>
    </div>

    <div class="map-div-flex">
      <div class="dash-margin">
        <input type="text" name="" id="" class="inp-dashboard" />
        <button class="btn-dashboard">Favorites</button>
        <button class="btn-dashboard">Filters</button>
        <div class="no-match">
          <p class="heading-no-match">No matching results</p>
          <p class="para-no-match">Try changing your search criteria.</p>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d924042.6696376061!2d67.9598194!3d25.2186743!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1634209428485!5m2!1sen!2s"
          width="500"
          height="750"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApplicationFindPlace",
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

.inp-dashboard {
  border-style: none;
  border: 1px solid #007bff;
  border-radius: 6px;
  width: 210px;
  height: 35px;
  margin-right: 15px;
}

.btn-dashboard {
  border-style: none;
  border: 1px solid #007bff;
  color: #007bff;
  /* font-weight: bold; */
  background-color: #007bff;
  color: white;
  height: 35px;
  border-radius: 6px;
  margin-right: 15px;
  /* margin-bottom: 10px; */
}

.dash-margin {
  margin-top: 30px;
  margin-left: 30px;
  margin-bottom: 20px;
}

.map-div-flex {
  display: flex;
  flex-wrap: wrap;
}

.no-match {
  margin-top: 400px;
  margin-left: 40px;
}

.heading-no-match {
  font-size: 26px;
  color: black;
  font-weight: bold;
}

.para-no-match {
  color: black;
}
</style>