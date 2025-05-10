import React, { type FC, type SetStateAction } from "react";
import type { TCardOrders } from "../../../types/common/TCartOrders.type";

interface ICartItem {
  order: TCardOrders;
  deleteFromOrder: (dispalyName: string) => void;
  addToOrder: (order: TCardOrders) => void;
}
const CartItem:FC<ICartItem> = ({order, deleteFromOrder, addToOrder}) => {
  return (
    <div className="border-black border-2 rounded-2xl w-full flex items-center py-3 justify-between px-3">
      <div className="flex gap-3 items-center">
        <p className="font-normal font-sans text-2xl">{order.displayName}</p>
        <p className="font-normal font-sans text-2xl mr-5">x{order.quantity}</p>
      </div>
      <div className="flex gap-4 items-center">
        <div
          onClick={() => {
            deleteFromOrder(order.displayName);
          }}
          className="rounded-full cursor-pointer flex justify-center items-center border-black border-2 border-solid w-[30px] h-[30px]"
        >
          <p className="text-2xl">-</p>
        </div>
        <p className="text-2xl">{order.price.finalPrice * order.quantity}</p>
        <div
          onClick={() => {
            addToOrder(order);
          }}
          className="rounded-full cursor-pointer flex justify-center items-center border-black border-2 border-solid w-[30px] h-[30px]"
        >
          <p className="text-2xl">+</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
