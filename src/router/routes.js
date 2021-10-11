import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";
import Login from "@/pages/Login.vue";
import SignUp from "@/pages/SignUp.vue";
import Forget from "@/pages/Forget.vue";
import ChangePassword from "@/pages/ChangePassword.vue";
import VerificationPage from "@/pages/VerificationPage.vue";
import AccountType from "@/pages/AccountType.vue";
import PropertyInformation from "@/pages/PropertyInformation.vue";
import PropertyInformationMulti from "@/pages/PropertyInformationMulti.vue";
import AddTenantProperty from "@/pages/AddTenantProperty.vue";
import LeaseDetail from "@/pages/LeaseDetail.vue";
import PackageSubscription from "@/pages/PackageSubscription.vue";
import VacantProperty from "@/pages/VacantProperty.vue";
import PropertyOccupied from "@/pages/PropertyOccupied.vue";
import Image from "@/pages/Image.vue";
import WhatInclude from "@/pages/WhatInclude.vue";
import ChipInclude from "@/pages/ChipInclude.vue";
import FreeWebsite from "@/pages/FreeWebsite.vue";
import Congratulation from "@/pages/Congratulation.vue";
import TenantAccount from "@/pages/TenantAccount.vue";
import ProServices from "@/pages/ProServices.vue";




const routes = [
  { path: "/login", component: Login },
  { path: "/sign-up", component: SignUp },
  { path: "/forget", component: Forget },
  { path: "/change-password", component: ChangePassword },
  { path: "/verification", component: VerificationPage },
  { path: "/account-type", component: AccountType },
  { path: "/property-information", component: PropertyInformation },
  { path: "/property-information-multi", component: PropertyInformationMulti },
  { path: "/add-tenant-property", component: AddTenantProperty },
  { path: "/lease-detail", component: LeaseDetail },
  { path: "/package-subscription", component: PackageSubscription },
  { path: "/vacant-property", component: VacantProperty },
  { path: "/property-occupied", component: PropertyOccupied },
  { path: "/image", component: Image },
  { path: "/what-include", component: WhatInclude },
  { path: "/chip-include", component: ChipInclude },
  { path: "/free-website", component: FreeWebsite },
  { path: "/congratulation", component: Congratulation },
  { path: "/tenant-account", component: TenantAccount },
  { path: "/pro-services", component: ProServices },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
     
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "stats",
        name: "stats",
        component: UserProfile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      }
    ]
  },
  { path: "*", component: Login },
  
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
