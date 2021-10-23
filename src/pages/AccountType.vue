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
      <div class="log-box-div">
        <p class="login-email">Account Type</p>

        <p class="p-information">
          Select the account type that suit you the best. Every account have
          different set of tools.
        </p>
        <label
          v-for="(item, i) in accountTypeFields"
          class="lable-inp"
          :key="i"
        >
          <span class="radio-span">
            <input
              class="inp-radio"
              type="radio"
              name="radio"
              :value="item.radioBtnVal"
              @change="onChange($event)"
            />
          </span>
          <span class="inline-span">
            <div class="b-text">
              <b>{{ item.title }}</b>
            </div>
            <div>{{ item.desc }}</div>
          </span>
        </label>
        <router-link :to="selectedAccountType">
          <div class="btn-log-div">
            <button class="btn-log" >
              Next
            </button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountType",
  data() {
    return {
      selectedAccountType: "",
      accountTypeFields: [
        {
          title: "Landlord",
          desc: "Accept rent online and manage rentals",
          radioBtnVal: "./landlord",
        },
        {
          title: "Tenant",
          desc: "Find a place and pay rent online",
          radioBtnVal: "./tenant-account",
        },
        {
          title: "Service Pro",
          desc: "Manage request from landlords and find new job",
          radioBtnVal: "/pro-services",
        },
      ],
    };
  },
  methods: {
    onChange(event) {
      var data = event.target.value;
      this.selectedAccountType = data;
      console.log(this.selectedAccountType);
    },
    nextPage(selectedValue) {},
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

.for-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 400px;
}

.log-box-div {
  width: 45%;
}

.login-email {
  font-size: 35px;
  font-weight: bolder;
  color: black;
  text-align: center;
}

.p-information {
  font-size: 20px;
  text-align: center;
}

.lable-inp {
  border: 2px solid lightgrey;
  width: 100%;
  border-radius: 6px;
  padding: 7px;
  padding-left: 15px;
  margin-bottom: 20px;
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

.inline-span {
  display: inline-block;
}

.radio-span {
  margin-right: 20px;
}

.inp-radio {
  position: relative;
  bottom: 7px;
}

.b-text {
  font-size: 15px;
}
</style>