// 중앙데이터 관리소를 설정하는 부분
import { createStore } from "redux";
import { combineReducers } from "redux";
import letterReducer from "redux/modules/letter";
import selectedMemberReducer from "redux/modules/selectedMember";

const rootReducer = combineReducers({
  letterReducer,
  selectedMemberReducer,
});
const store = createStore(rootReducer);

export default store;
