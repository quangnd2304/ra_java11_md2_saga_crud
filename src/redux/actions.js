import * as actionTypes from "./constants/actionTypes";
// Tạo action để yêu cầu lấy dữ liệu từ JSON-Server
//function = (data)=>{return object(type,payload)}
export const act_get_user = () => {
    return {
        type: actionTypes.USER_GET
    }
}
export const act_user_success = (actionType, data) => {
    return {
        type: actionType,
        payload: data
    }
}

export const act_create_user = (newUser) => {
    return {
        type: actionTypes.USER_POST,
        payload: newUser
    }
}
