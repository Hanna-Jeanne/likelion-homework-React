import CartHeader from './components/header';
import CartFooter from './components/footer';
import CartList from './components/list';
import { useState } from 'react';

function Cart() {
  const [totalPrice, setTotalPrice] = useState();

  return (
    <section
      className="
      w-full min-w-[320px] border-[6px] border-gray-700 rounded-[8px] p-[20px] inline-flex flex-col justify-between items-center gap-[20px]"
    >
      <CartHeader />
      <CartList />
      <CartFooter totalPrice={setTotalPrice} />
    </section>
  );
}

export default Cart;
