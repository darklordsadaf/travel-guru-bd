import React from "react";

const LoginWithOthers = (props) => {
    return (
        <div>
            <div className="form-divider text-center">
                <p>Or</p>
            </div>

            <div className="loginPage-thirdparty-login">
                <button className="btn btn-secondary" onClick={props.facebook}>
                    <span>
                        <img src={require("../../fakeData/resource/Icon/fb.png")} style={{ maxWidth: "35px" }} alt="fb logo" />
                    </span>
                    <span>Continue with Facebook</span>
                </button>
                <button className="btn btn-secondary" onClick={props.google}>
                    <span>
                        <img src={require("../../fakeData/resource/Icon/google.png")} style={{ maxWidth: "32px" }} alt="fb logo" />
                    </span>
                    <span>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default LoginWithOthers;