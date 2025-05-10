import { useCallback, useEffect, useState } from "react";
import type { TFetchStatus } from "../types/common/TFetchStatus.type";
import apiOrders from "../api/order";
import { retryFetch } from "../utils/retryFetch";
import Orders from "./Orders";
import Loader from "./Loader";
import Error from "./Error";
import type { TCardOrders } from "../types/common/TCartOrders.type";
import CssTransitionCartPopup from "../entity/cart/ui/CssTransitionCartPopup";
import Cart from "../entity/cart/ui/Cart";
import { cartService } from "../features/cart/cart.service";
import type { TOrder } from "../types/common/TOrder.type";

const Main = () => {

  const [fetchOrderStatus, setFetchOrderStatus] =
    useState<TFetchStatus>("pending");
  const [orders, setOrders] = useState([]);
  const [choisenOrders, setChoisenOrders] = useState<TCardOrders[]>([]);
  const [isCartPopupOpened, setCartPopupOpened] = useState<boolean>(false);

  useEffect(() => {
    retryFetch(apiOrders.fetchOrders.bind(apiOrders))
      .then((orders) => {
        setOrders(orders);
        setFetchOrderStatus("fullfiled");
      })
      .catch((err) => {
        setFetchOrderStatus("rejected");
        console.warn(err);
      });
  }, []);

  const addToOrder = useCallback((order: TCardOrders | TOrder) => {
    setChoisenOrders((orders) => cartService.addToCart(orders, order));
  }, []);

  const removeFromOrder = useCallback((displayName: string) => {
    setChoisenOrders((orders) =>
      cartService.removeFromCart(orders, displayName)
    );
  }, []);

  return (
    <div className="flex flex-col container min-h-[calc(100vh-126px)] relative">
      <Cart setCartPopupOpened={setCartPopupOpened} orders={choisenOrders} />
      {fetchOrderStatus === "fullfiled" && (
        <Orders addToOrder={addToOrder} orders={orders} />
      )}
      {fetchOrderStatus === "pending" && <Loader />}
      {fetchOrderStatus === "rejected" && <Error />}
      <CssTransitionCartPopup
        addToOrder={addToOrder}
        deleteFromOrder={removeFromOrder}
        cartOrders={choisenOrders}
        isCartPopupOpened={isCartPopupOpened}
        setCartPopupOpened={setCartPopupOpened}
      />
    </div>
  );
};

export default Main;
