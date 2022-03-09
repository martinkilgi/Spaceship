import React from 'react';
import '../styles/optionPackageSelection.scss'


const optionPackageSelection: React.FC<any> = ({packagePrice}) => {

    return (
        <div className='packages'>
            <h4>Select option package:</h4>
            <div className='packageButtons'>
                <button className='packageButton' onClick={() => packagePrice(0)}>
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
                </button>
                <button className='packageButton' onClick={() => packagePrice(100)}>
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
                </button>
                <button className='packageButton' onClick={() => packagePrice(500)}>
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
                </button>
            </div>
        </div>
    );
}

export default optionPackageSelection;