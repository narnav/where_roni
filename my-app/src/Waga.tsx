import React, { useState } from 'react';
import { MyColors } from './models/MyColors';
import { cngColor, selectColor } from './features/counter/cngColorSlice';
import { useAppSelector, useAppDispatch } from './app/hooks';

const Waga = () => {
    const selectedColor = useAppSelector(selectColor); // Renamed to 'selectedColor'
  return (
    <div style={{backgroundColor:selectedColor}}>
        Waga
    </div>
  )
}

export default Waga