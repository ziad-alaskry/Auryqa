import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: false, // MUST be false for 587
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // important for Windows
  },
})

transporter.verify((error) => {
  if (error) {
    console.error('Mailer error:', error)
  } else {
    console.log('Mailer is ready')
  }
})

export async function sendAdminNotification({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}) {
  if (!process.env.ADMIN_EMAIL) return

  await transporter.sendMail({
    from: `"Auryqa" <${process.env.MAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Smart Home Consultation Request',
    html: `
      <h2>New Consultation</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  })
}

export async function sendUserConfirmation({
  name,
  email,
}: {
  name: string
  email: string
}) {
  await transporter.sendMail({
    from: `"Auryqa" <${process.env.MAIL_USER}>`,
    to: email,
    subject: 'We received your consultation request',
    html: `
      <p>Hello ${name},</p>
      <p>
        Thank you for reaching out to <strong>Auryqa</strong>.
        We’ve received your smart home consultation request and
        will contact you shortly.
      </p>
      <p>
        — Auryqa Team
      </p>
    `,
  })
}
