import * as userServices from "../api/userService";
import { call, put } from 'redux-saga/effects';
import { act_user_success } from "../redux/actions";
import { USER_SUCCESS } from "../redux/constants/actionTypes";
// Các saga kết nối và làm việc service
export const USER_SAGA_GET = function* () {
    try {
        // call(functionName, argument of function)
        let listUser = yield call(userServices.USER_GET_SERVICE);
        //success --> gọi action --> put(action)
        yield put(act_user_success(USER_SUCCESS, listUser));
    } catch (error) {
        console.log("error==>", error);
    }
}
export const USER_SAGA_POST = function* (action) {
    try {
        // Gọi sang service để thêm mới một user
        yield call(userServices.USER_POST_SERVICE, action.payload);
        //Thêm mới thành công ==> USER_SAGA_GET
        yield USER_SAGA_GET();
    } catch (error) {
        console.log("error==>", error);
    }
}