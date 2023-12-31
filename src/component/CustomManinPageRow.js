import React from 'react';
import styled from 'styled-components';

const obj = {
  myPage : {
    keyDiv : `
    width: 10rem;
    color: #8DCBE6;
    margin-left : 1rem;
    font-family: Noto Sans;
    font-size: 1rem; /* 1.25rem * 0.8 */
    font-style: normal;
    font-weight: 500;
    line-height: 1.05rem; 
    letter-spacing: 0.02rem; 
    `,
    customH3 : `
    color: var(--yoda-admin-template-blacks-b-100, #2D3436);
    font-family: Noto Sans;
    font-size: 1rem; 
    font-style: normal;
    font-weight: 400;
    line-height: 1.05rem; 
    letter-spacing: 0.02rem; 
    `,
    outDiv : `
    height: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem; 
    align-self: stretch;
    `
  },
  searchPage : {
    outDiv : `
    display: flex;
   
    align-items: center;
    align-self: stretch;
    border-radius: 0.35rem; 
    background: #FFF;
    box-shadow: 0.15rem 0.2rem 0.3rem 0px rgba(0, 0, 0, 0.10); 
    `,
    keyDiv : `
    display: flex;
    width: 9rem; 
    padding: 0.6rem 0rem; 
    justify-content: center;
    align-items: center;
    gap: 0.5rem; 
    `,
    customH3 :`
    color: #3E54AC;
    font-family: Noto Sans;
    font-size: 0.95rem; 
    font-style: normal;
    font-weight: 400;
    line-height: 0rem; 
    letter-spacing: 0.06rem; 
    `
  }
};

const KeyDiv = styled.div`
${prop => obj[prop.$page].keyDiv}
`;

const CustomH3 = styled.h3`
${prop => obj[prop.$page].customH3}
display: ${props => (props.$mode ? 'none' : 'block')};
`;

const OutDiv = styled.div`
${prop => obj[prop.$page].outDiv}
`;
const buttonDiv = styled.div`
display : ${prop => obj[prop.$isButtonVisible]? 'block' : 'none'}
`;

const CustomInput = styled.input`
flex: 1 0 0;
border-radius: 0.2rem; /* 0.25rem * 0.8 */
border: 1px solid #000;
display: ${props => (props.$mode ? 'block' : 'none')};
`;

const CustomMainPageRow = ({title, value, $mode, onChange, $page, pattern, $inputTitle, $isButtonVisible, $checked}) => {
  // title : 제목
  // value : 내용
  // $mode : 상태 전환
  // onChange : 이벤트
  
  return (
    <OutDiv $page={$page}>
      <KeyDiv $page={$page}>{title}</KeyDiv>
      <CustomH3 $page={$page} $mode={$mode}>{value}</CustomH3>
      <CustomInput type="text" $mode={$mode} value={value} onChange={(e) => onChange(e.target.value)}
      pattern={pattern} title={$inputTitle}></CustomInput>
      <buttonDiv $isButtonVisible={$isButtonVisible}>
      { $checked ? <img src='/asset/img/check1' alt="Checked"></img>
       : <img src='/asset/img/check0' alt="Unchecked"></img> }
        <img src='/asset/img/delIcon'></img>
      </buttonDiv>
    </OutDiv>
  );
};

CustomMainPageRow.defaultProps = {
  $page : "myPage",
  $isButtonVisible : false,
  $checked : false
};

export default CustomMainPageRow;
