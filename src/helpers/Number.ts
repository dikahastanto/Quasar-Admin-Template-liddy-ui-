const formatNumber = (value:number) => {
  const val = (value / 1).toFixed(0).replace('.', '.')
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const formatPrice = (value:number) => {
  return `Rp.${formatNumber(value)},00`
}

export {
  formatNumber,
  formatPrice
}
