import nodemailer from 'nodemailer'

export default class MailingService {
    constructor(){
        this.client = nodemailer.createTransport({
            service:'gmail',
            port: 587,
            auth: {
                user: 'fbcontactoport@gmail.com',
                pass: process.env.GMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false
            }})
    }
    sendSimpleMail = async ({from,to,subject,html}) => {
    let result = await this.client.sendMail({
        from,
        to,
        subject,
        html
    })
    return result
    }
}