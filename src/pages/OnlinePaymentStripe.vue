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
    <div class="sub-header">
      <div>
        <p class="p-mr">Credit/Debit Cards Payments</p>
      </div>
      <p class="p-not-active">not active</p>
    </div>
    <p class="h-payment-strip-about">ABOUT</p>
    <p class="para-payment-strip">
      <b>Stripe</b> allows to ACCEPT all major cards from landlords/property
      managers around the world on web or in mobile apps. Stripe charges a
      percentage-based fee each time you send a credit or debit card payment.
      There’s no additional fee for international cards, failed charges, or
      refunds.
    </p>
    <p class="h-payment-strip-about">PRICING</p>
    <p class="para-payment-strip">
      Stripe is a transaction fee based service that is paid by the payer
      <b class="b-stripe-color">Stripe Pricing</b> .
    </p>
    <p class="payment-base-fee">PERCENTAGE-BASED FEE</p>

    <div class="payment-stripe-line"></div>

    <p class="h-payment-strip-about">SETTINGS</p>
    <div class="payment-strip-inp-flex">
      <div>
        <p class="inp-top-p">Where are you based?</p>
        <label class="lable-inp payment-stripe-border">
          <select name="cars" id="cars" class="box-aligment">
            <option value="volvo">Germany</option>
            <option value="saab">Canada</option>
            <option value="opel">USA</option>
          </select>
        </label>
        <p class="imp-bottom-p">Don't see your country?</p>
      </div>
      <div>
        <p class="inp-top-p">Public Api Key</p>
        <label class="lable-inp payment-stripe-border">
          <input v-model="lastName" type="text" class="box-aligment" placeholder="Public Api Key"/>
        </label>
        <p class="imp-bottom-p">How to find these keys?</p>
      </div>
      <div>
        <p class="inp-top-p">Secret Api Key</p>
        <label class="lable-inp payment-stripe-border">
          <input v-model="lastName" type="text" class="box-aligment" placeholder="Secret Api Key"/>
        </label>
      </div>
    </div>
    <div class="sub-header stripe-create-footer">
      
        <p>Create Stripe account</p>
    
      <button>set up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnlinePaymentStripe",
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

.sub-header {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}

.p-mr {
  font-size: 18px;
  font-weight: 800;
}

.p-not-active {
  font-size: 18px;
  color: #688cb0;
  font-weight: 700;
}

.h-payment-strip-about {
  font-weight: 800;
  font-size: 15px;
  color: black;
  margin-bottom: 5px;
}

.para-payment-strip {
  font-size: 14px;
  color: black;
}

.b-stripe-color {
  color: #007bff;
}

.payment-base-fee {
  border: 1px solid #de911d;
  border-radius: 5px;
  width: 230px;
  text-align: center;
  padding: 7px 0;
  font-weight: 900;
  color: #de911d;
}

.payment-stripe-line {
  border-top: 1px solid rgb(214, 213, 213);
  margin: 50px 0 25px 0;
}

.payment-strip-inp-flex {
  display: flex;
  justify-content: space-evenly;
}

.payment-stripe-border {
    border: 1px solid #9fb3c8;
}

.inp-top-p {
    color: #486581;
    margin-bottom: 1px;
    font-weight: 900;
}

.imp-bottom-p {
    margin-top: 1px;
    color: #007bff;
}

.stripe-create-footer {
    margin-top: 40px;
}

.stripe-create-footer p {
    font-weight: 900;
    color: #007bff;
}

.stripe-create-footer button {
    border-style: none;
    text-align: center;
    color: white;
    background-color: #007bff;
    padding: 0 30px;
    border-radius: 5px;
}
</style>