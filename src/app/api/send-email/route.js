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
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
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
