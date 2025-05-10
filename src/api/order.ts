import axios from "axios";
class Order{
    private basicUrl:string = "https://fortniteapi.io/v2/shop?lang=en";
    private apiKey:string = import.meta.env.VITE_API_KEY;
    async fetchOrders(){
        const orders = await axios.get(this.basicUrl, {
            headers : {
                'Authorization' : this.apiKey
            }
        });
        console.log(orders.data);
        return orders.data.shop;
    }
}
const apiOrders = new Order();
export default apiOrders;