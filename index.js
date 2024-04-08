const qrCode = new QRCodeStyling({
  width: 160,
  height: 160,
  type: "svg",
  data: 'https://www.frontendmentor.io',
  dotsOptions: {
    color: '#FFF',
  },
  backgroundOptions: {
    color: "transparent"
  }
})

qrCode.append(document.getElementById('canvas'))