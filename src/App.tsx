import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotal from "./components/OrderTotal";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, addItem, removeItem, placeOrder, setOrder } = useOrder();

  return (
    <>
      <header className="bg-[rgb(255,87,51)] py-5">
        <h1 className="text-center text-4xl font-black">Tip & Total Calculator</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents order={order} removeItem={removeItem} />
          <OrderTotal order={order} setOrder={setOrder} placeOrder={placeOrder} />
        </div>
      </main>
    </>
  );
}

export default App;
