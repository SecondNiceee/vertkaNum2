import { forwardRef, type Ref, type SetStateAction } from "react";
import type { TCardOrders } from "../../../types/common/TCartOrders.type";

type CartPopupProps = {
  cartOrders: TCardOrders[];
  addToOrder: (order: TCardOrders) => void;
  deleteFromOrder: (dispalyName: string) => void;
  setCartPopupOpened : React.Dispatch<SetStateAction<boolean>>
};

export const CartPopup = forwardRef(
  ({ cartOrders, addToOrder, deleteFromOrder, setCartPopupOpened }: CartPopupProps, ref: Ref<HTMLFormElement>) => {
    const summ = cartOrders.reduce((acc, order) => acc + order.quantity * order.price.finalPrice, 0)
    return (
      <form
        ref={ref}
        className="w-[100vw] fixed flex justify-center items-center top-0 left-0 z-40 overflow-y-scroll h-[100vh]"
      >
        <div onClick={() => {setCartPopupOpened(false)}} className="w-full h-full bg-black opacity-50 z-20 absolute"></div>
        <div className=" w-[90%] md:h-[80%] h-[90%] lg:w-[60%]  flex flex-col z-30 bg-white relative rounded-lg border-solid border-black border-2 p-6">
          {cartOrders.length === 0 && <p className="font-sans text-3xl text-black m-auto text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"> У вас не выбраны заказы!</p>}
          <div className="flex flex-col gap-3">
            {cartOrders.map((order) => {
                return (
                <div className="border-black border-2 rounded-2xl w-full flex items-center py-3 justify-between px-3">
                    <div className="flex gap-3 items-center">
                    <p className="font-normal font-sans text-2xl">
                        {order.displayName}
                    </p>
                    <p className="font-normal font-sans text-2xl mr-5">
                        x{order.quantity}
                    </p>
                    </div>
                    <div className="flex gap-4 items-center">
                    <div onClick={() => {deleteFromOrder(order.displayName)}} className="rounded-full cursor-pointer flex justify-center items-center border-black border-2 border-solid w-[30px] h-[30px]">
                        <p className="text-2xl">-</p>
                    </div>
                    <p className="text-2xl">
                        {order.price.finalPrice * order.quantity}
                    </p>
                    <div onClick={() => {addToOrder(order)}} className="rounded-full cursor-pointer flex justify-center items-center border-black border-2 border-solid w-[30px] h-[30px]">
                        <p className="text-2xl">+</p>
                    </div>
                    </div>
                </div>
                );
            })}
          </div>
          <div className="flex gap-7 mt-auto">
            <p className="font-sans text-3xl text-black">Общая сумма : </p>
            <p className="font-sans text-3xl text-black mt-auto">{summ}р</p>
          </div>
        </div>
      </form>
    );
  }
);
