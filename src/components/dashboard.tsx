import React, {useEffect, useState} from 'react';
import '../styles/dashboard.scss'
import ColorSelection from './colorSelection.tsx';
import PowerSelection from './powerSelection.tsx';
import WarpDriveSelection from './warpDriveSelection.tsx';
import OptionPackageSelection from './optionPackageSelection.tsx';

const Dashboard: React.FC<any> = () => {

    const [basePrice, setBasePrice] = useState<number>(1000);
    const [colorData, setColorData] = useState<number>(0);
    const [packageData, setPackageData] = useState<number>(0);
    const [powerData, setPowerData] = useState<number>(0);
    const [warpDriveData, setWarpDriveData] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        const sumPrice = colorData + packageData + powerData + warpDriveData + basePrice;
        setTotalPrice(sumPrice);
    }, [colorData, packageData, powerData, warpDriveData])


    const colorPrice = (colordata: number) => {
        setColorData(colordata);
    }

    const packagePrice = (packagedata: number) => {
        setPackageData(packagedata);
    }

    const powerPrice = (powerdata: number) => {
        setPowerData(powerdata);
    }

    const warpDrivePrice = (warpdrivedata: number) => {
        setWarpDriveData(warpdrivedata);
    }

    return (
        <div className='container'>
            <h3>Spaceship configurator</h3>
            <div className='priceDashboard'>
                <div className='properties'>
                    Base price: {basePrice}
                    <br></br>
                    Color: {colorData}
                    <br></br>
                    Power: {powerData}
                    <br></br>
                    Warp drive: {warpDriveData}
                    <br></br>
                    Option package: {packageData}
                </div>
                <hr></hr>
                <div className='totalprice'>
                    <h3>Total: {totalPrice} </h3>
                </div>
            </div>
            <div className='selections'>
                <div className='colorsel'>
                    <ColorSelection colorPrice={colorPrice} />
                </div>
                <div className='colorsel'>
                    <PowerSelection powerPrice={powerPrice}/>
                </div>
                <div className='colorsel'>
                    <WarpDriveSelection warpDrivePrice={warpDrivePrice}/>
                </div>
                <div className='colorsel'>
                    <OptionPackageSelection packagePrice={packagePrice}/>
                </div>
                
            </div>
        </div>

    );
}

export default Dashboard;