document.getElementById("return-home").onclick = () => {
    window.location.href = 'index.html';
};

document.getElementById("recommend-form").onsubmit = async function(e) {
    e.preventDefault();
    const prompt = document.getElementById("user-prompt").value;
    const resultDiv = document.getElementById("recommend-result");
    resultDiv.textContent = 'Thonkin...';

    try {
        const response = await fetch ("http://localhost:3000/ask", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({provider: "openai", prompt})
        });
        const data = await response.json();
        if (data.result) {
            resultDiv.textContent = data.result;
        } else {
            resultDiv.textContent = 'Sorry, no recommendations found for you.';
        }
    } catch (error) {
        resultDiv.textContent = 'CODE BROKE: ' + error.message;
    }
};