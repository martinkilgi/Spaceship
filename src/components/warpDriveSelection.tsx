import React, {useState} from 'react';
import '../styles/warpDriveSelection.scss'

interface WarpDrivePriceProps {
    warpDrivePrice: (price: number) => void;
}

const WarpDriveSelection: React.FC<WarpDrivePriceProps> = ({warpDrivePrice}) => {

    const [selected, setSelected] = useState<string>("");

    return (
        <div className='warpDrives'>
            <h4>Select warp drive:</h4>
            <ul className='warpButtons'>
                <li data-testid='warpdriveno' className={selected == 'no' ? 'warpButton selected' : 'warpButton'} onClick={() => {warpDrivePrice(0); setSelected('no')}}>
                    <div className='description'>
                        No
                        <br></br>
                        +0€
                    </div>
                </li>
                <li data-testid='warpdriveyes' className={selected == 'yes' ? 'warpButton selected' : 'warpButton'} onClick={() => {warpDrivePrice(1000); setSelected('yes')}}>
                    <div className='description'>
                        Yes
                        <br></br>
                        +1000€
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default WarpDriveSelection;