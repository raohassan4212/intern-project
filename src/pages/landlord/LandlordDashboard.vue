<template>
  <div>
    <div class="link-div-flex">
      <router-link to="./login">
        <p>DASHBOARD /</p>
      </router-link>
    </div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div class="landlord-dashboard-c1-quick">Quicks Buttons</div>
          <div class="add-6">
            <div class="add-6-1">
              <p>ADD NEW EXPENSE</p>
            </div>
            <div class="add-6-1">
              <p>ADD NEW TENANT</p>
            </div>
            <div class="add-6-3">
              <p>ADD NEW PROPERTY</p>
            </div>
            <div class="add-6-4">
              <p>ADD NEW REQUEST</p>
            </div>
            <div class="add-6-4">
              <p>ADD NEW REMINDER</p>
            </div>
            <div>
              <p>ADD NEW INCOME</p>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="landlord-dashboard-c1-quick">Properties</div>
          <div class="dashboard-round-col-2">
            <div class="col-2div-1">
              1 <br />
              <span>Total</span>
            </div>
            <div>
              <p><b>1</b> vacant</p>
              <p><b>0</b> occupied</p>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="col-3-div">
            <img
              src="https://cdn.tenantcloud.com/builds/v38.0.12/web/images/shared/dashboard/widget-upgrade-third.svg"
              alt=""
            />
            <div>
              <p class="col-3-p">You can get a lot more of Vendr features</p>
              <div class="col-3-btn-div">
                <button class="col-3-btn">Upgrade your plan</button>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="dashboard-row-2-flex">
      <div class="row-2-col-1">
        <div class="row-2-col-1-head">
          <p>Listing</p>
          <select name="cars" id="cars">
            <option value="volvo">5+ days</option>
            <option value="saab">10+ days</option>
            <option value="mercedes">15+ days</option>
            <option value="audi">All</option>
          </select>
        </div>

        <table class="row-2-table">
          <tr class="tr-head">
            <th>LISTING</th>
            <th>RENT</th>
            <th>APPLICATION</th>
            <th>ON WEBSITE</th>
          </tr>
          <tr class="tr-td1">
            <td><b>SECTOR 17 BUS STAND RD</b></td>
            <td>$5,000</td>
            <td><b class="td-0-color">0</b></td>
            <td>20 days</td>
            <td class="td-0-color">view</td>
          </tr>
        </table>
      </div>
      <div class="row-2-col-2">
        <div>
          <div class="landlord-dashboard-c1-quick">Last 30 Days</div>
          <div class="row-2-col-2-flex-1">
            <div>
              <p class="paid-invoices p-height paid-color">$0</p>
              <p class="paid-color">paid invoices</p>
            </div>
            <div class="between-slash">/</div>
            <div>
              <p class="p-height">$0</p>
              <p>open invoices</p>
            </div>
          </div>
          <div class="row-2-col-2-btn">
            <button>receive payments</button>
          </div>
          <div class="p-view-div">
            <p class="td-0-color">view all</p>
          </div>
        </div>
        <div class="outstanding-div-margin">
          <div class="row-2-col-1-head">
            <p class="to-do-list">Outstanding</p>
            <select name="cars" id="cars">
              <option value="volvo">0 - 30 days</option>
              <option value="saab">31 - 60 days</option>
              <option value="mercedes">61 - 90 days</option>
              <option value="audi">All</option>
            </select>
          </div>
          <div class="outstanding-2">
            <p class="out-dollar-p">$0</p>
            <p class="td-0-color">view all</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row-3">
      <div class="row-3-div-1-width">
        <div class="landlord-dashboard-c1-quick">Financials, INR</div>
        <div class="row-3-col-1-body-flex">
          <div>
            <div class="profit-icon">
              <img src="../../assets/img/profit-icon.png" alt="" width="70px" />
            </div>
            <!-- <p  class="p-row-3-p">You currently don't have any payment activity for the last 6 months</p> -->
          </div>
        </div>
      </div>
      <div>
        <div class="row-2-col-1-head row-2-col-2">
          <p class="to-do-list">To DO List</p>
          <button class="row-3-col-2-head-btn">+ add task</button>
        </div>
        <div>
          <p class="woo-p">
            WOO! <br />
            nothing here, but me
          </p>
        </div>
        <p class="td-0-color end-view">view all</p>
      </div>
    </div>
    <div class="row-4">
      <div>
        <div class="row-4-div-1-head">
          <p>Maintance</p>
          <p>Status</p>
          <p>Priority</p>
        </div>
        <div class="row-4-mistake">
          <div class="round-add-row-4">
            <div class="add-row-4-circle">+add</div>
          </div>
          <div class="li-row-4">
            <ul>
              <li>0 new</li>
              <li>0 in progress</li>
              <li>0 resolved</li>
              <li>0 deferred</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div class="landlord-dashboard-c1-quick">Rental Application</div>
        <div class="row-4-mistake">
        <div class="round-add-row-4">
          <div class="add-row-4-circle">+add</div>
        </div>
        <div class="li-row-4">
          <ul>
            <li>0 new</li>
            <li>0 in progress</li>
            <li>0 resolved</li>
            <li>0 deferred</li>
          </ul>
        </div>
        </div>
      </div>
      <div>
        <div class="landlord-dashboard-c1-quick">October 2021</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandlordDashboard",
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

.landlord-dashboard-c1-quick {
  color: #102a43;
  font-size: 15px;
  font-weight: 600;
  border-bottom: 1px solid #dae2ec;
  padding: 10px 50px 10px 10px;
  margin-bottom: 15px;
}

.add-6 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
}

.add-6 > div {
  /* font-size: 10px; */
  padding: 10px;
}

.add-6 p {
  font-size: 10px;
  width: 70px;
  text-align: center;
}

.add-6-1 {
  border-right: 1px solid #dae2ec;
  border-bottom: 1px solid #dae2ec;
}

.add-6-3 {
  border-bottom: 1px solid #dae2ec;
}

.add-6-4 {
  border-right: 1px solid #dae2ec;
}

.dashboard-round-col-2 {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.col-2div-1 {
  text-align: center;
  border: 3px solid #f49454;
  padding: 35px 50px;
  border-radius: 75px;
  font-weight: 800;
  font-size: 16px;
}

.col-2div-1 > span {
  font-size: 10px;
  font-weight: 400;
}

.col-3-div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
}

.col-3-p {
  font-size: 21px;
  font-weight: 900;
  padding: 0 25px;
}

.col-3-btn {
  background-color: #de911d;
  color: white;
  border-style: none;
  padding: 8px 25px;
  border-radius: 5px;
}

.col-3-btn-div {
  display: flex;
  justify-content: center;
}

.dashboard-row-2-flex {
  display: flex;
  width: 100%;
  margin-top: 70px;
}

.row-2-col-1-head {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dae2ec;
  padding-bottom: 8px;
  margin-bottom: 5px;
}

.row-2-col-1 {
  width: 65%;
}

.row-2-col-1-head > p {
  font-size: 14px;
  font-weight: 700;
}

.row-2-col-1-head > select {
  border: 1px solid #bcccdc;
  background-color: #dae2ec;
  text-align: center;
  border-radius: 5px;
}

.row-2-table {
  width: 100%;
}

.tr-head {
  border-bottom: 1px solid #dae2ec;
}

.tr-head > th {
  font-size: 12px;
}

.tr-td1 > td {
  width: 50px;
  border-bottom: 1px solid #dae2ec;
  padding: 15px 0px;
}

.td-0-color {
  color: #007bff;
  font-size: 18px;
}

.row-2-col-2-flex-1 {
  display: flex;
}

.paid-invoices {
  text-align: end;
}

.p-height {
  margin-bottom: 0px;
}

.between-slash {
  color: #007bff;
  font-size: 70px;
  font-weight: 100;
  position: relative;
  bottom: 30px;
  margin: 0 15px;
}

.paid-color {
  color: #007bff;
  text-align: end;
}

.row-2-col-2-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -35px;
}

.row-2-col-2-btn > button,
.row-3-col-2-head-btn {
  border-style: none;
  color: white;
  background-color: #007bff;
  border-radius: 5px;
  padding: 5px 15px;
}

.row-2-col-2 {
  margin-left: 40px;
}

.p-view-div {
  text-align: center;
}

.outstanding-2 {
  text-align: center;
  padding: 30px 0px;
}

.outstanding-div-margin {
  margin-top: 30px;
}

.out-dollar-p {
  font-size: 22px;
  color: red;
}

@media only screen and (max-width: 1115px) {
  .dashboard-row-2-flex {
    flex-wrap: wrap;
    justify-content: center;
  }

  .row-2-col-1 {
    width: 100%;
  }

  .row-2-table {
    margin-bottom: 150px;
  }
}

.row-3 {
  display: flex;
  /* justify-content: space-between; */
  width: 100%;
}

.to-do-list {
  margin-right: 160px;
  text-align: center;
}

.row-3-col-1-body-flex {
  display: flex;
  justify-content: center;
  margin-top: 75px;
}

.profit-icon {
  border: 3px solid #bcccdc;
  padding: 50px 50px;
  border-radius: 105px;
}

.row-3-div-1-width {
  width: 60%;
}

.p-row-3-p {
  /* border: 1px solid red; */
}

.woo-p {
  text-align: center;
  font-size: 28px;
  color: #bcd0e6;
  margin-top: 150px;
  margin-bottom: 40px;
}

.end-view {
  display: flex;
  justify-content: flex-end;
}

.row-4 {
  display: flex;
  margin-top: 30px;
  justify-content: space-evenly;
}

.row-4-div-1-head {
  display: flex;
  justify-content: space-evenly;
  padding: 10px 50px 10px 10px;
}

.row-4-block {
  /* display: inline-block; */
}

.add-row-4-circle {
  border: 3px solid #bcccdc;
  padding: 40px 37px;
  border-radius: 80px;
  
}

.row-4-mistake {
  display: flex;
}

@media only screen and (max-width: 1000px) {
  .row-3 {
    flex-wrap: wrap;
  }
  .row-3>div {
    width: 100%;
  }
}
</style>