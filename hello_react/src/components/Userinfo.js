import React from "react";

const user = {
    Username: "junil",
    email: "junil@gmail.com"
};

function UserInfo(props) { 
    return (
        <>
            <p>사용자이름: {user.Username}</p>
            <p>이메일: {user.email}</p>
            <p>전화번호: {props.phone}</p>
            <p>주소: {props.address}</p>
            <p>이름: {props.name}</p>
        </>
    );
}

export default UserInfo;