import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    console.log('API Route hit:', new Date().toISOString());
    console.log('Environment Key exists:', !!process.env.RESEND_API_KEY);

    try {
        const body = await request.json();
        const { name, email, subject, company, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['anasadbulkadirhussein@gmail.com'],
            subject: `💬 ${name}: ${subject}`,
            html: `
                <div style="font-family: -apple-system, sans-serif; max-width: 480px; margin: 0 auto; background: #f8f9fa; padding: 24px; border-radius: 12px;">
                    
                    <!-- Header -->
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                        <h2 style="margin: 0; color: white; font-size: 18px; font-weight: 600;">New Message</h2>
                        <p style="margin: 6px 0 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">from your portfolio</p>
                    </div>
                    
                    <!-- Info -->
                    <div style="background: white; padding: 18px; border-radius: 10px; margin-bottom: 16px; border-left: 4px solid #667eea;">
                        <p style="margin: 0 0 8px 0;"><strong style="color: #333;">${name}</strong></p>
                        <p style="margin: 0; color: #667eea; font-size: 14px;">${email}</p>
                        ${company ? `<p style="margin: 8px 0 0 0; color: #888; font-size: 13px;">🏢 ${company}</p>` : ''}
                    </div>
                    
                    <!-- Message -->
                    <div style="background: white; padding: 18px; border-radius: 10px;">
                        <p style="margin: 0 0 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                        <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    <!-- Reply Button -->
                    <div style="text-align: center; margin-top: 20px;">
                        <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" 
                           style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; padding: 12px 28px; border-radius: 25px; font-size: 14px; font-weight: 500;">
                            Reply to ${name.split(' ')[0]} →
                        </a>
                    </div>
                    
                </div>
            `,
            replyTo: email,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        // Send confirmation email to the sender
        await resend.emails.send({
            from: 'Anas Adbulkadir <onboarding@resend.dev>',
            to: [email],
            subject: `✅ Got your message, ${name.split(' ')[0]}!`,
            html: `
                <div style="font-family: -apple-system, sans-serif; max-width: 480px; margin: 0 auto; background: #f8f9fa; padding: 24px; border-radius: 12px;">
                    
                    <!-- Header -->
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 24px; border-radius: 10px; margin-bottom: 20px; text-align: center;">
                        <h1 style="margin: 0; color: white; font-size: 22px; font-weight: 600;">Thanks for reaching out! 🙌</h1>
                    </div>
                    
                    <!-- Message -->
                    <div style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 16px;">
                        <p style="margin: 0 0 16px 0; color: #333; font-size: 15px; line-height: 1.6;">
                            Hey <strong>${name.split(' ')[0]}</strong>,
                        </p>
                        <p style="margin: 0 0 16px 0; color: #555; font-size: 15px; line-height: 1.6;">
                            I got your message about "<strong>${subject}</strong>" and will get back to you as soon as possible.
                        </p>
                        <p style="margin: 0; color: #555; font-size: 15px; line-height: 1.6;">
                            Usually I respond within 24-48 hours. If it's urgent, feel free to reach me on WhatsApp!
                        </p>
                    </div>
                    
                    <!-- Your Message Copy -->
                    <div style="background: white; padding: 18px; border-radius: 10px; border-left: 4px solid #667eea;">
                        <p style="margin: 0 0 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Your message</p>
                        <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    <!-- Footer -->
                    <div style="text-align: center; margin-top: 24px;">
                        <p style="margin: 0; color: #888; font-size: 13px;">
                            – Anas Adbulkadir
                        </p>
                        <div style="margin-top: 12px;">
                            <a href="https://github.com/ANNAade22" style="color: #667eea; text-decoration: none; margin: 0 8px; font-size: 13px;">GitHub</a>
                            <a href="https://wa.me/252616955570" style="color: #667eea; text-decoration: none; margin: 0 8px; font-size: 13px;">WhatsApp</a>
                        </div>
                    </div>
                    
                </div>
            `,
        });

        return NextResponse.json(
            { success: true, messageId: data?.id },
            { status: 200 }
        );
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
