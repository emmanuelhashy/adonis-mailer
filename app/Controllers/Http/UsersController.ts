// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
export default class UsersController {
    async sendMail () {
        // Pushed to in-memory queue
        console.log("hellllo")
        const { url } = await Mail.preview((message) => {
            message
              .from('emmanueljohn7442@gmail.com')
              .to('emmanuelhashy@gmail.com')
              .subject('Welcome Onboard!')
              .htmlView('emails/welcome', {
                user: { fullName: 'Some Name' },
                url: 'https://your-app.com/verification-url',
            })
        })
        return `Preview url: ${url}`
    }
}
