import React, { useEffect, useState } from 'react'

const useSquare = (ip) => {
  const [price,setPrice] = useState();
  useEffect(() => {
    setPrice(ip*ip);
  });
  return price;
}

export default useSquare;