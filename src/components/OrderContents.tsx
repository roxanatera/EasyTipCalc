import { formatCurrency } from "../helpers";
import {  OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id:number) => void
};

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-3xl">Order Summary</h2>
      <div className="space-y-3 mt-10">
        {order.length === 0 ? (
          <p className="text-center">The order is empty</p>
        ) : (
          order.map((item) => (
            <div key={item.id}className="flex justify-between item-center border-t border-gray-200 py-5 last:border-b-0">
              <div>
                <p className="text-lg font-semibold"> 
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
              <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black flex items-center justify-center"
              onClick={() => removeItem(item.id)}
              >
                x
                
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
