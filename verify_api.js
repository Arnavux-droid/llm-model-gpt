import fetch from 'node-fetch';

const run = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: "Say hello",
                threadId: "verify_script_1"
            })
        });

        const data = await response.json();
        console.log("Status:", response.status);
        console.log("Response:", data);

    } catch (err) {
        console.error("Error:", err);
    }
};

run();
