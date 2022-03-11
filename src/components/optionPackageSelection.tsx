import React, {useEffect, useState} from 'react';
import '../styles/optionPackageSelection.scss'


const OptionPackageSelection: React.FC<any> = ({packagePrice}) => {

    const [selected, setSelected] = useState<string>("");

    return (
        <div className='packages'>
            <h4>Select option package:</h4>
            <div>
                <ul className='packageButtons'>
                    <li data-testid='packagebasic' tabIndex={0} className={selected == 'basic' ? 'packageButton selected' : 'packageButton'} onClick={() => {packagePrice(0); setSelected("basic")}}>
                        <h3>Basic</h3>
                        +0€
                        <div className='descriptionContainer'>
                            <div className='description'>
                                <ul className='packageProperties'>
                                    <li>Air conditioning</li>
                                    <li>Cloth seats</li>
                                    <li>FM radio</li>
                                </ul>
                            </div>
                        </div>
                        
                    </li>
                    <li data-testid='packagesport' tabIndex={0} className={selected == 'sport' ? 'packageButton selected' : 'packageButton'} onClick={() => {packagePrice(100); setSelected("sport")}}>
                        <h3>Sport</h3>
                        +100€
                        <div className='descriptionContainer'>
                            <div className='description'>
                                <ul className='packageProperties'>
                                    <li>Air conditioning</li>
                                    <li>Cloth seats</li>
                                    <li>FM radio</li>
                                    <li>Personal tech support</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li data-testid='packagelux' tabIndex={0} className={selected == 'lux' ? 'packageButton selected' : 'packageButton'} onClick={() => {packagePrice(500); setSelected("lux")}}>
                        <a href="#"></a>
                        <h3>Lux</h3>
                        +500€
                        <div className='descriptionContainer'>
                            <div className='description'>
                                <ul className='packageProperties'>
                                    <li>Air conditioning</li>
                                    <li>Luxury seats</li>
                                    <li>FM radio</li>
                                    <li>Chrome wheels</li>
                                    <li>Window tint</li>
                                    <li>Subwoofer</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default OptionPackageSelection;

// style={{ borderColor: luxClicked ? '#7BF762' : '' }}

