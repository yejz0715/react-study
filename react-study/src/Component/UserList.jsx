import React from "react";
import { useState } from "react";

function UserList() {
  // 사용자 목록을 담을 리스트와 입력받은 이름 필요 -> useState 사용
  const [list, setList] = useState([]); //사용자 목록은 배열로 ..
  const [name, setName] = useState("");
  //const[상태, 상태함수]=useState(초기값)

  // 추가 버튼을 눌렀을 때 작동할 함수
  function handleAddUser() {
    setList([...list, name]); //리스트에 새로 입력한 name과 전에 있던 리스트
    setName(""); //입력한 name은 리스트로 이동하고 입력창은 리셋
  }

  // 이름이 변경될 때 실행될 함수 =  onChange={(e) => setName(e.target.value)}
  // function handleOnChangeInput() {
  //
  // }
  function handleDeleteUser(target) {
    setList(list.filter((_, index) => index !== target));
    //리스트의 index가 삭제버튼을 누른(target)과 같지 않은 것만 보여줌
    //(삭제버튼 제외한 리스트 나열(조건))
  }

  return (
    <div>
      <h2>UserList</h2>
      <input
        value={name}
        type="text"
        placeholder="이름을 입력하세요."
        onChange={(e) => setName(e.target.value)}
        //변경이 된 event의 target의 value값을 setName에 넣어줌(=변경된 name)
      />
      {/* placeholder 추가할 것 */}
      <button onClick={handleAddUser}>추가</button>
      <ul>
        {/* map메서드를 사용해서 <li><label>예지</label><button>삭제</button></li>형식으로 출력 할 것 + key값 설정할 것 */}
        {
          //jsx에 javascript 사용할 때 { }
          list.map((name, index) => (
            //javascript에 태그 사용할 때 (), 태그가 두개이상일 때 부모태그 필요
            <li key={index}>
              {name}{" "}
              <button onClick={() => handleDeleteUser(index)}>삭제</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default UserList;
