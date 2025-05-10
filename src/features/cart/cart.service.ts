// src/entities/cart/model/cart.service.ts

import type { TCardOrders } from "../../types/common/TCartOrders.type";
import type { TOrder } from "../../types/common/TOrder.type";


class CartService {
  addToCart(currentOrders: TCardOrders[], newOrder: TOrder | TCardOrders): TCardOrders[] {
    const index = currentOrders.findIndex(
      (order) => order.displayName === newOrder.displayName
    );

    if (index >= 0) {
      return currentOrders.map((order, i) =>
        i === index ? { ...order, quantity: (order.quantity || 1) + 1 } : order
      );
    } else {
      return [...currentOrders, { ...newOrder, quantity : 1 } as TCardOrders];
    }
  }
  removeFromCart(currentOrders: TCardOrders[], displayName: string): TCardOrders[] {
    const countOfOrder = currentOrders.find((order) => order.displayName === displayName)?.quantity;
    if (countOfOrder){
        if (countOfOrder > 1){
            return currentOrders.map( (order) => {
                if (order.displayName === displayName){
                    return {...order, quantity : order.quantity - 1}
                }
                return order
            } )
        }
        else{
            return currentOrders.filter((order) => order.displayName !== displayName);
        }
    }
    return currentOrders;
  }

  clearCart(): TOrder[] { // на всякий случай не знаю
    return [];
  }
}

export const cartService = new CartService();


