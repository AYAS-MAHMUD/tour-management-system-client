
// import App from "@/App";
import App from "@/App";
import AdminLayout from "@/components/layout/AdminLayout";
import CommonLayout from "@/components/layout/CommonLayout";
import Hero from "@/components/layout/Hero";
import Analytics from "@/pages/Analytics";

import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter([
  {
    path: "/",
    Component : CommonLayout,
    children :[
        {
            index : true,
            Component : App
        },
        {
            path : "hero",
            Component : Hero
        }
    ]
  },
  {
    path : "/admin",
    Component : AdminLayout,
    children : [
        {
            path : "analytics",
            Component : Analytics
        }
    ]
  }
]);


