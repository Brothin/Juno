import scarecrow from "./../../assets/images/Scarecrow.png";

export default function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <img src={scarecrow} width={"400px"} height={"400px"} />
      <h2>Not Found...</h2>
    </div>
  );
}
