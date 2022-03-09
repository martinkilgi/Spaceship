import React, {useState} from 'react';
import '../styles/colorSelection.scss'

const ColorSelection: React.FC<any> = ({colorPrice}) => {

    return (
        <div className='colors'>
            <div className='colorHeader'>
                <h4>Select color:</h4>
            </div>
            <div className='colorButtons'>
                <button className='colorButton' onClick={() => colorPrice(0)}>
                    <div className='snowColor'></div>
                    +0€
                    <h3>Snow</h3>
                </button>
                <button className='colorButton' onClick={() => colorPrice(100)}>
                    <div className='volcanoColor'></div>
                    +100€
                    <h3>Volcano</h3>
                </button>
                <button className='colorButton' onClick={() => colorPrice(100)}>
                    <div className='skyColor'></div>
                    +100€
                    <h3>Sky</h3>
                </button>
            </div>
        </div>  
    );
}

export default ColorSelection;