import React from "react";

const BillsPage = () => import("./pages/Home");
const BillPage = () => import("./pages/BillPage");
const AddBillPage = () => import("./pages/AddBill");

export const useRoutes = [
  {
    path: "/",
    Component: React.lazy(BillsPage),
  },
  {
    path: "/bill/:id",
    Component: React.lazy(BillPage),
  },
  {
    path: "/addBill",
    Component: React.lazy(AddBillPage),
  },
];
