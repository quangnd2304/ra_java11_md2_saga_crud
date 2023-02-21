import axios from 'axios';
// Khởi tạo một đối tượng axios từ đường dẫn của API
export const instances = axios.create({
    baseURL: "http://localhost:3001/"
})