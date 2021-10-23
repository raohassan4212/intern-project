<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <p class="menu-p">Menu</p>
        <sidebar-link to="/dashboard" name="Dashboard" icon="ti-layout"/>
        <sidebar-link to="/stats" name="Rent" icon="ti-wallet"/>
        <sidebar-link to="/typography" name="Request" icon="ti-text"/>
        <sidebar-link to="/table-list" name="Application" icon="ti-view-list-alt"/>
        <sidebar-link to="/icons" name="Customer Support" icon="ti-microphone"/>
        <!-- <sidebar-link to="/maps" name="Map" icon="ti-map"/>
        <i class="fas fa-dollar-sign"></i>
        <sidebar-link to="/notifications" name="Notifications" icon="ti-bell"/> -->
      </template>
      <mobile-menu>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-panel"></i>
            <p>Stats</p>
          </a>
        </li>
        <drop-down class="nav-item"
                   title="5 Notifications"
                   title-classes="nav-link"
                   icon="ti-bell">
          <a class="dropdown-item">Notification 1</a>
          <a class="dropdown-item">Notification 2</a>
          <a class="dropdown-item">Notification 3</a>
          <a class="dropdown-item">Notification 4</a>
          <a class="dropdown-item">Another notification</a>
        </drop-down>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-settings"></i>
            <p>Settings</p>
          </a>
        </li>
        <li class="divider"></li>
      </mobile-menu>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>

<style scoped>
.menu-p {
  margin-left: 25px !important;
  margin-top: 35px !important;
  font-size: 15px !important;
}
</style>
