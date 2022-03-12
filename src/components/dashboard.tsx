import React, {useEffect, useState} from 'react';
import '../styles/dashboard.scss'
import ColorSelection from './colorSelection';
import PowerSelection from './powerSelection';
import WarpDriveSelection from './warpDriveSelection';
import OptionPackageSelection from './optionPackageSelection';

const Dashboard: React.FC = () => {

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


    const colorPrice = (colordata: number): void => {
        setColorData(colordata);
    }

    const packagePrice = (packagedata: number): void => {
        setPackageData(packagedata);
    }

    const powerPrice = (powerdata: number): void => {
        setPowerData(powerdata);
    }

    const warpDrivePrice = (warpdrivedata: number): void => {
        setWarpDriveData(warpdrivedata);
    }

    return (
        <div className='container'>
            <h3>Spaceship configurator</h3>
            <div className='priceDashboard'>
                <div className='properties'>
                    <h5>Base price: <span className='price'>+{basePrice}€</span></h5>
                    <h5>Color: <span data-testid='colorPrice' className='price'>+{colorData}€</span></h5>
                    <h5>Power: <span data-testid='powerPrice' className='price'>+{powerData}€</span></h5>
                    <h5>Warp drive: <span data-testid='warpDrivePrice' className='price'>+{warpDriveData}€</span></h5>
                    <h5>Option package: <span data-testid='packagePrice' className='price'>+{packageData}€</span></h5>
                </div>
                    <hr></hr>
                    <div className="properties">
                        <h3>Total: <span data-testid='totalPrice' className='totalPrice'>+{totalPrice}€</span></h3>
                    </div>
            </div>
            <div className='selections'>
                <div className='colorsel'>
                    <ColorSelection colorPrice={colorPrice} />
                </div>
                <div className='colorsel'>
                    <PowerSelection powerPrice={powerPrice}/>
                </div>
                <div className='warpDriveSel'>
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