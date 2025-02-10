import IconCart from '../icons/icon-cart';

function CartHeader() {
  return (
    <header className="w-full flex flex-row justify-start items-center pb-[8px] border-b border-gray-700">
      <IconCart />
      <h2 className="font-bold text-[24px] text-gray-700">장바구니</h2>
    </header>
  );
}

export default CartHeader;
