import "./style.css";
import QRCode from "qrcode";
import DEFAULT_IMG from "./assets/img/icon.png";

const generateQR = async (text) => {
  try {
    const imageData = await QRCode.toDataURL(text, {
      color: {
        dark: "#34d399", // Blue dots
        light: "#0000", // Transparent background
      },
    });
    return imageData;
  } catch (err) {
    return null;
  }
};

const processQRImage = async (text = "") => {
  const imageQr = (await generateQR(text)) || DEFAULT_IMG;
  const img = document.getElementById("qrcode");
  img.setAttribute("src", imageQr);
};

const setText = (text) => {
  document.getElementById("text").innerText = text;
};

const handleInputOnchange = (event) => {
  const value = event.target.value;
  processQRImage(value);
  const text = value || "";
  setText(text);
};

const init = async () => {
  processQRImage();
  const input = document.getElementById("inpuText");
  input.addEventListener("input", handleInputOnchange);
};

init();
