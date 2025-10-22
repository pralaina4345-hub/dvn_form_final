export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycby6yQOoTo-a3TRNqZ4emptgiodzd1OzYI-laUx2HhjUkCVns0hD9HPr-fnyuUxWGkUV/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    return res.status(200).json({ status: "ok" });
  } catch (err) {
    return res.status(500).json({ status: "error", message: err.message });
  }
}
