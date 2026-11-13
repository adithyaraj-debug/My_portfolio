import { useState } from "react";
import { Send } from "lucide-react";
import { profile } from "../data/portfolioData";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (values.subject.trim().length < 3) errors.subject = "Enter a subject.";
  if (values.message.trim().length < 10) {
    errors.message = "Enter a message of at least 10 characters.";
  }
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  if (!profile.email) return null;

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("");
      return;
    }

    const body = `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`;
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with this draft. Nothing is stored on this website.");
    window.location.href = href;
  };

  return (
    <form className="contact-form cyber-card" onSubmit={onSubmit} noValidate>
      <span className="card-corner card-corner--tl" aria-hidden="true" />
      <span className="card-corner card-corner--tr" aria-hidden="true" />
      <span className="card-corner card-corner--bl" aria-hidden="true" />
      <span className="card-corner card-corner--br" aria-hidden="true" />

      <div className="form-heading">
        <h3>// TRANSMIT_MESSAGE</h3>
        <p>
          Submitting opens a direct draft to {profile.email}. Zero tracker or external storage.
        </p>
      </div>

      {Object.keys(errors).length > 0 ? (
        <p className="form-banner" role="alert">Check the highlighted fields and try again.</p>
      ) : null}

      <div className="form-grid">
        <label htmlFor="contact-name">
          Name
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={onChange}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            maxLength={80}
          />
          {errors.name ? <span id="contact-name-error" className="field-error">{errors.name}</span> : null}
        </label>

        <label htmlFor="contact-email">
          Email
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={onChange}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            maxLength={120}
          />
          {errors.email ? <span id="contact-email-error" className="field-error">{errors.email}</span> : null}
        </label>

        <label className="form-span" htmlFor="contact-subject">
          Subject
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={values.subject}
            onChange={onChange}
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "contact-subject-error" : undefined}
            maxLength={140}
          />
          {errors.subject ? <span id="contact-subject-error" className="field-error">{errors.subject}</span> : null}
        </label>

        <label className="form-span" htmlFor="contact-message">
          Message
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            value={values.message}
            onChange={onChange}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            maxLength={2000}
          />
          {errors.message ? <span id="contact-message-error" className="field-error">{errors.message}</span> : null}
        </label>
      </div>

      <button className="btn btn-neon-primary" type="submit">
        <Send size={16} aria-hidden="true" />
        Transmit via Email
      </button>

      <p className="form-status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}
