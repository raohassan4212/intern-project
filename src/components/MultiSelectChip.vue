<template>
  <div class="main-chip-div">
    <div
      v-for="(item, i) in data"
      class="chip"
      :key="i"
      v-bind:class="{
        'active-chip': selectedChipValue.includes(i),
        chip: selectedChipValue.includes(i),
      }"
      v-on:click="showChipValue(i)"
    >
      {{ item.chip }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MultiSelectChip",
  props: ["data", "change"],
  data() {
    return {
      selectedChipValue: [],
      actualValue: [],
      show: false,
    };
  },

  methods: {
    showChipValue(val) {
      if (this.selectedChipValue.includes(val)) {
        let ind = this.selectedChipValue.findIndex((el) => el == val);
        this.selectedChipValue.splice(ind, 1);
        this.show = false;
      } else {
        this.selectedChipValue.push(val);
        console.log(val);
        this.show = true;
      }
      this.change(this.selectedChipValue);
    },
  },
};
</script>


<style scoped>
.main-chip-div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 100px;
  max-width: 700px;
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

.active-chip {
  color: white;
  border: 1px solid #2b742b;
  background-color: #2b742b;
}
</style>