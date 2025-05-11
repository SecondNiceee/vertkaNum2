import { memo , type FC } from "react";
import type { TOrder } from "../types/common/TOrder.type";
import Order from "./Order";

interface IOrders {
  orders: TOrder[];
  addToOrder : (order : TOrder) => void
}
const Orders: FC<IOrders> = ({ orders, addToOrder }) => {

  return (
    <div className="grid grid-cols-1 480:grid-cols-2 md:grid-cols-4 gap-4 container py-6">
      {orders.length ? orders.map((order, i) => (
        <Order key={i} addToOrder={addToOrder} {...order} />
      )) : 
      <p className="text-black text-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sans mx-auto">Not Founded</p>
       }
    </div>
  );
};

export default memo(Orders);
