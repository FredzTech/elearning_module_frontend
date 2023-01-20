import React from "react";
import {
  AdminCard,
  TutorsAdminTable,
  UnitsAdminTable,
  PageTitle,
  Footer,
} from "../../components";
const AdminDashboard = () => {
  return (
    <div id="main" className="w-full flex-col-centered justify-start">
      <div id="grid" className="w-full p-5 grid gap-5 grid-cols-2 m-4">
        <AdminCard />
        <AdminCard />
        <AdminCard />
        <AdminCard />
      </div>
      <div
        id="table"
        className="w-full flex flex-col jusitfy-start items-center "
      >
        <PageTitle text="units summary" />

        <UnitsAdminTable />
      </div>
    </div>
  );
};

export default AdminDashboard;
