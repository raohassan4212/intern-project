<template>
  <div>
    <div class="link-div-flex">
      <router-link to="./login">
        <p>DASHBOARD /</p>
      </router-link>
      <router-link to="./login">
        <p>SETTINGS /</p>
      </router-link>
    </div>
    <div>
      <p class="p-inline p-mr">Renter Profile</p>
    </div>
    <div class="file-box-flex">
      <div class="file-divs">
        <p class="file-p1">All files</p>
        <p class="file-p2">0 files</p>
        <span>0 MB/512 MB Used</span>
      </div>
      <div class="file-divs">
        <p class="file-p1">Images</p>
        <p class="file-p2">0 files</p>
        <span>0 MB/512 MB Used</span>
      </div>
      <div class="file-divs">
        <p class="file-p1">Documents</p>
        <p class="file-p2">0 files</p>
        <span>0 MB/512 MB Used</span>
      </div>
      <div class="file-divs">
        <p class="file-p1">Video</p>
        <p class="file-p2">0 files</p>
        <span>0 MB/512 MB Used</span>
      </div>
    </div>
    <div class="file-filter-flex">
      <p>Files</p>
      <input type="search" name="" id="" placeholder="Search" />
    </div>
    <table class="file-table">
      <tr class="file-h-tr">
        <th>TYPE</th>
        <th>NAME</th>
        <th>SIZE</th>
        <th>DATE</th>
      </tr>
    </table>
    <div class="table-bottom-div-flex">
      <div>
        <div class="file-image">
          <img src="../assets/img/file-manager.png" alt="" width="50px" />
        </div>
        <p class="file-image-p no-file">No files</p>
        <p class="file-image-p">
          There are no files associated with this account.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileManager",
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

.file-box-flex {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.file-divs {
  border-style: none;
  border: 1px solid #41a541;
  padding: 40px 50px;
  border-radius: 5px;
  margin: 10px;
}

.file-p1 {
  font-size: 18px;
  font-weight: 800;
  color: black;
  margin-bottom: 1px;
}

.file-p2 {
  font-size: 12px;
}

.file-filter-flex {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.file-filter-flex input {
  border: 1px solid #9fb3c8;
  border-radius: 5px;
}

.file-filter-flex p {
  font-size: 20px;
  font-weight: 900;
}

.file-table {
  width: 100%;
  margin-top: 40px;
}

.file-h-tr {
  border-top: 1px solid #dae2ec;
  border-bottom: 1px solid #dae2ec;
}

.file-h-tr th {
  padding: 15px 0;
}

.table-bottom-div-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 13%;
}

.file-image {
  display: flex;
  justify-content: center;
}

.file-image-p {
  text-align: center;
}

.no-file {
  font-weight: 800;
  margin-top: 15px;
  margin-bottom: 2px;
}
</style>