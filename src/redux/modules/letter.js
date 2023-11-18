const initialState = {
  letter: [
    {
      createdAt: "2023년 11월 03일 02:07:09",
      userNickname: "Dr. Clint Christiansen",
      avatar: "/assets/img/Avatar.png",
      content:
        "승희1 Vitae recusandae tenetur debitis impedit ut dolorem atque reprehenderit magnam. Cum dolor magnam commodi qui perferendis. Vel temporibus soluta. Eum delectus blanditiis. Neque dicta non quod ex. Maiores aspernatur fuga reprehenderit a magni eaque fuga voluptatum hic.",
      writedTo: "승희",
      id: "1",
    },
    {
      createdAt: "2023년 11월 02일 23:13:18",
      userNickname: "Chad Graham",
      avatar: "/assets/img/Avatar.png",
      content:
        "유아 1 Ipsam aspernatur nostrum eos unde velit molestiae dolorem. Tenetur ullam nostrum pariatur. Et in eos. Harum commodi ipsa quaerat aspernatur quod dignissimos quae quidem sapiente.",
      writedTo: "유아",
      id: "2",
    },
    {
      createdAt: "2023년 11월 02일 11:25:37",
      userNickname: "Tommy Abshire",
      avatar: "/assets/img/Avatar.png",
      content:
        "효정1 Itaque nihil quae neque itaque. Non a officiis ducimus nemo consectetur. Ducimus libero voluptatum consequuntur.",
      writedTo: "효정",
      id: "3",
    },
    {
      createdAt: "2023년 11월 02일 16:06:34",
      userNickname: "Max Mayert",
      avatar: "/assets/img/Avatar.png",
      content:
        "미미1 Sint qui eligendi repudiandae placeat maiores repudiandae assumenda repudiandae. Distinctio commodi iste. Qui architecto iusto.",
      writedTo: "미미",
      id: "4",
    },
    {
      createdAt: "2023년 11월 03일 05:40:17",
      userNickname: "Olga Christiansen",
      avatar: "/assets/img/Avatar.png",
      content:
        "2 Molestiae saepe reiciendis saepe natus quo occaecati. Vel vero illum quo. Ducimus maiores porro optio illum officia nam. Cum possimus aut consequatur eaque libero ad nihil pariatur officiis.",
      writedTo: "아린",
      id: "5",
    },
  ],
};

// 리듀서 : 'state에 변화를 일으키는' 함수
// state를 action의 type에 따라 변경하는 함수

const ADD_LETTER = "letter/ADD_LETTER";
const DELETE_LETTER = "letter/DELETE_LETTER";
const EDIT_LETTER = "letter/EDIT_LETTER";

// 액션생성자 함수
export const addLetter = (payload) => {
  return {
    type: ADD_LETTER,
    payload,
  };
};

export const deleteLetter = (payload) => {
  return {
    type: DELETE_LETTER,
    payload,
  };
};

export const editLetter = (payload) => {
  return {
    type: EDIT_LETTER,
    payload,
  };
};

// input : state, action
const letterReducer = (state = initialState.letter, action) => {
  switch (action.type) {
    case ADD_LETTER:
      return [...state, action.payload];
    case DELETE_LETTER:
      const filterLetter = state.filter((L) => {
        return L.id !== action.payload;
      });
      return filterLetter;
    case EDIT_LETTER:
      return state.map((L) => {
        return L.id === action.payload.id
          ? { ...L, content: action.payload.content }
          : L;
      });
    default:
      return state;
  }
};

export default letterReducer;
