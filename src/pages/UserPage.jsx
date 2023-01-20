// import React from 'react';
// import axios from 'axios';
// import { useEffect , useState} from 'react';
// import { Suspense } from 'react';
// import { Link } from 'react-router-dom';

// const tableHeader =[
//     {title: 'ID'},
//     {title: 'NAME'},
//     {title: 'EMAIL'},
//     {title: 'ROLE'},
//     {title: 'EDIT'},
//     {title: 'DELETE'}
// ]

// export default function Users (){

//   const [persons ,setPerson] = useState(
//     []
//   )

//   useEffect(()=>{
//       axios.get('http://localhost:5000/users')
//       // .then((res)=> res.json())
//       .then(res => {

//         setPerson(res.data );

//       })
//   },[])
//   const handleSubmit = () => {
//     const url = 'http://localhost:5000/users'
//     const Credentials = [username, email , role ]
//     axios.post(url, Credentials)
//         .then(response => {
//             const result = response.data;
//             const { status, message, data } = result;
//             if (status !== 'SUCCESS') {
//                 alert(message, status)
//             }
//             else {
//                 alert(message)
//                 window.location.reload()
//             }
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }
// const handleEdit = () =>{
//     const url = `http://localhost:5000/users${id}`
//     const Credentials = [username, email , role ]
//     axios.put(url, Credentials)
//         .then(response => {
//             const result = response.data;
//             const { status, message } = result;
//             if (status !== 'SUCCESS') {
//                 alert(message, status)
//             }
//             else {
//                 alert(message)
//                 window.location.reload()
//             }
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }
// //handle Delete Function
// const handleDelete = () =>{
//     const url = `http://localhost:5000/users${id}`
//     axios.delete(url)
//         .then(response => {
//             const result = response.data;
//             const { status, message } = result;
//             if (status !== 'SUCCESS') {
//                 alert(message, status)
//             }
//             else {
//                 alert(message)
//                 window.location.reload()
//             }
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

//     return (
//       <>

// <div className="p-1.5 sm:w-screen h-48 items-center justify-center  mb-10">
//     <h3 className='text-center text-2xl text-bold m-2'>USERS</h3>
//                     <div className=" overflow-auto h-full scroll w-full border rounded-lg">
//                         <table className=" divide-y divide-gray-200 scroll">
//                             <thead className="bg-gray-50">
//                                 <tr>
//                                    {tableHeader.map((header,index)=>{
//                                     return(
//                                        <th key={index} scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase " >
//                                           {header.title}
//                                        </th>
//                                     )
//                                    })}

//                                 </tr>
//                             </thead>
//                             <tbody className=" divide-y divide-gray-200">

//                             {persons.map((person,index) => {
//                                      return(

//                                 <tr key={person.email}>

//                                     <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
//                                         {index + 1}
//                                     </td>

//                                     <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap" >
//                                         {person.name}
//                                     </td>
//                                     <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap" >
//                                         {person.email}
//                                     </td>
//                                     <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap" >
//                                         {person.role}
//                                     </td>
//                                     <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
//                                         <Link className="text-green-500 hover:text-green-700" to="/userEdit" >
//                                             Edit
//                                         </Link>
//                                     </td>
//                                     <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
//                                         <Link className="text-red-500 hover:text-red-700" to="/userDelete">
//                                             Delete
//                                         </Link>
//                                     </td>

//                                 </tr>

//                                      )})}

//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//       </>
//     )
//   }

import React from "react";

const UserPage = () => {
  return <div>UserPage</div>;
};

export default UserPage;
