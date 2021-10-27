<template>
  <div>
    <div class="link-div-flex">
      <router-link to="./login">
        <p>DASHBOARD /</p>
      </router-link>
      <router-link to="./login">
        <p>HELP CENTER /</p>
      </router-link>
      <router-link to="./login">
        <p>CHOOSE /</p>
      </router-link>
      <router-link to="./login">
        <p>NEW TICKET /</p>
      </router-link>
    </div>
    <div class="ticket-new-main-div">
      <p class="ticket-new-h">Contact the Vendr Team</p>
      <p class="ticket-new-para">Contact the TenantCloud Team</p>
      <label class="lable-inp">
        Short title*
        <input
          v-model="lastName"
          type="text"
          class="box-aligment"
          placeholder="Short title"
        />
      </label>
      <p class="new-ticket-p-heading">DESCRIPTION</p>
      <p class="new-ticket-p-para">
        Try to be descriptive. Make sure to add as much detail as possible
        including contact name/email, transaction ID, and the page name if
        applicable. Include screenshots as well.
      </p>
      <div class="new-ticket-textarea-div">
        <div class="textarea-head">
          <div class="back-forward">
            <b>(--</b>
          </div>
          <div class="back-forward">
            <b>--)</b>
          </div>
          <div class="back-forward">
            <b>B</b>
          </div>
          <div class="back-forward">
            <b>
              <i>I</i>
            </b>
          </div>
          <div div class="back-forward back-border">
            <b> 1-</b>
          </div>
          <div div class="back-forward back-border o-b">
            <b> o-</b>
          </div>
        </div>
        <textarea rows="10" placeholder="Type your text"></textarea>
        <p class="p-limit">Character limit: 0 / <b>1000</b></p>
      </div>
      <div class="new-ticket-file-upload">
        <input type="file" name="" id="" />
      </div>
      <div class="new-ticket-last-para-div">
        <p>
          In order to prevent confusion, and to speed up our support manager's
          response time, please refrain from opening more than one ticket on the
          same topic.
        </p>
      </div>
      <div class="new-ticket-btn">
        <button class="account-setting-btn-update">SUBMIT A TICKET</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpChooseNewTicket",
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

.ticket-new-h {
  text-align: center;
  font-size: 30px;
  font-weight: 900;
  color: #486581;
}

.ticket-new-para {
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #486581;
}

.ticket-new-main-div {
  margin: 0 150px;
}

.new-ticket-p-heading {
  color: black;
  font-weight: 800;
}

.new-ticket-p-para {
  font-size: 14px;
}

.new-ticket-textarea-div {
  width: 100%;
  border: 1px solid #bcccdc;
}

.new-ticket-textarea-div > textarea {
  width: 100%;
  border-style: none;
  padding: 15px 0 0 20px;
}

.new-ticket-textarea-div > div {
  border-bottom: 1px solid #bcccdc;
}

.back-forward {
  font-size: 18px;
  margin-right: 15px;
}

.textarea-head {
  display: flex;
}

.back-border {
  border-left: 1px solid black;
  padding: 0 10px;
}
.o-b {
  border-right: 1px solid black;
}

.p-limit {
  display: flex;
  justify-content: flex-end;
  font-size: 13px;
  margin-right: 10px;
  color: #6cb0de;
}

.new-ticket-file-upload {
  margin-top: 20px;
  border: 1px dotted #bcccdc;
  display: flex;
  justify-content: center;
  padding: 50px 0;
}

.new-ticket-last-para-div {
  margin-top: 20px;
  border: 1px solid #d8dcdf;
  border-radius: 5px;
  padding: 15px;
  border-left: 6px solid #007bff;
}

.account-setting-btn-update {
  margin: 20px 0;
  border-style: none;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  justify-content: flex-end;
  font-weight: 800;
}

.new-ticket-btn {
  display: flex;
  justify-content: flex-end;
}
</style>