import type { FC, SetStateAction } from "react";
import type { TCardOrders } from "../../../types/common/TCartOrders.type";
import type { TOrder } from "../../../types/common/TOrder.type";

interface ICart{
    orders : TCardOrders[],
    setCartPopupOpened : React.Dispatch<SetStateAction<boolean>>,
}
const Cart:FC<ICart> = ({orders, setCartPopupOpened}) => {
    const counterOfOrders = orders.reduce((acc, order) => acc + order.quantity, 0)
    return (
            <div onClick={() => {setCartPopupOpened(true)}} className='bg-[white] opacity-75  border-solid border-black border-2 md:opacity-100 md:scale-100 sm:scale-75 scale-[0.6] cursor-pointer fixed right-[0px] top-[40px] sm:right-[20px] sm:top-[40px] md:right-[40px] md:top-[110px] z-40 rounded-[50%] white-shadow w-[100px] h-[100px]'>
                <div className='relative w-[100%] h-[100%] flex items-center justify-center'>
                    <img alt='#' src={"cart.svg"} width={50} height={50} />
                    <div className="w-[34px] h-[34px] right-[3%] bottom-[0%] rounded-[50%] absolute lef flex justify-center items-center bg-red-500">
                        <p className='p text-white font-semibold'>
                            {counterOfOrders}
                        </p>
                    </div>
                </div>
            </div>
    );
};

export default Cart;