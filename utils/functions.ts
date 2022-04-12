import emailjs from "@emailjs/browser";

interface sendEmailInterface {
    templateParams: Record<string, unknown>;
    templateId: string;
}

export const sendEmail = async ({ templateParams = {}, templateId = '' }: sendEmailInterface) => {
    const response = await emailjs.send("service_7eka1j7", templateId, templateParams, "N2Z_3V21QWvkTuyzm");
    return response;
}

interface sendEmailFormInterface {
    templateParams: string;
    templateId: string;
}

export const sendMailForm = async ({ templateParams = '', templateId = '' }: sendEmailFormInterface) => {
    const response = await emailjs
        .sendForm(
            "service_7eka1j7",
            templateId,
            templateParams,
            "N2Z_3V21QWvkTuyzm"
        );
    return response;
}
