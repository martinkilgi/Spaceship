import React from 'react';
import '../styles/warpDriveSelection.scss'


const warpDriveSelection: React.FC<any> = ({warpDrivePrice}) => {

    return (
        <div className='warpDrives'>
            <h4>Select warp drive:</h4>
            <div className='warpButtons'>
                <button className='warpButton' onClick={() => warpDrivePrice(0)}>
                    <h3>No</h3>
                    +0€
                </button>
                <button className='warpButton' onClick={() => warpDrivePrice(1000)}>
                    <h3>Yes</h3>
                    +1000€
                </button>
            </div>
        </div>
    );
}

export default warpDriveSelection;