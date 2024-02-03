import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: process.env.NEXT_PRIVATE_EMAIL,
        pass: process.env.NEXT_PRIVATE_PASSWORD,
    },
    secure: true,
})