/**
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Clients from "layouts/tables";
import Devices from "layouts/devices";
import SignIn from "layouts/authentication/sign-in";

import NewDevices from "./layouts/devices/new-devices/NewDevices";
import NewClient from "./layouts/tables/new-clients/NewClient";
import UpdateClient from "./layouts/tables/update-client/UpdateClient";
import UpdateDevice from "./layouts/devices/Update Device/UpdateDevice";
import Var from "./layouts/var";
import Var_devices from "./layouts/var_devices";

// @mui icons
import Icon from "@mui/material/Icon";
import NotFound from "./layouts/not-found";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Clients",
    key: "clients",
    icon: <Icon fontSize="small">people_view</Icon>,
    route: "/clients",
    component: <Clients />,
  },
  {
    type: "collapse",
    name: "Devices",
    key: "devices",
    icon: <Icon fontSize="small">phone_android</Icon>,
    route: "/devices",
    component: <Devices />,
  },
  {
    type: "collapse",
    name: "VAR",
    key: "var",
    icon: <Icon fontSize="small">diversity_3</Icon>,
    route: "/var",
    component: <Var />
  },

  {
    type: "collapse",
    name: "VAR Devices",
    key: "var-devices",
    icon: <Icon fontSize="small">offline_share</Icon>,
    route: "/var-devices",
    component: <Var_devices />
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    name: "New Device",
    key: "new-devices",
    icon: <Icon fontSize="small">new-devices</Icon>,
    route: "/devices/new-devices",
    component: <NewDevices />,
  },
  {
    name: "New Client",
    key: "new-client",
    icon: <Icon fontSize="small">new-client</Icon>,
    route: "/clients/new-client",
    component: <NewClient />,
  },

  {
    name: "Update Client",
    key: "update-client",
    icon: <Icon fontSize="small">update-client</Icon>,
    route: "/clients/update-client",
    component: <UpdateClient />,
  },

  {
    name: "Update Device",
    key: "update-device",
    icon: <Icon fontSize="small">update-device</Icon>,
    route: "/devices/update-device",
    component: <UpdateDevice />,
  },

  {
    name: "Not Found",
    key: "not-found",
    icon: <Icon fontSize="small">error</Icon>,
    route: "/not-found",
    component: <NotFound />,
  },



];

export default routes;
