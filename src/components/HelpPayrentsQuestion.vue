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
      <router-link to="./login">
        <p>PAY RENTS/</p>
      </router-link>
    </div>
    <div class="choose-flex">
      <div class="width-choose-flex-sub">
        <p class="choose-heading">Contact the Vendr Team</p>
        <p class="choose-para">Read some articles or create a ticket.</p>
        <p class="choose-para-2">
          We found some articles that may help you to solve the issue. If these
          article are not helpful, please continue to create a ticket.
        </p>
      </div>
    </div>
    <div class="flex-2-btn">
      <div>
        <div>
          <p class="p-main-margin" v-b-toggle.sidebar-right>
            How do I pay rent online?
          </p>
          <b-sidebar
            width="700px"
            id="sidebar-right"
            title="MORE INFO"
            right
            shadow
          >
            <div class="side-nav-div">
              <p class="side-nav-h">How do I pay rent online?</p>
              <p class="side-nav-p">
                In order to pay rent online, you must first log in to your
                TenantCloud account. To do this, fill in your email and password
                at the login page.
              </p>
              <img
                class="img-1"
                src="../assets/img/Screenshot-login.png"
                alt=""
                width="100%"
                height="400px"
              />
              <p class="side-nav-p">
                Next, go to the "Home" page from the left menu. You will see
                your outstanding balance. Click on the "Pay now" button to pay
                online:
              </p>
              <img
                src="../assets/img/img-screenshot-2.png"
                alt=""
                width="100%"
                height="400px"
              />
              <p class="p-br">
                Please note! <br />
                In order to pay rent online, you must be connected to your
                landlord and have a shared, active lease. Please contact your
                landlord regarding this issue if you do not see your rental.
              </p>
              <p class="side-nav-p">
                You will have the option to pay with TC Payments powered by
                Dwolla or credit card. Select the payment and click
                <b>"Pay online."</b> If you want to pay with one of the methods
                listed above, your landlord must first have that method set up
                within their account in order to accept your payment.
              </p>
              <img
                src="../assets/img/img-screenshot-4.png"
                alt=""
                width="100%"
                height="400px"
              />
              <p class="side-nav-p">
                You can also pay rent online directly from the
                <b>"Rent"</b> page in the left menu. Check the invoices you
                would like to pay and click the <b>"Pay online"</b> button on
                the left side of the page:
              </p>
              <img
                src="../assets/img/img-screenshot-3.png"
                alt=""
                width="100%"
                height="400px"
              />
              <p class="p-br">Watch The Video Guide To Learn More:</p>
              <iframe
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/zFyf0xev6OY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p class="p-br">1. Pay with TC Payments:</p>
              <p class="side-nav-p">
                Once you've set up a TC Payments account, you can make ACH
                payments online for FREE. There are no fees applied. For more
                detailed information, read How do I set up my TC Payments
                account?
              </p>
              <p class="side-nav-p">
                To pay with TC Payments, you must have a verified bank account
                added in your TC Payment settings. For more detailed
                information, read How do I add a bank account? Select "TC
                Payments" and click the “Pay online” button. Confirm the
                selected bank account before making the payment:
              </p>
              <img
                src="../assets/img/img-screenshot-5.png"
                alt=""
                width="100%"
                height="200px"
              />
              <img
                src="../assets/img/img-screenshot-6.png"
                alt=""
                width="100%"
                height="400px"
              />
              <p class="p-br">
                Please note! <br />
                A bank or credit union transaction usually takes 3–4 business
                days to complete via the Automated Clearing House network (ACH)
                used by banks to transfer funds. Transfer to the bank account
                takes 1-2 business days. Transfers take longer to complete if
                they are over a weekend or holiday.
              </p>
              <p class="side-nav-p">2. Pay with Credit Card:</p>
              <img
                src="../assets/img/img-screenshot-7.png"
                alt=""
                width="100%"
                height="200px"
              />
              <p class="side-nav-p">
                You don't have to set up anything if you just want to pay
                online. Select "Credit card" from the "Pay online" section. Fill
                in your card number, expiration date, CVC, and press "Pay
                online." There may be a fee of 2.9% + 30c applied.
              </p>
              <img
                src="../assets/img/img-screenshot-8.png"
                alt=""
                width="100%"
                height="400px"
              />
              <img
                src="../assets/img/img-screenshot-9.png"
                alt=""
                width="100%"
                height="400px"
              />
              <p class="p-br">
                Please note! <br />
                A Stripe account is required if you want to receive credit card
                payments (deposit refunds) from your landlord or property
                manager. Stripe is a credit card processing system that enables
                you to receive/make payments with all major cards to/from
                customers around the world.
              </p>
              <p class="side-nav-p">
                For more information, go to How do I set up my Stripe account?
              </p>
              <p class="p-br">To learn more watch the video below:</p>
              <iframe
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/LSTSGsJFZbM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p class="side-nav-p">
                You can easily print an invoice. Press Details next to the
                invoice you want to print:
              </p>
              <img
                src="../assets/img/img-screenshot-10.png"
                alt=""
                width="100%"
                height="400px"
              />
              <p class="side-nav-p">Press on the Print icon:</p>
              <img
                src="../assets/img/img-screenshot-11.png"
                alt=""
                width="100%"
                height="400px"
              />
              <img
                src="../assets/img/img-screenshot-12.png"
                alt=""
                width="100%"
                height="400px"
              />
              <p class="side-nav-p">
                Last updated: <br />
                <br />
                Apr 1, 2021
              </p>
            </div>
          </b-sidebar>
        </div>
        <!-- <p class="p-main-margin">How do I pay rent online?</p> -->
        <div>
          <p class="p-main-margin" v-b-toggle.sidebar-right-2>
            How do I pay rent in advance?
          </p>
          <b-sidebar
            width="700px"
            id="sidebar-right-2"
            title="MORE INFO"
            right
            shadow
          >
            <div class="side-nav-div">
              <p class="side-nav-h">How do I pay rent online?</p>
              <p class="side-nav-p">
                If you want to pay rent in advance but the automatic invoice has
                not yet been posted, you can generate the next invoice(s)
                yourself. <br />
                Go to the Home section in the left menu. You must have an active
                lease shared with your landlord or property manager. If there
                are multiple active leases, select the needed one at the top of
                the page.
              </p>
              <p class="p-br">Please note!</p>
              <p class="side-nav-p">
                The "Pay in advance" option is active only if there is no
                outstanding balance. This means you cannot generate the next
                invoice if the current invoice is not paid.
              </p>
              <img
                src="../assets/img/img-screenshot-2.1.png"
                alt=""
                width="100%"
                height="400px"
              />
              <p class="side-nav-p">
                In the right corner of the account, click on the "Pay in
                advance" button. You will be redirected to the Tenancy section
                of the lease preview page. Select "create next invoice" and
                click "Confirm," if you are certain you want to publish the next
                recurring invoice earlier.
              </p>
              <img
                src="../assets/img/img-screenshot-2.2.png"
                alt=""
                width="100%"
                height="350px"
              />
              <img
                src="../assets/img/img-screenshot-2.3.png"
                alt=""
                width="100%"
                height="350px"
                class="img-mr-top"
              />
              <p class="side-nav-p">
                The new invoice will be in Open status. Go to "details" and
                select the "pay online" option, or click directly "Pay online"
                button at the top right side of the account. Enter the dollar
                amount and select payment type. Press the "Pay online" button
                and confirm the transaction.
              </p>
              <img
                src="../assets/img/img-screenshot-2.4.png"
                alt=""
                width="100%"
                height="350px"
                class="img-mr-top"
              />
              <p class="side-nav-p">
                Last updated: <br />
                Aug. 5, 2021
              </p>
            </div>
          </b-sidebar>
        </div>
        <!-- <p class="p-main-margin">How do I pay rent in advance?</p> -->
        <router-link to="icons">
        <button class="btn-question">I FOUND THE ANSWER</button>
        </router-link>
      </div>
      <div>
        <p class="p-main-margin" v-b-toggle.sidebar-right-3>
          Can I pay rent with credit card?
        </p>
        <b-sidebar
          width="700px"
          id="sidebar-right-3"
          title="MORE INFO"
          right
          shadow
        >
          <div class="side-nav-div">
            <p class="side-nav-h">Can I pay rent with credit card?</p>
            <p class="side-nav-p">
              If your landlord/property manager set up the correct payment
              method, you will be able to pay rent and other invoices via
              credit/debit card.
            </p>
            <p class="side-nav-p">
              This method allows you make payments with all major credit/debit
              cards around the world.
            </p>
            <p class="side-nav-p">
              If you don’t see the above payment method, it means that your
              landlord either does not allow this payment method or has not set
              it up yet.
            </p>
            <p class="p-br">Please note!</p>
            <p class="side-nav-p">
              You as a tenant don't need to set up Stripe account in order to
              pay with a credit/ debit card. <br />
              <br />

              The link below might be helpful: <br />
              <br />
              <span class="nav-span-color"
                >How do I set up my Stripe account?</span
              >
            </p>
            <p class="p-please">
              For more information on how to set up online payments at Vendr
              please visit: How do I pay rent online?
            </p>
            <p>
              Last updated: <br />
              Sep. 2, 2020
            </p>
          </div>
        </b-sidebar>

        <!-- <p class="p-main-margin">Can I pay rent with credit card?</p> -->
        <p class="p-main-margin" v-b-toggle.sidebar-right-4>
          Where can I see my payment history?
        </p>
        <b-sidebar
          width="700px"
          id="sidebar-right-4"
          title="MORE INFO"
          right
          shadow
        >
          <div class="side-nav-div">
            <p class="side-nav-h">Where can I see my payment history?</p>
            <p class="side-nav-p">
              To view your payment history, go to the "Home" section from the
              left side menu. If you have multiple leases, select the desired
              one. Scroll to the bottom of the page and view all the related
              transactions:
            </p>
            <img
              src="../assets/img/img-screenshot-4.1.png"
              alt=""
              width="100%"
              height="400px"
            />
            <p class="side-nav-p">
              You can also click "Rent" to view the list of all transactions if
              you have multiple leases:
            </p>
            <img
              src="../assets/img/img-screenshot-4.2.png"
              alt=""
              width="100%"
              height="400px"
            />
            <p class="side-nav-p">
              Last updated: <br />
              Aug. 5, 2021
            </p>
          </div>
        </b-sidebar>
        <!-- <p class="p-main-margin">Where can I see my payment history?</p> -->
        <button class="btn-question">CONTINUE TO CREATE THE TICKET</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpPayrentsQuestion",
  props: ["i"],
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
  margin-top: 40px;
  text-align: center;
  margin-bottom: 50px;
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

.choose-para-2 {
  margin-top: 40px;
  color: #536781;
  font-weight: 400;
  font-size: 19px;
  text-align: justify;
}

.width-choose-flex-sub {
  width: 70%;
}

.flex-2-btn {
  display: flex;
  justify-content: space-evenly;
}

.p-main-margin {
  margin-bottom: 60px;
  color: #007bff;
  font-size: 19px;
  font-weight: 600;
}

.btn-question {
  border-style: none;
  background-color: #007bff;
  color: white;
  padding: 8px 18px;
  border-radius: 5px;
  font-weight: 800;
}

.btn-question:hover {
  background-color: #59a0ec;
}

.side-nav-div {
  padding: 5px 25px;
}

.side-nav-h {
  font-size: 18px;
  color: #536781;
  font-weight: 600;
}

.side-nav-p {
  margin-top: 25px;
}

.p-br {
  font-weight: 900;
}

.img-mr-top {
  margin-top: 20px;
}

.nav-span-color {
  color: #007bff;
}

.p-please {
  margin-top: 80px;
  margin-bottom: 80px;
}
</style>