import { useState } from "react";
import { OrderItem, menuItem } from "../types"; 

const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]); 

  const addItem = (item: menuItem) => {
   
    setOrder((prevOrder) => [...prevOrder, { ...item, quantity: 1 }]); 
  };

  const removeItem = (id: number) => {
    
    setOrder((prevOrder) => prevOrder.filter((item) => item.id !== id));
  };

  const placeOrder = () => {
   
    console.log("Order placed:", order);
    setOrder([]); 
  };

  return { order, addItem, removeItem, placeOrder, setOrder }; 
};

export default useOrder;
