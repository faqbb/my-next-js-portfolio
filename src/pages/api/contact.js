import MailingService from "@/app/services/mailingService"

const mailHandler = async (req, res) => {
   if (!req.method === "POST") {
        res.status(400).send('Bad request')
   } else {
    try {
        console.log(req.body.message)
        const formData = req.body
        const sender = new MailingService()
        const result = await sender.sendSimpleMail({
            from: `'${formData.name}' <fbcontactoport@gmail.com>`,
            to: 'facundobarberia@gmail.com',
            subject: formData.subject,
            html: `<div>${formData.message}</div>`
        })
        return result
    } catch (error) {
        res.status(404).send(error.message)
    }
   }
} 

export default mailHandler
