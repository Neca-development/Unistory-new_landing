/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable unused-imports/no-unused-vars */
import type { NextApiResponse } from 'next'
import type { NextApiRequest } from 'next/types'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import formidable, { Fields, Files } from "formidable"
import fs from "fs"

dotenv.config()

interface IPreferencesConfig {
  email: string
  phone: string
  telegram: string
  whatsapp: string
  [index: string]: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const form = formidable({multiples: true})

  const formData = new Promise<{fields: Fields, files: Files}>((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        reject("error");
      }
      resolve({ fields, files });
    });
  });  //code from formidable documentation

  const {fields, files} = await formData
  
  const preferencesConfig: IPreferencesConfig = {
    email: 'E-mail', 
    phone: "Phone Number", 
    telegram: "Telegram", 
    whatsapp: "Whatsapp"
  }

  const preferences = []

  const prefFromBody: IPreferencesConfig =  JSON.parse(fields.preferences as string)

  for (let key in prefFromBody) {
    if(prefFromBody[key]) {
      preferences.push(preferencesConfig[key])
    }
  }

  const transporter = nodemailer.createTransport({
    host: 'mx.unistory.app',
    port: 25,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: false,
  })

  let mailData: Mail.Options = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: `Message From ${fields.name}`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Message from ${fields.name}</title>
  <style>
  .text {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
  </style>
</head>
<body>
  <div>
    <p class="text"><strong>Name: </strong>${fields.name}</p>
    <p class="text"><strong>Company: </strong>${fields.company}</p>
    <p class="text"><strong>E-mail: </strong>${fields.email}</p>
    <p class="text"><strong>Phone number: </strong>${fields.phoneNumber}</p>
    <p class="text"><strong>Project description: </strong>${fields?.description}</p>
    <p class="text"><strong>Contact preference: </strong>
      ${!!preferences.length ? preferences.join(', ') : 'Not indicated'}
    </p>
    </div>
</body>
</html>
    `,
  }
  
  if(!Array.isArray(files.attachment) && files.attachment?.filepath && files.attachment?.originalFilename) {
    mailData.attachments = [
      {
        filename: files.attachment?.originalFilename,
        content: fs.createReadStream(files.attachment?.filepath)
      },
    ]
  }

  try {
    await transporter.sendMail(mailData)
    res.status(200).json({ message: 'Success' })
  } catch (error: any) {
    res.status(400).json({ message: error.toString() })
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};