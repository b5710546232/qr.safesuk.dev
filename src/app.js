
import DEFAULT_IMG from '../assets/img/icon.png'
import { generateQR } from './qr'

export const handleInputOnchange = (event) => {
  const value = event.target.value
  setQRImage(value)
  const text = value || ''
  setOutputText(text)
}

const setOutputText = (text) => {
  document.getElementById('text').innerText = text
}

export const setQRImage = async (text = '') => {
  const imageQr = (await generateQR(text)) || DEFAULT_IMG
  const img = document.getElementById('qrcode')
  img.setAttribute('src', imageQr)
}
