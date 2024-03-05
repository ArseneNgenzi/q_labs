import * as Yup from "yup";

export const ContactSchema =  Yup.object().shape({
    name: Yup.string().required("Names are required"),
    email: Yup.string().email().required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
});