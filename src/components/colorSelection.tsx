import React, {useState} from 'react';
import '../styles/colorSelection.scss'

const ColorSelection: React.FC<any> = ({colorPrice}) => {

    const [selected, setSelected] = useState<string>("");

    return (
        <div className='colors'>
            <div className='colorHeader'>
                <h4>Select color:</h4>
            </div>
            <ul className='colorButtons'>
                <li data-testid='snowcolor' className={selected == 'snow' ? 'colorButton selected' : 'colorButton'} onClick={() => {colorPrice(0); setSelected("snow")}}>
                    <div className='snowColor'></div>
                    +0€
                    <h5>Snow</h5>
                </li>
                <li data-testid='volcanocolor' className={selected == 'volcano' ? 'colorButton selected' : 'colorButton'} onClick={() => {colorPrice(100); setSelected("volcano")}}>
                    <div className='volcanoColor'></div>
                    +100€
                    <h5>Volcano</h5>
                </li>
                <li data-testid='skycolor' className={selected == 'sky' ? 'colorButton selected' : 'colorButton'} onClick={() => {colorPrice(100); setSelected("sky")}}>
                    <div className='skyColor'></div>
                    +100€
                    <h5>Sky</h5>
                </li>
            </ul>
        </div>  
    );
}

export default ColorSelection;