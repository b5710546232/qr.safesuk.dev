import QRCode from 'qrcode'

export const generateQR = async (text) => {
  try {
    const imageData = await QRCode.toDataURL(text, {
      color: {
        dark: '#34d399', // Blue dots
        light: '#0000' // Transparent background
      }
    })
    return imageData
  } catch (err) {
    return null
  }
}
