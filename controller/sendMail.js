const nodemailer = require('nodemailer')

const sendMail = async (req, res) => {

    const { name, email, phone, message } = req.body

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_AUTH
            }
        })
    
    
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Query Respone",
            text: `Hi ${name}, 
                    Thanks for showing interest in my profile. Feel free to contact me for work.`
        }
    
        const mailOptions2 = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "Message from Recruiter",
            text: `From ${name},
                    ${message}
                    
                    
                    ${phone}
                    ${email}`
        }
    
        transporter.sendMail(mailOptions2, (error,infos)=>{
            if(error) return res.status(400).json(error)
            
            transporter.sendMail(mailOptions, (err,info)=>{
                if(err) return res.status(400).json(err.message)
        
                return res.status(200).json("Email sent "+ info.response)
            })
            
        })
    
       
    } catch (error) {
        return res.status(500).json(error.message)
    }

}

module.exports ={sendMail}