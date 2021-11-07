import { Button, TextField, Typography } from "@mui/material";

const ContactForm = () => {
  const fields = [
    {
      name: "name",
      placeholder: "Nimi",
      props: {},
    },
    {
      name: "company",
      placeholder: "Yritys",
      props: {},
    },
    {
      name: "phone",
      placeholder: "Puhelinnumero",
      props: {},
    },
    {
      name: "email",
      placeholder: "Sähköposti",
      props: {},
    },
    {
      name: "message",
      placeholder: "Viesti",
      props: { multiline: true, rows: 2, maxRows: 4 },
    },
  ];

  return (
    <div style={{ width: "70%", padding: "2rem 3rem" }}>
      {fields.map((field) => (
        <TextField
          name={field.name}
          placeholder={field.placeholder}
          margin="dense"
          fullWidth
          multiline={field.props.multiline}
          maxRows={field.props.maxRows}
          rows={field.props.rows}
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
        <Button size="large" variant="contained">
          <Typography>Lähetä</Typography>
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
