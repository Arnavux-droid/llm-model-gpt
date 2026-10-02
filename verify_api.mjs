const run = async () => {
    try {
        console.log("Sending request...");
        const response = await fetch("http://localhost:8080/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: "Say hello",
                threadId: "verify_script_2"
            })
        });

        console.log("Status:", response.status);
        if (response.ok) {
            const data = await response.json();
            console.log("Response:", data);
        } else {
            const text = await response.text();
            console.log("Error Body:", text);
        }

    } catch (err) {
        console.error("Error:", err);
    }
};

run();
