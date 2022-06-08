import React from "react";

function UserListBox() {
  // 사용자 목록을 담을 리스트와 입력받은 이름 필요 -> useState 사용

  // 추가 버튼을 눌렀을 때 작동할 함수
  function handleAddUser() {}

  // 이름이 변경될 때 실행될 함수
  function handleOnChangeInput() {}

  return (
    <div>
      <input type="text" /> {/* placeholder 추가할 것 */}
      <button>추가</button>
      <ul>
        {/* map메서드를 사용해서 <li><label>예지</label><button>삭제</button></li>형식으로 출력 할 것 + key값 설정할 것 */}
        <li>이름</li>
      </ul>
    </div>
  );
}

export default UserListBox;
