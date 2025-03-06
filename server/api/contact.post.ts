// server/api/contact.post.ts
import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)

        const config = useRuntimeConfig()

        const transporter = nodemailer.createTransport({
            host: config.SMTP_HOST,
            port: config.SMTP_PORT,
            secure: true,
            auth: {
                user: config.SMTP_USER,
                pass: "L00kin9'@"
            }
        })

        await transporter.sendMail({
            from: `"Contact Form" <${config.SMTP_USER}>`,
            to: config.CONTACT_EMAIL,
            subject: `New Contact Form Message: ${body.subject}`,
            text: `
        Name: ${body.name}
        Email: ${body.email}
        Subject: ${body.subject}
        Message: ${body.message}
      `,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Subject:</strong> ${body.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `
        })

        return { success: true, message: 'Email sent successfully' }
    } catch (error) {
        throw createError({
            statusCode: 500,
            message: error instanceof Error ? error.message : 'Failed to send email'
        })
    }
})