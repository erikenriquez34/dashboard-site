import { useState } from "react";
import emailjs from "@emailjs/browser";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function ContactModal(props:Props) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_fmoy1vw",
        "template_6bhgftd",
        form,
        "G2QwKihlt7tdPAqSc"
      );
      setSent(true);
    } catch (err) {
      console.error("EmailJS error:", err);
    }
  };

  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center" onClick={props.onClose}>
      <div className="bg-purple-200 p-8 rounded-xl w-full max-w-xl shadow-lg relative" 
        onClick={(e) => e.stopPropagation()}>

        {sent ? (
          <p className="text-green-500 font-bold text-center">Thanks! Your message has been sent. 😊</p>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 text-amber-500">Contact Me</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-4">
                  <input type="text" name="first" placeholder="First Name" onChange={handleChange} required
                    className="w-1/2 p-2 rounded bg-neutral-600 text-white"/>

                  <input type="text" name="last" placeholder="Last Name" onChange={handleChange} required
                    className="w-1/2 p-2 rounded bg-neutral-600 text-white"/>
                </div>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required
                  className="w-full p-2 rounded bg-neutral-600 text-white"/>

                <textarea name="message" placeholder="Your message..." rows={4} onChange={handleChange} required
                  className="w-full p-2 rounded bg-neutral-600 text-white"/>
                <div className="flex justify-center">
                  <button type="submit" className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-400 font-semibold hover:cursor-pointer">
                    Send Message
                  </button>
                </div>
              </form>
            </>
        )}

        <button onClick={() => {setSent(false); props.onClose();}}
          className="absolute -top-2 -right-2 w-8 h-8 bg-red-400 text-white rounded-full flex items-center 
          justify-center text-lg font-bold hover:bg-red-500 hover:scale-105 transition hover:cursor-pointer duration-200"
          ria-label="Close">
          &times;
        </button>
      </div>
    </div>
  );
}

export default ContactModal;