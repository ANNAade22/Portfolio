import { Resend } from 'resend';

const resend = new Resend('re_HAFYeLrY_N73PatFbU5u6viVcX8HaQv7B');

async function testEmail() {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['anasadbulkadirhussein@gmail.com'],
            subject: 'Test Email from API Check',
            html: '<p>This is a test email to verify your API key works.</p>'
        });

        if (error) {
            console.error('❌ Resend API Error:', error);
        } else {
            console.log('✅ Email sent successfully!', data);
        }
    } catch (err) {
        console.error('❌ Unexpected Error:', err);
    }
}

testEmail();
