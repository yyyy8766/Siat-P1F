// 목표 달성 페이지 테이블

import React from "react";
import style from "./DdayTable.module.css";
import CustomMainPageDiv from "../component/CustomMainPageDiv";
import CustomMainPageP from "../component/CustomMainPageP";


function DdayTable(props){

    // array1 에 작성 날짜, 작업명, D-day 데이터 필요
    const array1 = [ 
        {text1:'2023년 8월 3일', text2:'컴포넌트 작업', text3:'D-2'},
        {text1:'2023년 8월 7일', text2:'컨테이너 작업', text3:'D-4'},
        {text1:'2023년 8월 8일', text2:'페이지 작업', text3:'D-5'},
        {text1:'2023년 8월 13일', text2:'라우팅 작업', text3:'D-8'},
        {text1:'2023년 8월 17일', text2:'동기/비동기 통신 작업', text3:'D-10'},
        {text1:'2023년 8월 20일', text2:'Jest테스팅', text3:'D-11'},
        {text1:'2023년 8월 22일', text2:'빌드 작업', text3:'D-18'}
    ]

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     axios.post("http://localhost:8080/api/login/search/id", null,  {params:{userEmail : userEmail}})
    //     .then(res => {
    //         if(res.data.isValid){
    //             navigate("/findidresult", {state : { username : res.data.username}});
    //         }else{
    //             setDisabled(true);
    //             setEmailError(<CustomLoginPageP $errorMessage $findidp>이메일을 다시 입력해주세요.</CustomLoginPageP>);
    //         }
    //     })
    //     .catch(err => {
    //         // 에러 핸들링을 위해 errorFunc 유틸리티 사용
    //         errorFunc('dupleAxios', err)
    //     })

    return(
        <div className={style.DdayTable}>
            <div className={style.MonthYear}>
                {/* 월, 년도 데이터 받아오기 필요 */}
                <CustomMainPageDiv $month>{props.month}</CustomMainPageDiv>
                <CustomMainPageDiv $year>{props.year}</CustomMainPageDiv>    
            </div>
            <div className={style.Table}>
                <div className={style.TableHeader}>
                    <CustomMainPageP $tableheader>작성 날짜</CustomMainPageP>
                    <CustomMainPageP $tableheader> 작업명</CustomMainPageP>
                    <CustomMainPageP $tableheader>D-DAY</CustomMainPageP>
                </div>
                <div className={style.TableMain}>
                    {array1.map((str,i) => ( <div key={i} className={style.TableInner}>
                        <CustomMainPageDiv $t1>{str.text1}</CustomMainPageDiv>
                        <CustomMainPageDiv $t1>{str.text2}</CustomMainPageDiv>
                        <CustomMainPageDiv $t2>{str.text3}</CustomMainPageDiv>
                                </div>))}
                </div>
            </div>
        </div>
    )
}

export default DdayTable;