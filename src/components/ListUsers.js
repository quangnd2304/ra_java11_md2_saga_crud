import React, { useEffect } from 'react';
import { act_delete_user, act_get_user } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ListUsers() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Gọi action act_get_user khi component mount
    //useEffect
    /*
        useEffect(callback): gọi khi mount và re-render
        useEffect(callback,[]): gọi khi mount
        useEffect(callback,[deps]): gọi khi mount và deps thay đổi 
    */
    useEffect(() => {
        // Thực hiện khi component mount
        dispatch(act_get_user());
    }, []);
    const handleUpdate = (userUpdate) => {
        // Lưu dữ liệu vào localStorage
        localStorage.setItem("userUpdate", JSON.stringify(userUpdate));
        // Chuyển sang UpdateUser Component
        navigate("/updateUser")
    }
    const handleDelete = (id) => {
        dispatch(act_delete_user(id));
    }
    // Lấy state từ store và hiển thị lên component
    const listUser = useSelector(state => state.users);
    let elementListUser = listUser.map((user, index) => {
        return <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.fullname}</td>
            <td>
                <button onClick={() => handleUpdate(user)}>Update</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
        </tr>
    })
    return (
        <div>
            <h2>List Users</h2>
            <table border={"1"}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>User ID</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>FullName</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {elementListUser}
                </tbody>
            </table>
            <button onClick={() => navigate("/newUser")}>Create New User</button>
        </div>
    )
}
