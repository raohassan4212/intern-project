<template>
  <div class="bg-img">
    <div>
      <button class="back-btn">Back</button>
    </div>
    <div class="for-flex">
      <div>
        <h3 class="h3-occupied">What's included?</h3>
        <p class="p-occupied">
          Select the property features and amenities below.
        </p>
        <div class="main-chip-div">
          <div v-for="item in chips" class="chip">{{ item.chip }}</div>
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
  name: "ChipInclude",
  data() {
    return {
      chips: [
        { chip: "Alarm" },
        { chip: "Furnished" },
        { chip: "Microwave" },
        { chip: "Refrigerator" },
        { chip: "Renovated" },
        { chip: "Hardwood floor" },
        { chip: "Oven/range" },
        { chip: "Fireplace" },
        { chip: "Dishwasher" },
        { chip: "Walk-in closets" },
        { chip: "Balcony, deck, patio" },
        { chip: "Cable ready" },
        { chip: "Internet" },
        { chip: "Fenced yard" },
        { chip: "Central Heating" },
        { chip: "Tile" },
        { chip: "Carpet" },
        { chip: "Stainless Steel Appliance" },
        { chip: "Garbage Disposal" },
        { chip: "Telephone" },
        { chip: "Storage" },
        { chip: "Towels" },
        { chip: "Stove" },
        { chip: "Window Coverings" },
        { chip: "Vaccum Cleaner" },
        { chip: "Ceiling Fans" },
        { chip: "Yard" },
      ],
    };
  },
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
  margin-top: 110px;
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

.main-chip-div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 100px;
  max-width: 700px;
  /* border: 1px solid red; */
}

.chip {
  margin: 10px 15px;
  color: #41a541;
  border: 1px solid #41a541;
  padding: 5px 10px;
  border-radius: 19px;
}

.chip:hover {
  color: white;
  background-color: #41a541;
}

.btn-log-div {
  display: flex;
  justify-content: center;
  margin-top: 30px;
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