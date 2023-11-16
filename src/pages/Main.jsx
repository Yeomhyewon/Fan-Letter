import React, { useState } from "react";
import styled from "styled-components";
import Form from "components/Form";
import Letters from "components/Letters";
import { v4 as uuidv4 } from "uuid";

const Main = ({ letter, setLetter }) => {
  // 색별로 나눔
  const mumberColor = [
    "#B4E4FF",
    "#192655",
    "#FF8080",
    "#FFFB73",
    "#D8B4F8",
    "#FFCECE",
  ];

  const getMumberName = (color) => {
    switch (color) {
      case "#B4E4FF":
        return "효정";
      case "#192655":
        return "미미";
      case "#FF8080":
        return "유아";
      case "#FFFB73":
        return "승희";
      case "#D8B4F8":
        return "유빈";
      case "#FFCECE":
        return "아린";
      default:
        return false;
    }
  };

  // 펜레터

  // 닉네임, 내용, 멤버
  const [userNickname, setUserNickname] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("효정");
  //팬레터 없는 멤버 이름
  const [clickM, setClickM] = useState("");
  // console.log(clickM);

  const onChangeNickname = (e) => {
    setUserNickname(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onChangeMember = (e) => {
    // console.log(e.target.value);
    setMember(e.target.value);
  };

  //날짜 생성
  const today = new Date();

  // console.log(setMember);
  // 클릭 시 펜레터 추가
  const clickNewLetterHandler = (e) => {
    const newLetter = {
      createdAt:
        today.getFullYear() +
        "년 " +
        Number(today.getMonth() + 1) +
        "월 " +
        today.getDate() +
        "일 " +
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds(),
      userNickname: userNickname,
      avatar: "/assets/img/Avatar.png",
      content,
      writedTo: member,
      id: uuidv4(),
    };
    if (userNickname === "" || content === "") {
      alert("닉네임 또는 내용을 입력해주세요.");
      return false;
    } else if (userNickname.length > 8) {
      alert("닉네임은 최대 8자까지 가능합니다.");
      return false;
    } else if (content.length > 200) {
      alert("내용은 최대 200자까지 가능힙니다.");
      return false;
    }
    e.preventDefault();
    setUserNickname("");
    setContent("");
    setLetter([...letter, newLetter]);
  };

  // 삭제된 팬레터 리스트

  // console.log(delLetter.state.content);

  const [navColor, setNavColor] = useState("");

  // 필터링 된 멤머별 펜레터
  const [filterLetter, setfilterLetter] = useState([]);

  // 클릭 시 색 바뀌게, 멤버별 펜레터만 보이게
  const clickMColorChange = (color) => {
    setClickM(getMumberName(color));
    const newletter = letter.filter((letter) => {
      return letter.writedTo === getMumberName(color);
    });
    setfilterLetter(newletter);
    setNavColor(color);
    // setLetter(memberletter);
  };
  // console.log(letter);
  return (
    // Main 부분
    <>
      <StDiv $justify="center">
        <StImg src="/assets/img/Logo.png" />
      </StDiv>
      <nav>
        <StDiv $justify="space-evenly" $margin="20px">
          {mumberColor.map((color) => {
            // console.log(color);
            return (
              <StList
                $bordercolor={color}
                key={color}
                onClick={() => {
                  clickMColorChange(color);
                  // console.log(color);
                }}
                // style={{
                //   backgroundColor: `${navColor === color ? color : ""}`,
                //   color: `${navColor === color ? "white" : ""}`,
                // }}
                color={`${navColor === color ? "white" : ""}`}
                $bgcolor={`${navColor === color ? color : ""}`}
              >
                {getMumberName(color)}
              </StList>
            );
          })}
        </StDiv>
      </nav>
      {/*펜레터 등록 부분*/}
      <Form
        clickNewLetterHandler={clickNewLetterHandler}
        userNickname={userNickname}
        content={content}
        member={member}
        onChangeContent={onChangeContent}
        onChangeMember={onChangeMember}
        onChangeNickname={onChangeNickname}
      />
      {/*펜레터 부분*/}

      <div>
        {filterLetter.length === 0 ? (
          <LetterNone>
            {clickM}에게 등록된 팬레터가 없습니다! 첫 번째 팬레터의 주인공이
            되어주세요!
          </LetterNone>
        ) : (
          filterLetter.map((letter) => {
            // console.log(letter.userNickname);
            // console.log(letter);
            return (
              <Letters
                letter={letter}
                id={letter.id}
                createdAt={letter.createdAt}
                userNickname={letter.userNickname}
                avatar={letter.avatar}
                content={letter.content}
                key={letter.id}
              />
            );
          })
        )}
      </div>
    </>
  );
};

const StImg = styled.img`
  width: 120px;
`;

const StDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.$justify};
  margin: ${(props) => props.$margin};
  padding: 15px;
  list-style: none;
`;

const StList = styled.li`
  padding: 10px 25px;
  border: 1px solid ${(props) => props.$bordercolor};
  border-radius: 10px;
  cursor: pointer;
  color: ${(props) => props.color};
  background-color: ${(props) => props.$bgcolor};

  transition: all 0.4s;

  &:hover {
    background-color: ${(props) => props.$bordercolor};
    color: white;
  }
`;

const LetterNone = styled.div`
  text-align: center;
  font-size: x-large;
  margin-top: 100px;
`;
export default Main;
