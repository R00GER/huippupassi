import { Button, Typography } from "@mui/material";

const ServiceCard = ({ name, icon, color }) => {
  return (
    <div
      style={{
        position: "relative",
        padding: "1rem",
        margin: "2rem 4rem 2rem 4rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "33.3%",
        minHeight: "350px",
        borderTop: `3px solid var(--color-medium-orange)`,
        background: "#f2f2f2",
        overflow: "hidden",
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "8px",
        boxShadow: "0 0 20px 8px #d0d0d0",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            position: "absolute",
            bottom: -3,
            left: 0,
            width: "100%",
            // height: "100%",
            // // clipPath: "polygon(0 0, 0 100%, 62% 100%)",
            // background: "#ec962c99",
          }}
        >
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ec962c99"
            fill-opacity="1"
            d="M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,128C672,117,768,139,864,160C960,181,1056,203,1152,181.3C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg> */}
          {/* <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#ec962c"
              d="M51.4,-18.8C57.1,1,45.8,24.3,25.3,40.6C4.7,56.9,-25.2,66.4,-44.7,54C-64.3,41.6,-73.5,7.3,-64.3,-17.2C-55.1,-41.7,-27.6,-56.5,-2.4,-55.7C22.8,-54.9,45.6,-38.6,51.4,-18.8Z"
              transform="translate(100 100)"
            />
          </svg> */}
        </div>
        <div
          style={{
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img style={{ zIndex: 2 }} src={icon} alt={name} />
        </div>
        <div style={{ width: "60%", marginLeft: "1rem", zIndex: 2 }}>
          <Typography>
            Matkailu- tai asuntoauto on vastaus tarpeisiisi, mikäli haaveilet
            lomasta, jolla aikataulut tai yöpaikkojen varaaminen eivät sido
            sinua. Upouusi Adria Matrix automme tarjoaa vapauden lisäksi myös
            korkeatasoiset puitteet matkailuautoilulle.
          </Typography>
        </div>
      </div>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        <Button
          style={{
            color: "#f2f2f2",
            border: "2px solid #f2f2f2",
            padding: "7px 2rem",
          }}
          size="large"
          variant="outlined"
        >
          Varaa
        </Button>
      </div> */}
    </div>
  );
};
export default ServiceCard;
