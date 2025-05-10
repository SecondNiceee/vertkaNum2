import { memo, type FC } from 'react';
import type { TOrder } from '../types/common/TOrder.type';
import PriceBlock from './PriceBlock';

interface IOrder extends TOrder{
    addToOrder : (order:TOrder) => void
}
const Order:FC<IOrder> = ({displayAssets, displayName, price, addToOrder}) => {
    return (
       <div className="flex flex-col shadow-xl cursor-pointer border-black rounded-xl overflow-hidden">
            <img src={displayAssets[0]?.background ?? "/notFound.jpg"} alt="Poster" className="activator" />
            <div className="flex flex-col justify-between px-7 gap-3 mt-auto mb-3">
                <span className="mx-auto text-xl text-black font-sans">{displayName}</span>
                <div className='flex justify-between items-center'>
                    <PriceBlock {...price} />
                    <button onClick={() => {addToOrder({displayAssets, displayName, price})}} className='px-3 py-1 rounded-lg border-blue-500 border-solid border-2'>
                        <p className='font-sans text-xl'>Buy</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default  memo(Order);