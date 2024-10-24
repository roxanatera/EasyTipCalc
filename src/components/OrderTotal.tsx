import { useMemo, useState } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
  order: OrderItem[],
  setOrder: (order: OrderItem[]) => void, 
  placeOrder: () => void  
};

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-15",
    value: 0.15,
    label: "15%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
];

export default function OrderTotal({ order, setOrder, placeOrder }: OrderTotalProps) {
  const [selectedTip, setSelectedTip] = useState<number>(0.1); 

  // Calcular el subtotal
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  // Calcular el monto de la propina
  const tipAmount = useMemo(
    () => subTotalAmount * selectedTip,
    [subTotalAmount, selectedTip]
  );

  // Calcular el total
  const totalAmount = subTotalAmount + tipAmount;

  const handlePlaceOrder = () => {
    placeOrder(); 
    setOrder([]); 
  };

 
  if (order.length === 0) {
    return null; 
  }

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Total and Tip</h2>

        <p>
          Subtotal to pay: {""}
          <span className="font-bold">€{formatCurrency(subTotalAmount)}</span>
        </p>

        {/* Sección de selección de propinas */}
        <div>
          <h3 className="font-black text-xl">Tip:</h3>
          <form>
            {tipOptions.map((tip) => (
              <div key={tip.id} className="flex items-center space-x-2">
                <label htmlFor={tip.id} className="text-lg">
                  {tip.label}
                </label>
                <input
                  id={tip.id}
                  type="radio"
                  name="tip"
                  value={tip.value}
                  checked={selectedTip === tip.value}
                  onChange={() => setSelectedTip(tip.value)}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </form>
        </div>

        <p>
          Tip: {""}
          <span className="font-bold">€{tipAmount.toFixed(2)}</span>
        </p>

        <p>
          Total to pay: {""}
          <span className="font-bold">€{totalAmount.toFixed(2)}</span>
        </p>
      </div>

      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-50"
        disabled={totalAmount === 0} 
        onClick={handlePlaceOrder} 
      >
        Confirm Payment
      </button>
    </>
  );
}
