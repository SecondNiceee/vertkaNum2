import  { type FC } from 'react';
import type { TOrderPrice } from '../types/common/TOrder.type';

const PriceBlock:FC<TOrderPrice> = ({finalPrice, regularPrice}) => {
    return (
        <div className='flex'>
            {regularPrice < finalPrice ? 
            <>
                <p className='mx-auto text-xl text-black font-sans text-grey line-through'>{regularPrice}Р</p>
                <p className='mx-auto text-xl text-black font-sans'>{regularPrice}Р</p>
            </>
            :
            <p className='mx-auto text-xl text-black font-sans'>{finalPrice}Р</p>
            }
        </div>
    );
};

export default PriceBlock;