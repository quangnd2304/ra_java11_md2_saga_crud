import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { act_update_user } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

export default function UpdateUser() {
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");
    const [id, setId] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        // lấy dữ liệu từ localStorage và lưu vào email, fullname, id
        let user = JSON.parse(localStorage.getItem("userUpdate"));
        setEmail(user.email);
        setFullname(user.fullname);
        setId(user.id);
    }, []);
    const handleUpdate = () => {
        //dispatch action
        dispatch(act_update_user({ id, email, fullname }));
        //navigate ListUser
        navigate("/");
    }
    return (
        <div>
            <h2>Update User</h2>
            <label htmlFor='userId'>UserId</label>
            <input id='userId' name='userId' value={id} onChange={(e) => setId(e.target.value)} readOnly /><br />
            <label htmlFor='email'>Email</label>
            <input id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            <label htmlFor='fullname'>Full Name</label>
            <input id='fullname' name='fullname' value={fullname} onChange={(e) => setFullname(e.target.value)} /><br />
            <button onClick={handleUpdate}>Update</button>
        </div>
    )
}
