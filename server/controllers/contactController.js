const handleContact = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ status: "error", message: "All fields are required." });
  }

  console.log("New message:", { name, email, message });

  res.status(200).json({ status: "success", message: "Message received!" });
};

module.exports = { handleContact }; 
