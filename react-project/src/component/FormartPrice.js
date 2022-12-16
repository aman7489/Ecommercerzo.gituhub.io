import { style } from '@mui/system'
import React from 'react'

const FormartPrice = ({price}) => {
    return Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
      }).format(price / 100);
}

export default FormartPrice
