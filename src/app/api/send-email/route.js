import { Resend } from 'resend';

const resend = new Resend('re_MgDUH8YV_CRWRxkk49hz1Gm69whuaG6gt');

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        const { data, error } = await resend.emails.send({
            from: "Hybix <noreply@hybixgroups.com>",
            to: ["faseedmohamed6@gmail.com"],
            subject: `New Message from ${name} - Renomate Contact Form`,
            html: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>New Contact Form Submission</title>
  </head>
  <body style="margin:0; padding:0; background:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">
            
            <!-- Header -->
            <tr>
              <td style="background:#2563eb; padding:20px; text-align:center;">
                <h2 style="margin:0; color:#ffffff;">New Contact Form Submission</h2>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:24px; color:#111827;">
                <p style="margin:0 0 10px;"><strong>Name:</strong> ${name}</p>
                <p style="margin:0 0 10px;">
                  <strong>Email:</strong>
                  <a href="mailto:${email}" style="color:#2563eb; text-decoration:none;">
                    ${email}
                  </a>
                </p>

                <p style="margin:20px 0 8px;"><strong>Message:</strong></p>
                <div style="background:#f1f5f9; padding:16px; border-radius:8px; white-space:pre-wrap; line-height:1.6;">
                  ${message}
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f8fafc; padding:16px; text-align:center; font-size:12px; color:#6b7280;">
                Sent from <strong>Renomate Contact Form</strong>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`,
        });

        if (error) {
            console.error('Resend error:', error);
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ success: true, data });
    } catch (error) {
        console.error('Server error:', error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
