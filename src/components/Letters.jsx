import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Letters({ letter, id, createdAt, userNickname, avatar, content }) {
  return (
    <ul id={id} key={id}>
      <LetterCard>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/detail/${letter.id}`}
        >
          <Avatar width="70px" src={avatar} />
          <p>{createdAt}</p>
          <p>{userNickname}</p>
          <TextOverFlow>{content}</TextOverFlow>
        </Link>
      </LetterCard>
    </ul>
  );
}

const LetterCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 20px auto;
  padding: 10px;

  border: 3px solid #b4e4ff;

  border-radius: 15px;
`;

const Avatar = styled.img`
  border-radius: 100%;
`;

const TextOverFlow = styled.p`
  padding: 5px;
  background-color: #1f8ae788;
  border-radius: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export default Letters;
