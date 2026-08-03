"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      form.reset();
      setStatus("sent");
      setMessage("Message sent. We will get back to you soon.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Could not send your message. Please try again."
      );
    }
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <input className="contactHoney" name="company" tabIndex={-1} autoComplete="off" />
      <div className="formGrid">
        <label>
          <span>Name</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>Project type</span>
          <select name="projectType" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Brand identity</option>
            <option>Campaign creative</option>
            <option>Illustration</option>
            <option>Mural or public art</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          <span>Budget range</span>
          <input name="budget" />
        </label>
        <label>
          <span>Timeline</span>
          <input name="timeline" />
        </label>
      </div>
      <label>
        <span>Project details</span>
        <textarea name="message" rows={7} required />
      </label>
      <div className="formActions">
        <button className="contactButton" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending" : "Send enquiry"} <span aria-hidden="true">↗</span>
        </button>
        {message ? <p className={`formMessage ${status}`}>{message}</p> : null}
      </div>
    </form>
  );
}
