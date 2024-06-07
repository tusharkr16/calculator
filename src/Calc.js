import React, { useState } from 'react';

const Calc = () => {
    const [value, setValue] = useState('');

    const handleButtonClick = (e) => {
        const val = e.target.value;

        if (val === 'C') {
            setValue('');
        } else if (val === '=') {
            try {
                // Prevent evaluation of incomplete expressions
                if (/[\+\-\*\/]$/.test(value) || value === '') {
                    setValue('Error');
                } else {
                    // Handle division by zero
                    const result = eval(value);
                    if (result === Infinity) {
                        setValue('Infinity');
                    } else if (isNaN(result)) {
                        setValue('NaN');
                    } else {
                        setValue(result.toString());
                    }
                }
            } catch {
                setValue('Error');
            }
        } else {
            setValue(value + val);
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <h1>React Calculator</h1>
            <input type="text" style={{ width: "20%", marginBottom: "10px" }} value={value} readOnly />
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <button style={buttonStyle} value={7} onClick={handleButtonClick}>7</button>
                <button style={buttonStyle} value={8} onClick={handleButtonClick}>8</button>
                <button style={buttonStyle} value={9} onClick={handleButtonClick}>9</button>
                <button style={buttonStyle} value={'+'} onClick={handleButtonClick}>+</button>
            </div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <button style={buttonStyle} value={4} onClick={handleButtonClick}>4</button>
                <button style={buttonStyle} value={5} onClick={handleButtonClick}>5</button>
                <button style={buttonStyle} value={6} onClick={handleButtonClick}>6</button>
                <button style={buttonStyle} value={'-'} onClick={handleButtonClick}>-</button>
            </div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <button style={buttonStyle} value={1} onClick={handleButtonClick}>1</button>
                <button style={buttonStyle} value={2} onClick={handleButtonClick}>2</button>
                <button style={buttonStyle} value={3} onClick={handleButtonClick}>3</button>
                <button style={buttonStyle} value={'*'} onClick={handleButtonClick}>*</button>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
                <button style={buttonStyle} value={'C'} onClick={handleButtonClick}>C</button>
                <button style={buttonStyle} value={0} onClick={handleButtonClick}>0</button>
                <button style={buttonStyle} value={'='} onClick={handleButtonClick}>=</button>
                <button style={buttonStyle} value={'/'} onClick={handleButtonClick}>/</button>
            </div>
        </div>
    );
};

const buttonStyle = {
    padding: "10px",
    margin: "5px",
    minWidth: "40px",
    minHeight: "40px"
};

export default Calc;
