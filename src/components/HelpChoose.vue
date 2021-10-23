<template>
  <div>
    <div class="link-div-flex">
      <router-link to="./login">
        <p>DASHBOARD /</p>
      </router-link>
      <router-link to="./login">
        <p>ACCOUNTING /</p>
      </router-link>
    </div>
    <div class="choose-flex">
      <div>
        <p class="choose-heading">Contact the Vendr Team</p>
        <p class="choose-para">Please, select the type of the ticket.</p>
      </div>
    </div>
    <div class="choose-flex-sub">
        <router-link to="./helpcategory">
      <div class="choose-flex-div">
        <div class="choose-img-flex">
          <img
            src="https://cdn.tenantcloud.com/builds/v37.7.25/web/images/shared/feedback/feedback-add-icon-type-1.svg"
            alt=""
          />
        </div>
        <div class="choose-para-div">
          <p class="choose-sub-head">Need support</p>
          <p>
            If you caught up in a technical issue and need our help, do reach
            out to us.
          </p>
        </div>
      </div>
      </router-link>
      <div>
        <p class="or-p">Or</p>
      </div>
      <div class="choose-flex-div">
        <div class="choose-img-flex">
          <img
            src="https://cdn.tenantcloud.com/builds/v37.7.25/web/images/shared/feedback/feedback-add-icon-type-5.svg"
            alt=""
          />
        </div>
        <div class="choose-para-div">
          <p class="choose-sub-head">Have an idea</p>
          <p>
            If you have any feature request, idea or suggestion, please click here.
          </p>
        </div>
      </div>
    </div>
    <div class="phone-no">
        <p>Give us a call <span>1-555-258-6547</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpChoose",
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
}

.choose-heading {
  font-size: 28px;
  font-weight: 900;
  color: #4c6273;
}

.choose-para {
  text-align: center;
  margin-top: -10px;
  color: #4c6273;
}

.choose-flex-sub {
  display: flex;
  justify-content: space-evenly;
  margin-top: 60px;
}

.choose-para-div {
    text-align: center;
}

.choose-img-flex {
    display: flex;
    justify-content: center;
}

.choose-flex-div  {
    width: 250px;
    padding: 0 20px;
    border-bottom: 1px solid #c6d4df;
    border-radius: 25px;
}

.choose-flex-div:hover {
    background-color: #DAE2EC;
}

.choose-sub-head {
    color: #4c6273;
    font-weight: 900;
}

.or-p {
    margin-top: 120px;
    color: #4c6273;
    font-size: 30px;
}

.phone-no {
    display: flex;
    justify-content: flex-end;
    margin-top: 120px;
}

.phone-no>p {
    font-size: 14px;
}

.phone-no>p>span {
    color: #008a00;
}
</style>