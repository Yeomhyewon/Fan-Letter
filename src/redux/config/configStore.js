// 중앙데이터 관리소를 설정하는 부분
import { createStore } from "redux";
import { combineReducers } from "redux";
import letterReducer from "redux/modules/letter";

const rootReducer = combineReducers({
  letterReducer,
});
const store = createStore(rootReducer);

export default store;
