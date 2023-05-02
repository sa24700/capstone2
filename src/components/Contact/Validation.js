export default function Validation({values}) {
    const errors = {}

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/


    if(values.name === "") {
        errors.name = "Please enter your name.";
    }

    if(values.email === "") {
        errors.email = "Please enter your email."
    }

    if(values.subject === "") {
        errors.subject = "Please enter the subject."
    }


    if(!emailPattern.test(values.email)) {
        errors.email = "Email is not valid."
    } 

}