import { StudentsAdminTable, PageTitle } from "../../components";
import React from "react";

const StudentsPageAdmin = () => {
  return (
    <div className="h-4/5 pt-7">
      <PageTitle text="student's summary" />
      <StudentsAdminTable />
    </div>
  );
};

export default StudentsPageAdmin;
