import React from 'react';

const dummyData3 = () => {
  // listDay페이지 더미데이터1
  let arr2 = [
    { // 받는 객체 형식
      tdid: "td1", // 할일 아이디
      month: 1, // 시작 날의 월
      startDate: 1, // 시작날짜
      endDate: 1,   // 끝 날짜
      finishDate: 1, // 실제 완료 날짜
      tdTitle: "title1", // 제목
      tdContent: "content1" // 내용
    },
    {
      tdid: "td2",
      month: 2,
      startDate: 2,
      endDate: 2,
      finishDate: 2,
      tdTitle: "title2",
      tdContent: "content2"
    },
    {
      tdid: "td3",
      month: 3,
      startDate: 3,
      endDate: 3,
      finishDate: 3,
      tdTitle: "title3",
      tdContent: "content3"
    }

  ]
  return arr2;
};

export default dummyData3;