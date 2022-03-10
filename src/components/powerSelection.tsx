import React, {useState} from 'react';
import '../styles/powerSelection.scss'


const PowerSelection: React.FC<any> = ({powerPrice}) => {

    const [selected, setSelected] = useState<string>("");

    return (
        <div className='powers'>
            <h4>Select power:</h4>
            <ul className='powerButtons'>
                <li className={selected == '100mw' ? 'powerButton selected' : 'powerButton'} onClick={() => {powerPrice(0); setSelected("100mw")}}>
                    <div className='description'>
                        100 MW
                        <br></br>
                        +0€
                    </div>
                </li>
                <li className={selected == '150mw' ? 'powerButton selected' : 'powerButton'} onClick={() => {powerPrice(200); setSelected("150mw")}}>
                    <div className='description'>
                        150 MW
                        <br></br>
                        +200€
                    </div>
                </li>
                <li className={selected == '200mw' ? 'powerButton selected' : 'powerButton'} onClick={() => {powerPrice(500); setSelected("200mw")}}>
                    <div className='description'>
                        200 MW
                        <br></br>
                        +500€
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default PowerSelection;