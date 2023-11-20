과제 목적

- props drilling,context API, Redux 를 활용해서 3가지 방법으로 과제를 구현할 수 있다.

기능

1. 아티스트별(멤버별) 팬레터 조회 기능
2. 원하는 아티스트에게 팬레터 등록할 수 있는 기능
3. 팬레터 내용 수정과 삭제

예제 코드

```
  // 수정 기능
  // 수정할 내용에 대한 state를 만들어줌
  const [editClicked, setEditClicked] = useState(false);
  const [editContent, setEditContent] = useState(filterLetter[0]?.content);

  // 누르면 textarea 나오게
  const clickEditArea = () => {
    setEditClicked(true);
  };

  // textarea onChange
  const onChangeEdit = (e) => {
    setEditContent(e.target.value);
  };

  //완료 누르면 적용
  //내용을 바꾼 새로운 객체를 만들고 더미데이터에 넣고 home으로 이동시킨다.
  const submitEditContent = () => {
    if (filterLetter[0].content === editContent) {
      alert("수정된 부분이 없습니다.");
      setEditClicked(true);
      return false;
    }
    const letter = {
      ...letterDetail[0],
      content: editContent,
    };

    setLetter((letters) => {
      const filtered = letters.filter((L) => {
        return L.id !== letter.id;
      });
      return [...filtered, letter];
    });
    navigator(-1);
  };

```
