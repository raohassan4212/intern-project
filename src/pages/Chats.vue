<template>
  <div class="chat-main-flex">
    <div class="side-chat-bar">
      <p class="btn-type-chat-dic">CHAT</p>
      <p class="btn-type-chat-dic">PB</p>
      <p class="btn-type-chat-dic">MR</p>
    </div>
    <div class="chat-img-main-div-flex">
      <div>
        <div class="images-div-flex">
          <img src="https://cdn.tenantcloud.com/builds/v38.0.6/web/images/shared/messenger/placeholders/mr-clients.svg" alt="" />
        </div>
        <p class="chat-img-p-center">Hi!</p>
        <p class="chat-img-p-center">
          You can only send and receive messages to/from connected Vendr users.
        </p>
      </div>
      <div>
        <div class="images-div-flex">
          <img src="https://cdn.tenantcloud.com/builds/v38.0.6/web/images/shared/messenger/placeholders/mr-messages.svg" alt="" />
        </div>
        <p class="chat-img-p-center">
          Maintenance request channel allows landlords, Service Pros and tenants to communicate within a particular maintenance request.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chats",
};
</script>

<style scoped>
.chat-main-flex {
    display: flex;
    height: 100vh;
}

.side-chat-bar {
    border-right: 1px solid #dae2ec;
    padding-right: 15px;
}

.btn-type-chat-dic {
    border-style: none;
    background-color: #007bff;
    color: white;
    text-align: center;
    padding: 7px 10px;
    border-radius: 7px;
}

.chat-img-main-div-flex {
    display: flex;
    margin-top: 250px;
}

.images-div-flex {
    display: flex;
    justify-content: center;
}

.chat-img-p-center {
    text-align: center;
    color: #bcccdc;
}

.chat-img-main-div-flex>div {
   margin: 0 30px;
}
</style>