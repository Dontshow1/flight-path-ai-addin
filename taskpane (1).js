// Replace with your actual API key
const OPENAI_API_KEY = "YOUR_API_KEY_HERE";

async function callOpenAI() {
  const prompt = document.getElementById("input").value;
  if (!prompt) {
    alert("Please enter a prompt.");
    return;
  }

  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    document.getElementById("output").textContent = data.choices[0].text.trim();
  } catch (error) {
    console.error(error);
    alert("An error occurred while generating the response.");
  }
}