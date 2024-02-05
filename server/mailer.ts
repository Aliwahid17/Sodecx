import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    port: parseInt(process.env.NEXT_PRIVATE_SMTP_PORT!),
    host: process.env.NEXT_PRIVATE_SMTP_SERVER,
    auth: {
        user: process.env.NEXT_PRIVATE_EMAIL,
        pass: process.env.NEXT_PRIVATE_PASSWORD,
    },
    secure: true,
})