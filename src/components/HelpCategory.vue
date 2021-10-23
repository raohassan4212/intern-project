<template>
  <div>
    <div class="link-div-flex">
      <router-link to="./login">
        <p>DASHBOARD /</p>
      </router-link>
      <router-link to="./login">
        <p>HELP CENTER/</p>
      </router-link>
      <router-link to="./login">
        <p>CHOOSE/</p>
      </router-link>
      <router-link to="./login">
        <p>CATEGORY/</p>
      </router-link>
    </div>
    <div class="choose-flex">
      <div>
        <p class="choose-heading">Contact the Vendr Team</p>
        <p class="choose-para">Please, select the category.</p>
      </div>
    </div>
    <div class="label-p-flex">
      <label
        v-for="(item, i) in circleOption"
        class="label-spans"
        :key="i"
        v-on:click="togo(item)"
      >
        <span class="circle-span"></span>
        <span class="circle-p">{{ item.val }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpCategory",
  data() {
    return {
      circleOption: [
        {
          val: "Pay rent",
          url: "help-payrents-question",
          valChild: {
            heading: "Contact the Vendr Team",
            subHeading: "Read some articles or create a ticket.",
            para: "We found some articles that may help you to solve the issue. If these article are not helpful, please continue to create a ticket.",
            line1: "How do I pay rent online?",
            line2: "How do I pay rent in advance?",
            line3: "Can I pay rent with credit card?",
            line4: "Where can I see my payment history?",
            btn1: "I FOUND THE ANSWER",
            btn2: "COUNTINUE TO CREATE TICKET0"
          },
        },
        { val: "Online payments settings", url: "helpcircleoption" },
        { val: "My rental", url: "helpcircleoption" },
        { val: "Connection / Messages", url: "help-payrents-question" },
        { val: "Application", url: "help-payrents-question" },
        { val: "Settings", url: "helpcircleoption" },
        { val: "Other", url: "help-payrents-question" },
      ],
    };
  },
  methods: {
    togo(item) {
      console.log(item.url);
      this.$router.push({path: item.url,params: {i:item.valChild}});
    },
  },
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

.choose-flex {
  display: flex;
  justify-content: center;
  margin-top: 35px;
}

.choose-heading {
  font-size: 28px;
  font-weight: 900;
  color: #536781;
}

.choose-para {
  text-align: center;
  margin-top: -10px;
  color: #536781;
  font-weight: 400;
  font-size: 19px;
}

.circle-span {
  border: 2px solid green;
  padding: 2px 10px;
  border-radius: 30px;
  margin-right: 10px;
}

.circle-p {
  font-size: 18px;
  font-weight: 900;
  color: #536781;
}

.label-spans {
  width: 400px;
  padding: 20px;
  border-radius: 6px;
}
.label-spans:hover {
  background-color: #dae2ec;
}

.label-p-flex {
  padding-left: 10%;
  margin-top: 25px;
}
</style>