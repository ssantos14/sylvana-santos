const router = require('express').Router();

const mailjet = require ('node-mailjet')
    .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)

const sendEmail = () => {
    return mailjet
    .post("send", {'version': 'v3.1'})
    .request({
        "Messages":[
        {
            "From": {
            "Email": "sylvana.e.santos@gmail.com",
            "Name": "Sylvana"
            },
            "To": [
            {
                "Email": "sylvana.e.santos@gmail.com",
                "Name": "Sylvana"
            }
            ],
            "Subject": "Greetings from Mailjet.",
            "TextPart": "My first Mailjet email",
            "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
            "CustomID": "AppGettingStartedTest"
        }
        ]
    });
} 

router.get('/', async (req, res, next) => {
    try {
        const result = await sendEmail();
        res.json(result);
    } catch (err) {
        next(err)
    }
});