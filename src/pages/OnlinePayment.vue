<template>
  <div>
    <div class="link-div-flex">
      <router-link to="./login">
        <p>DASHBOARD /</p>
      </router-link>
      <router-link to="./login">
        <p>SETTINGS /</p>
      </router-link>
      <router-link to="./login">
        <p>ONLINE PAYMENTS</p>
      </router-link>
    </div>
    <div>
      <p class="p-inline p-mr">Online Payments</p>
    </div>
    <div class="payment-card-div">
      <div class="payment-h-flex">
        <p class="p-stripe">Stripe</p>
        <p class="p-not-active">not active</p>
      </div>
      <p class="stripe-h">stripe</p>

      <p class="strip-para">
        <b>Stripe</b>
        allows to ACCEPT all major cards from landlords/property managers around
        the world on web or in mobile apps. Stripe charges a percentage-based
        fee each time you send a credit or debit card payment. There’s no
        additional fee for international cards, failed charges, or refunds.
      </p>
      <ul>
        <li>Credit/Debit cards</li>
        <li>International Payments</li>
        <li>2-day Payments</li>
        <li>Unlimited Transactions</li>
      </ul>
      <p class="payment-note">Note!</p>
      <p class="payment-base-fee">PERCENTAGE-BASED FEE</p>
      <p class="payment-dollar">
        Supported currencies: <br />
        USD, AUD, GBP, BGN, EUR, CAD, CZK, DKK,HKD, JPY, MYR, MXN, NZD, NOK,
        PLN, RON, SGD, SEK, CHF
      </p>

      <button class="payment-btn">SET UP</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnlinePayment",
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

.p-inline {
  display: inline-block;
}

.p-mr {
  margin-right: 20px;
  font-size: 23px;
  color: #102a43;
}

.payment-card-div {
  width: 400px;
  margin: 30px 0 0 5px;
}

.payment-h-flex {
  display: flex;
  justify-content: space-between;
}

.p-stripe {
  font-size: 18px;
  color: black;
  font-weight: 700;
}

.p-not-active {
  font-size: 18px;
  color: #688cb0;
  font-weight: 700;
}

.stripe-h {
  font-size: 45px;
  font-weight: 900;
  margin: 15px 0 15px 0;
  color: #666fb4;
}

.strip-para {
  font-size: 15px;
  text-align: justify;
}

.payment-note {
  color: #d64545;
  font-weight: 900;
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

.payment-dollar {
  font-size: 12px;
  font-weight: 900;
  color: black;
}

.payment-btn {
  text-align: center;
  width: 100%;
  border-style: none;
  padding: 10px 0;
  color: white;
  background-color: #de911d;
  border-radius: 5px;
  font-weight: 800;
  font-size: 18px;
}

@media only screen and (max-width: 1050px) {
  .payment-card-div {
    width: 100%;
  }
}
</style>