// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import EmployeeForm from "./EmployeeForm";

// interface Employee {
//   id: number;
//   employeeName: string;
//   dateOfBirth: string;
//   image: string;
//   email: string;
// }

// export default function EmployeeTable() {
//   const [listEmployee, setListEmployee] = useState<Employee[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [editingId, setEditingId] = useState<number | null>(null);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get("/api/employee");
//         setListEmployee(response.data);
//       } catch (error) {
//         setError("Không tìm thấy dữ liệu");
//         console.error(error);
//       }
//     };

//     fetchEmployees();
//   }, [listEmployee]);

//   const handleEdit = (id: number) => {
//     setEditingId(id);
//   };

//   const handleDelete = async (id: number) => {
//     if (confirm("Bạn có chắc chắn muốn xóa nhân viên này?")) {
//       try {
//         const response = await axios.delete(`/api/employee/${id}`);
//         console.log(response.data);

//         if (response.data.message === "xóa thành công") {
//           // Cập nhật danh sách sau khi xóa
//           setListEmployee(
//             listEmployee.filter((employee) => employee.id !== +id)
//           );
//         } else {
//           setError("Có lỗi xảy ra khi xóa nhân viên.");
//         }
//       } catch (error) {
//         setError("Có lỗi xảy ra khi xóa nhân viên.");
//         console.error(error);
//       }
//     }
//   };

//   const handleSuccess = () => {
//     // Sau khi cập nhật thành công, reload danh sách nhân viên
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get("/api/employee");
//         setListEmployee(response.data);
//       } catch (error) {
//         setError("Không tìm thấy dữ liệu");
//         console.error(error);
//       }
//     };

//     fetchEmployees();
//   };

//   return (
//     <div className="relative">    
//       <div className="overflow-x-auto mt-4">
//         {error && <div className="text-red-500">{error}</div>}
//         <table className="min-w-full bg-white border border-gray-200">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b">STT</th>
//               <th className="py-2 px-4 border-b">Tên nhân viên</th>
//               <th className="py-2 px-4 border-b">Ngày sinh</th>
//               <th className="py-2 px-4 border-b">Hình ảnh</th>
//               <th className="py-2 px-4 border-b">Email</th>
//               <th className="py-2 px-4 border-b">Chức năng</th>
//             </tr>
//           </thead>
//           <tbody>
//             {listEmployee.map((employee, index) => (
//               <tr key={employee.id}>
//                 <td className="py-2 px-4 border-b text-center">{index + 1}</td>
//                 <td className="py-2 px-4 border-b">{employee.employeeName}</td>
//                 <td className="py-2 px-4 border-b text-center">
//                   {employee.dateOfBirth}
//                 </td>
//                 <td className="py-2 px-4 border-b text-center">
//                   <img
//                     className="w-[50px] h-[50px] rounded-full"
//                     src={employee.image}
//                     alt={employee.employeeName}
//                   />
//                 </td>
//                 <td className="py-2 px-4 border-b">{employee.email}</td>
//                 <td className="py-2 px-4 border-b text-center">
//                   <button
//                     className="text-blue-500 hover:text-blue-700 mr-2"
//                     onClick={() => handleEdit(employee.id)}
//                   >
//                     Sửa
//                   </button>
//                   <button
//                     className="text-red-500 hover:text-red-700"
//                     onClick={() => handleDelete(employee.id)}
//                   >
//                     Xóa
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div style={{ position: "absolute", top: "100px", right: "100px" }}></div>
//       {editingId !== null && (
//         <EmployeeForm employeeId={editingId} onSuccess={handleSuccess} />
//       )}
//     </div>
//   );
// }
