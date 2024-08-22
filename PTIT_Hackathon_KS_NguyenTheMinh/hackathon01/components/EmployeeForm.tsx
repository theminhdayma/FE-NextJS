// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";

// interface Employee {
//   id: number;
//   employeeName: string;
//   dateOfBirth: string;
//   image: string;
//   email: string;
// }

// interface EmployeeFormProps {
//   employeeId?: number;
//   onSuccess?: () => void;
// }

// export default function EmployeeForm({ employeeId, onSuccess }: EmployeeFormProps) {
//   const [formData, setFormData] = useState({
//     employeeName: "",
//     dateOfBirth: "",
//     image: "",
//     email: "",
//   });
//   const [error, setError] = useState<string | null>(null);
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     if (employeeId) {
//       // Nếu có employeeId, gọi API để lấy thông tin nhân viên
//       const fetchEmployee = async () => {
//         try {
//           const response = await axios.get(`/api/employee/${employeeId}`);
//           if (response.data.data) {
//             setFormData(response.data.data);
//             setIsEditing(true);
//           } else {
//             setError(response.data.message || "Không tìm thấy nhân viên");
//           }
//         } catch (error) {
//           setError("Có lỗi xảy ra khi lấy thông tin nhân viên.");
//         }
//       };
//       fetchEmployee();
//     } else {
//       // Nếu không có employeeId, reset form
//       setFormData({
//         employeeName: "",
//         dateOfBirth: "",
//         image: "",
//         email: "",
//       });
//       setIsEditing(false);
//     }
//   }, [employeeId]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validateData = () => {
//     const { employeeName, dateOfBirth, image, email } = formData;
//     const currentDate = new Date();
//     const birthDate = new Date(dateOfBirth);

//     if (!employeeName || !dateOfBirth || !image || !email) {
//       return "Vui lòng nhập đầy đủ thông tin.";
//     }

//     if (birthDate > currentDate) {
//       return "Năm sinh không được lớn hơn thời gian hiện tại.";
//     }

//     return null;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const errorMessage = validateData();
//     if (errorMessage) {
//       setError(errorMessage);
//       return;
//     }

//     try {
//       if (isEditing) {
//         // Cập nhật thông tin nhân viên
//         const response = await axios.put(`/api/employee/${employeeId}`, formData);
//         if (response.data.message === "cập nhập thành công") {
//           alert("Cập nhật nhân viên thành công!");
//         } else {
//           setError(response.data.message || "Có lỗi xảy ra khi cập nhật nhân viên.");
//         }
//       } else {
//         // Thêm nhân viên mới
//         const response = await axios.post("/api/employee", formData);
//         if (response.data.error) {
//           setError(response.data.error);
//           return;
//         }
//         alert("Thêm nhân viên thành công!");
//       }

//       // Reset form sau khi cập nhật hoặc thêm
//       setFormData({
//         employeeName: "",
//         dateOfBirth: "",
//         image: "",
//         email: "",
//       });
//       setError(null);
//       setIsEditing(false);
//       if (onSuccess) onSuccess(); // Gọi hàm onSuccess nếu có
//     } catch (error) {
//       setError("Có lỗi xảy ra khi thêm hoặc cập nhật nhân viên.");
//       console.error(error);
//     }
//   };

//   return (
//     <form className="w-[500px] bg-white p-4 rounded shadow-md" onSubmit={handleSubmit}>
//       {error && <div className="text-red-500 mb-4">{error}</div>}
//       <div className="mb-4">
//         <label className="block text-gray-700">Tên nhân viên</label>
//         <input
//           type="text"
//           name="employeeName"
//           value={formData.employeeName}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Ngày sinh</label>
//         <input
//           type="date"
//           name="dateOfBirth"
//           value={formData.dateOfBirth}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Hình ảnh</label>
//         <input
//           type="text"
//           name="image"
//           value={formData.image}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border rounded"
//         />
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//       >
//         {isEditing ? "Cập nhật" : "Thêm"}
//       </button>
//     </form>
//   );
// }
