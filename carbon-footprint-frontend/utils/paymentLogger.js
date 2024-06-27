import axios from "axios";

const logPayment = async (name, amount, email, phone, country, address) => {
  try {
    const response = await axios.post(
      "https://script.google.com/macros/s/AKfycbwG9ylOkmn1wsL0v8SJcB65xvx_PN2oFkiHg31syVixNzILlZBHp8XPJm1-Lz--211P/exec",
      { name, amount, email, phone, country, address },
      {
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      }
    );
    console.log(response);
    console.log("Payment logged:", response.data);
    // Optionally handle success feedback to the user
  } catch (error) {
    console.error("Error logging payment:", error);
    // Optionally handle error feedback to the user
  }
};

// Example usage after a successful payment
export const handleSuccessfulPayment = async (
  name,
  amount,
  email,
  phone,
  country,
  address
) => {
  await logPayment(name, amount, email, phone, country, address);
  // Optionally update UI or perform other actions
};
