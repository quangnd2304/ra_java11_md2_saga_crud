import { createStore, applyMiddleware } from "redux";
import createReduxMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import { rootSaga } from "../saga";
// Tạo đối tượng redux-saga của ứng dụng
const sagaMiddleware = createReduxMiddleware();
//Tạo store và chấp nhận sagaMiddleware là middleware của Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// Chạy rootSaga để lọc các action
sagaMiddleware.run(rootSaga);
export default store;