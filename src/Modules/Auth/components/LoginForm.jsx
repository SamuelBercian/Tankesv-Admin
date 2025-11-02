import React from "react";
import InputForm from "../../../UI/InputForm";
import PForm from "../../../UI/PForm";
import Button from "../../../UI/Button";
import CheckBox from "../../../UI/CheckBoxForm";
import AForm from "../../../UI/AForm";

function UserIcon(){
    return (
        <img src="../public/images/UserIcon3.png" alt="" />
    )
}

const LoginForm = () => {

    return (
        <form className="w-full bg-white
            xs:py-10 xs:m-2.5 xs:rounded-lg
            2xs:py-10 2xs:m-2.5 2xs:rounded-lg
            sm:py-20 sm:m-2.5 sm:rounded-lg">
            <section className="w-full flex justify-center items-center flex-col px-10">

                <figure className="
                    xs:h-auto xs:w-40
                    2xs:h-auto 2xs:w-45">
                    <UserIcon/>
                </figure>

                <PForm label="Log" label2=" In"/>
                <InputForm label="" placeholder="Email" type="email"/>
                <InputForm label="" placeholder="Password" type="password"/>
                <CheckBox />

                <Button label="Login"/>

                <AForm />
            </section>
        </form>
    );
};

export default LoginForm;