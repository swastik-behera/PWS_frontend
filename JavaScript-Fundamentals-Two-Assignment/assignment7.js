function generateOTP() {
    const otpDigits = "0123456789"
    let otp = ""

    for (let i = 0; i < 4; i++) {
        
        const randomOTP = Math.floor(Math.random() * otpDigits.length);
        otp += otpDigits[randomOTP];
    }

    return otp;
}

console.log(`Here is your OTP : ${generateOTP()}`);



/*====================
Output:
    Here is your OTP : 9031
====================*/