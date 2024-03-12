import React, { useState } from 'react';
import { MyColors } from './models/MyColors';
import { cngColor, selectColor } from './features/counter/cngColorSlice';
import { useAppSelector, useAppDispatch } from './app/hooks';
import Waga from './Waga';
import Login from './components/Login';

const App = () => {
    const colors: MyColors[] = [
        { color: 'red' },
        { color: 'blue' },
        { color: 'yellow' },
        { color: 'gray' },
        { color: 'magenta' },
        { color: 'pink' }
    ];

    const [localColor, setLocalColor] = useState<MyColors['color']>(colors[4].color); // Renamed to 'localColor'
    const selectedColor = useAppSelector(selectColor); // Renamed to 'selectedColor'
    const dispatch = useAppDispatch();

    const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedColorValue = e.target.value as MyColors['color'];

        // Create a MyColors object with the selected color
        const selectedColorObject: MyColors = {
            color: selectedColorValue,
        };

        // Dispatch the action with the selected color object
        dispatch(cngColor(selectedColorObject));

        // Update the local state
        setLocalColor(selectedColorValue);
    };

    return (
        <div>
            <Login></Login>
            
            
        </div>
    );
};

export default App;
