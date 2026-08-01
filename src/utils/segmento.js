export async function sendDataInSegmento(data) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      tokenAuth: process.env.NEXT_PUBLIC_MSG91_AUTH_KEY,
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_MSG91_PHONEBOOK_URL,
      options
    );
    const text = await response.text();

    if (!text) {
      return { status: "success" };
    }

    return JSON.parse(text);
  } catch (err) {
    console.error(err);
    return { status: "error", message: err.message };
  }
}
