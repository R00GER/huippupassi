import solmiaLogo from "../assets/solmia.png";
import { Typography } from "@mui/material";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const Testimonials = () => {
  return (
    <div
      style={{
        height: "100%",
        position: "relative",
        padding: "2rem 0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50%",
        }}
      >
        <div style={{ alignSelf: "flex-start" }}>
          <RiDoubleQuotesL
            style={{ color: "var(--color-dark-orange)", fontSize: "3rem" }}
          />
        </div>
        <div style={{ width: "90%" }}>
          <Typography style={{ fontSize: "1.3rem", fontStyle: "italic" }}>
            Kokemuksen ansiosta Huippupassilla osataan myös vääntää lempeästi
            rautalankaa, eli puhua asioista aina asiakkaan kielellä siten, että
            asiakkaan kiinnostus varmasti herää. Huippupassin tyylissä on vahvan
            kokemuksen lisäksi juuri sopivassa suhteessa rokkia ja sporttia.
            Jalka menee ovenrakoon tyylikkäästi ja tuottavasti.
          </Typography>
          <br />
          <Typography>-Tiina Hurme, Solmia Oy</Typography>
        </div>
        <div style={{ alignSelf: "flex-end" }}>
          <RiDoubleQuotesR
            style={{ color: "var(--color-dark-orange)", fontSize: "3rem" }}
          />
        </div>
      </div>
      <img style={{ opacity: "0.4" }} alt="solmia logo" src={solmiaLogo} />
    </div>
  );
};

export default Testimonials;
