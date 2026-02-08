
async function testApi() {
    try {
        const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'Test Setup',
                email: 'test@setup.com',
                subject: 'API Check',
                message: 'Testing API route connectivity.'
            }),
        });

        const data = await response.json();
        console.log('Status:', response.status);
        console.log('Response:', data);
    } catch (err) {
        console.error('Fetch Error:', err);
    }
}

testApi();
