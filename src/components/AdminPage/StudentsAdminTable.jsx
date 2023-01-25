import React,{useContext} from "react";
import { StatusPill, CTAButton, NavigateBtn } from "../../components";
import { StudentRegistrationForm } from "../Logins-Registration";
import { ModalContext } from "../modals/ModalProvider";
const StudentsAdminTable = () => {
  const{ openModal, isOpen} = useContext(ModalContext);

  const studentsData = [
    {
      fName: "ANN",
      surname: "MWANGI",
      email: "lorem5@gmail.com",
      status: "free",
      _id: "634513b7b32aff941eef9f46",
      entryDate: "2022-10-11",
      updatedAt: "2022-10-11",
    },
    {
      fName: "ANN",
      surname: "MWANGI",
      email: "lorem5@gmail.com",
      status: "free",
      _id: "634513b7b32aff941eef9f46",
      entryDate: "2022-10-11",
      updatedAt: "2022-10-11",
    },
    {
      fName: "ANN",
      surname: "MWANGI",
      email: "lorem5@gmail.com",
      status: "free",
      _id: "634513b7b32aff941eef9f46",
      entryDate: "2022-10-11",
      updatedAt: "2022-10-11",
    },
    {
      fName: "ANN",
      surname: "MWANGI",
      email: "lorem5@gmail.com",
      status: "free",
      _id: "634513b7b32aff941eef9f46",
      entryDate: "2022-10-11",
      updatedAt: "2022-10-11",
    },
    {
      fName: "ANN",
      surname: "MWANGI",
      email: "lorem5@gmail.com",
      status: "free",
      _id: "634513b7b32aff941eef9f46",
      entryDate: "2022-10-11",
      updatedAt: "2022-10-11",
    },
  ];

  return (
    <>
      <div className="flex flex-col align-center relative shadow-md sm:rounded-lg w-full h-full pt-2 px-4">
        <div className="flex w-full items-center justify-end mb-3 pr-1">
          <NavigateBtn
            action={openModal}
            text="Add student"
            icon="tenantIcon"
          />
          {isOpen && <StudentRegistrationForm/>}
        </div>
        <table className="flex flex-col items-start justify-center w-full text-md text-left bg-cyan-50">
          <thead className="text-secondary flex w-full items-center justify-center uppercase h-full">
            <tr className="flex w-full items-center justify-center px-2 bg-primary  h-12">
              <th className="flex w-28 px-2 ">No</th>
              <th className="justify-center items-start flex py-2 w-64">
                F Name
              </th>
              <th className="justify-center items-center  flex py-2 w-64">
                L Name
              </th>
              <th className="justify-center items-center  flex py-2 w-64">
                Reg Date
              </th>
              <th className="justify-center items-center flex py-2 w-48">
                A/C Status
              </th>
              <th className="flex py-2 w-64 justify-center items-center">
                CTA
              </th>
            </tr>
          </thead>

          <tbody className="flex flex-col w-full items-center justify-start">
            {studentsData.map((student, index) => {
              let {
                fName,
                surname: lName,
                email,
                status,
                _id,
                entryDate: dateOfRegistration,
              } = student;
              return (
                <tr
                  className={`${
                    index % 2 == 0 ? "bg-primary  " : ""
                  } flex w-full items-center justify-start px-2 cursor-pointer font-normal text-xl`}
                  key={`${index}`}
                >
                  <td className="py-1 px-2 w-28 justify-center">{`${
                    index + 1
                  }`}</td>
                  <td className="py-1 w-64  flex justify-center items-center">
                    {fName}
                  </td>
                  <td className="py-1 w-64  flex justify-center items-center">
                    {lName}
                  </td>
                  <td className="py-1 w-64   flex justify-center items-center">
                    {dateOfRegistration}
                  </td>
                  <td className="py-1 w-48  flex justify-center items-center ">
                    <StatusPill status={status} />
                  </td>
                  <td className="py-1 w-64 ">
                    <CTAButton _id={_id} contact={email} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentsAdminTable;
