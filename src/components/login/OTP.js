import OTPInput from "otp-input-react";
import { useState } from "react";

const OTP = () => {
  const [OTP, setOTP] = useState("");
  console.log(OTP);
  return (
    <>
      <OTPInput
        value={OTP}
        onChange={setOTP}
        autoFocus
        OTPLength={5}
        otpType='number'
        disabled={false}
        secure
        inputStyles={{
          margin: "2px",
          backgroundColor: "#dddd",
          fontSize: "2rem",
        }}
      />
      {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
    </>
  );
};

export default OTP;
