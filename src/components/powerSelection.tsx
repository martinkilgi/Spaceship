import React from 'react';
import '../styles/powerSelection.scss'


const powerSelection: React.FC<any> = ({powerPrice}) => {

    return (
        <div className='powers'>
            <h4>Select power:</h4>
            <div className='powerButtons'>
                <button className='powerButton' onClick={() => powerPrice(0)}>
                    <h3>100 MW</h3>
                    +0€
                </button>
                <button className='powerButton' onClick={() => powerPrice(200)}>
                    <h3>150 MW</h3>
                    +200€
                </button>
                <button className='powerButton' onClick={() => powerPrice(500)}>
                    <h3>200 MW</h3>
                    +500€
                </button>
            </div>
        </div>
    );
}

export default powerSelection;