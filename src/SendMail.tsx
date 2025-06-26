import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { EmailTemplate, Properties } from './EmailTemplate';


export const sendEmail = async ( { name, email, subject, message}: Properties) => {
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    const emailTmp = await render(<EmailTemplate name={name} email={email} subject={subject} message={message} />);

    await transporter.sendMail({
        from: '"Portfolio smaga.me" <noreply@siemv.pl>',
        to: "krzysztof@smaga.me",
        subject: subject,
        html: emailTmp
    });

    console.log("Wysłano!");
}