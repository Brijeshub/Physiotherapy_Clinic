import React, { useState } from "react";

const DoctorQueryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    symptoms: "",
    query: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const doctorWhatsAppNumber = "917800965593";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, symptoms, query } = formData;

    if (!name || !phone || !symptoms || !query) {
      alert("Please fill all fields!");
      return;
    }

    const message = `*New Patient Query*
     *Name:*  ${name}
     *Phone:* ${phone}
     *Symptoms:* ${symptoms}
     *Query:* ${query}
    
    Please respond to the patient as soon as possible.`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${doctorWhatsAppNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
    setIsOpen(false); // Form close karna after submit
  };

  return (
    <div>
      {/* Open Modal Button */}
      <button className="open-modal-btn" onClick={() => setIsOpen(true)}>Open Query Form</button>

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Doctor Query Form</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Your Contact Number" value={formData.phone} onChange={handleChange} required />
              <input type="text" name="symptoms" placeholder="Symptoms (e.g., fever, cough)" value={formData.symptoms} onChange={handleChange} required />
              <textarea name="query" placeholder="Describe your problem" value={formData.query} onChange={handleChange} required />
              <button type="submit">Send on WhatsApp</button>
              <button type="button" className="close-btn" onClick={() => setIsOpen(false)}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorQueryForm;
