import React from "react";
import PForm from "../../../UI/PForm";
import InputForm from "../../../UI/InputForm";
import CheckBox from "../../../UI/CheckBoxForm";
import Button from "../../../UI/Button";
import AForm from "../../../UI/AForm";

function UserIcon(){
    return (
        <img src="../public/images/UserAccount.png" alt="" />
    )
}

const SignUpForm = () => {

    return(
        <form className="w-full bg-white
            xs:py-10 xs:m-2.5 xs:rounded-lg
            2xs:py-10 2xs:m-2.5 2xs:rounded-lg

            sm:py-10 sm:mx-10 sm:rounded-lg
            2sm:py-10 2sm:mx-50 2sm:rounded-lg
            3sm:py-10 3sm:mx-60 3sm:rounded-lg

            md:py-10 md:mx-100 md:rounded-lg
            2md:py-10 2md:mx-130 2md:rounded-lg
            3md:py-15 3md:mx-130 3md:rounded-lg">
            <section className="w-full flex justify-center items-center flex-col px-10">

                <figure className="
                    xs:h-auto xs:w-30
                    2xs:h-auto 2xs:w-35

                    sm:h-auto sm:w-30
                    2sm:h-auto 2sm:w-35
                    3sm:h-auto 3sm:w-35

                    md:h-auto md:w-30
                    2md:h-auto 2md:w-35
                    3md:h-auto 3md:w-35">
                    <UserIcon />
                </figure>

                <PForm label="Sign" label2=" Up"/>
                <InputForm label="" placeholder="Firstname" type="text"/>
                <InputForm label="" placeholder="Lastname" type="text"/>
                <InputForm label="" placeholder="Email" type="email"/>
                <InputForm label="" placeholder="Password" type="password"/>
                <CheckBox />

                <Button label="Create Account"/>

                <AForm label="I have an Account" />
            </section>
        </form>
    );
};

export default SignUpForm;