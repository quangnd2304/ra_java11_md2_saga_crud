import { instances } from "./axios"
// Xây dựng các service để gọi API - xử lý bất đồng bộ
export const USER_GET_SERVICE = async () => {
    // Gọi và đợi kết quả trả về --> http://localhost:3001/users
    let response = await instances.get("users");
    // Trả về danh sách user lấy được từ api
    return response.data;
}
export const USER_POST_SERVICE = async (newUser) => {
    await instances.post("users", newUser);
}
export const USER_PATCH_SERVICE = async (updateUser) => {
    await instances.patch("users/" + updateUser.id, updateUser);
}
export const USER_DELETE_SERVICE = async (id) => {
    await instances.delete("users/" + id);
}