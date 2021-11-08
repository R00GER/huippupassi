import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import sendEmail from "../../services/contactFormSevice";
import { texts } from "../../texts";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState({ error: false, message: "" });

  console.log(formError);

  const fields = [
    {
      name: "name",
      value: formData.name,
      onChange: (e) => setFormData({ ...formData, name: e.target.value }),
      placeholder: "Nimi",
      props: { required: true },
    },
    {
      name: "company",
      value: formData.company,
      onChange: (e) => setFormData({ ...formData, company: e.target.value }),
      placeholder: "Yritys",
      props: { required: false },
    },
    {
      name: "phone",
      value: formData.phone,
      onChange: (e) => setFormData({ ...formData, phone: e.target.value }),
      placeholder: "Puhelinnumero",
      props: { required: false },
    },
    {
      name: "email",
      value: formData.email,
      onChange: (e) => setFormData({ ...formData, email: e.target.value }),
      placeholder: "Sähköposti",
      props: { required: true },
    },
    {
      name: "message",
      value: formData.message,
      onChange: (e) => setFormData({ ...formData, message: e.target.value }),
      placeholder: "Viesti",
      props: { multiline: true, rows: 2, maxRows: 4, reguired: true },
    },
  ];

  const send = () => {
    if (!formData.name && !formData.email && !formData.message) return;

    try {
      sendEmail(formData);
      setFormData({ name: "", company: "", phone: "", email: "", message: "" });
      setFormError({ error: false, message: "" });
    } catch (error) {
      setFormError({
        error: true,
        message: texts.contact.formError,
      });
      setTimeout(() => setFormError({ error: false, message: "" }), 5000);
    }
  };

  return (
    <div style={{ width: "70%", padding: "2rem 3rem" }}>
      {fields.map((field) => (
        <TextField
          key={field.name}
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          placeholder={field.placeholder}
          margin="dense"
          fullWidth
          multiline={field.props.multiline}
          maxRows={field.props.maxRows}
          rows={field.props.rows}
          required={field.props.reguired}
        />
      ))}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <Button
          onClick={send}
          size="large"
          variant="contained"
          disabled={!formData.name || !formData.email || !formData.message}
        >
          <Typography>{texts.contact.action}</Typography>
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
