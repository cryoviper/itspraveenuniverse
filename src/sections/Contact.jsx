import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_o6k2fsr",         // Your Service ID
        "template_sjtoair",        // Your Template ID
        {
          from_name: formData.name,                 // Visitor name
          email: formData.email,                    // Visitor email
          message: formData.message,                // Visitor message
          to_email: "itspraveen.universe@gmail.com" // Matches {{to_email}} in template
        },
        "xbkYPiZ9e7YszohoY"        // Your Public Key
      );

      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "✅ Your message has been sent!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsLoading(false);
      showAlertMessage("danger", "❌ Something went wrong. Check console.");
    }
  };

  return (
    <section className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && (
        <Alert
          role="alert"
          aria-live="polite"
          type={alertType}
          text={alertMessage}
        />
      )}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you’re designing a new digital experience or enhancing an
            existing platform, I craft intuitive and engaging solutions to bring
            your ideas to life.
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit} aria-busy={isLoading}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="field-input field-input-focus bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-2 w-full text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lavender focus:ring-opacity-70 transition"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="JohnDoe@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="field-input field-input-focus bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-2 w-full text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lavender focus:ring-opacity-70 transition"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="field-input field-input-focus bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-2 w-full text-gray-200 placeholder-gray-500 resize-y focus:outline-none focus:ring-2 focus:ring-lavender focus:ring-opacity-70 transition"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            aria-busy={isLoading}
            className={`w-full px-1 py-3 text-lg rounded-md cursor-pointer bg-radial from-lavender to-royal hover:from-royal hover:to-lavender hover:transition-colors duration-300 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
