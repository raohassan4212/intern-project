<template>
  <div class="main-Account">
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
        <p class="p-inline p-mr">Accounting</p>
        <p class="p-inline p-t"><span>0</span> Total</p>
      </div>
      <div>
        <div>
          <b-button v-b-toggle.sidebar-right
            >Filter <span class="span-0">0</span></b-button
          >
          <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
            <div>
              <div class="side-nav-flex px-3 py-3">
                <div><button class="btn-sidebar-nav">reset</button></div>
                <div class="filter-div">Filter</div>
                <div><button class="btn-sidebar-apply">apply</button></div>
              </div>
              <div class="sidebar-date">
                <p>Date</p>
              </div>
              <div class="px-3 py-3">
                <label class="lable-inp">
                  Presets*
                  <select name="cars" id="cars" class="box-aligment">
                    <option value="volvo">Last 30 days</option>
                    <option value="opel">Previous month</option>
                    <option value="opel">Last 3 months</option>
                    <option value="opel">Previous quarter</option>
                    <option value="opel">Last 12 months</option>
                    <option value="opel">Previous year</option>
                  </select>
                </label>
                <div class="two-label">
                  <label class="lable-inp gap">
                    Start data*
                    <input
                      v-model="lastName"
                      type="date"
                      class="box-aligment"
                    />
                  </label>
                  <br />
                  <label class="lable-inp gap">
                    End data*
                    <input
                      v-model="lastName"
                      type="date"
                      class="box-aligment"
                    />
                  </label>
                </div>
              </div>
              <div>
                <div class="px-3">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    v-b-toggle.collapse-1
                    variant="primary"
                  />
                  <span class="span-transaction">Transaction Status</span>
                  <b-collapse id="collapse-1" class="mt-2">
                    <label class="lable-inp">
                      <select name="cars" id="cars" class="box-aligment">
                        <option value="volvo">Open</option>
                        <option value="opel">Paid</option>
                        <option value="opel">Partial</option>
                        <option value="opel">Pending</option>
                        <option value="opel">Refund</option>
                        <option value="opel">Void</option>
                        <option value="opel">With balance</option>
                        <option value="opel">Over due</option>
                        <option value="opel">Waived</option>
                      </select>
                    </label>
                  </b-collapse>
                </div>
                <div class="px-3 py-3">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    v-b-toggle.collapse-2
                    variant="primary"
                  />
                  <span class="span-transaction">Transaction Status</span>
                  <b-collapse id="collapse-2" class="mt-2">
                    <label class="lable-inp">
                      <select name="cars" id="cars" class="box-aligment">
                        <option value="volvo">one time</option>
                        <option value="opel">recurring</option>
                      </select>
                    </label>
                  </b-collapse>
                </div>
              </div>
            </div>
          </b-sidebar>
        </div>
        <!--  -->
      </div>
    </div>
    <div class="table-top">
      <p class="mr-outstanding">Outstanding</p>
      <p>€0</p>
    </div>
    <table>
      <tr>
        <th>STATUS</th>
        <th>DUE DATE</th>
        <th class="more-mr">PROPERTY / UNIT</th>
        <th class="more-mr">PERSON</th>
        <th>TOTAL / PAID</th>
        <th>ACTION</th>
      </tr>
    </table>
    <div class="div-text">
      <p class="p-acc">
        NO RESULTS FOUND. PLEASE MODIFY YOUR SEARCH CRITERIA AND TRY SEARCHING
        AGAIN
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountingTable",
};
</script>

<style scoped>
.main-Account {
  width: 100%;
}

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
}

.p-inline {
  display: inline-block;
}

.p-mr {
  margin-right: 20px;
  font-size: 23px;
  color: #102a43;
}

.p-mr:hover {
  color: #007bff;
}

.p-t {
  color: #102a43;
  font-size: 13px;
}

.btn-filter {
  border-style: none;
  box-shadow: 0 0 5px #627d98;
  font-size: 16px;
  padding: 3px 18px;
  color: #627d98;
  border-radius: 3px;
}

.btn-filter:hover {
  color: #007bff;
}

.span-0 {
  margin-left: 8px;
}

.table-top {
  background-color: #627d98;
  color: white;
  padding: 12px 0 3px 10px;
  border-style: none;
  border-radius: 5px;
}

.mr-outstanding {
  margin-bottom: 3px;
}

th {
  padding: 15px 25px;
  color: #627d98;
  font-size: 13px;
}

.more-mr {
  /* padding-right: 150px !important; */
}

table {
  width: 100%;
}

.div-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #bcccdc;
}

.p-acc {
  font-size: 28px;
  text-align: center;
  padding: 0 15px;
  margin-bottom: 200px;
}

.side-nav-flex {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #32435a;
}

.filter-div {
  color: white;
  font-size: 19px;
  font-weight: bold;
}

.btn-sidebar-nav {
  border-style: none;
  border-radius: 3px;
  padding: 2px 15px;
  color: #102a43;
}

.btn-sidebar-apply {
  border-style: none;
  border-radius: 3px;
  padding: 2px 15px;
  background-color: #3f48d1;
  color: white;
  font-weight: bold;
}

.sidebar-date {
  padding: 30px 0 0 15px;
  color: #102a43;
}

.span-transaction {
  color: #486581;
  font-weight: bold;
  margin-left: 15px;
}
</style>