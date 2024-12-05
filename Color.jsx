import React, { useEffect, useState } from "react";

function Color() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [colorChange, setColorChange] = useState("#000000");

  function radomColor(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[radomColor(hex.length)];
    }

    console.log(hexColor);
    setColorChange(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = radomColor(256);
    const g = radomColor(256);
    const b = radomColor(256);

    setColorChange(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: colorChange,
      }}
    >
      <div className="d-flex justify-content-center">
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          color: "#fff",
          fontSize: "20px",
          gap: "50px",
          flexDirection: "column",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{colorChange}</h1>
      </div>
    </div>
  );
}
export default Color;
