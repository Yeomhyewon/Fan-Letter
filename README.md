과제 목적

- props drilling,context API, Redux 를 활용해서 3가지 방법으로 과제를 구현할 수 있다.

기능

1. 팬레터 CRUD(작성, 조회, 수정, 삭제)
2. 아티스트별(멤버별) 팬레터 조회 기능
3. 원하는 아티스트에게 팬레터 등록할 수 있는 기능
4. 팬레터 내용 수정과 삭제

예제 - redux Reducer
팬레터 추가하기

``const ADD_LETTER = "letter/ADD_LETTER";

// 액션생성자 함수
export const addLetter = (payload) => {
return {
type: ADD_LETTER,
payload,
};
};

const letterReducer = (state = initialState.letter, action) => {
switch (action.type) {
case ADD_LETTER:
return [action.payload, ...state];
default:
return state;
}
};

export default letterReducer;``
