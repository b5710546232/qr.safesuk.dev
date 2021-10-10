import './style.css'
import { handleInputOnchange, setQRImage } from './src/app'

const init = async () => {
  setQRImage()
  const input = document.getElementById('inpuText')
  input.addEventListener('input', handleInputOnchange)
}

init()
