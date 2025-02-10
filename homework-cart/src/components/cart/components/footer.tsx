interface CartFooterProps {
  totalPrice: number;
}

function CartFooter({ totalPrice }: CartFooterProps) {
  return (
    <footer className="w-full pt-[20px] border-t border-gray-700 text-right">
      <p className="font-bold text-[20px] text-gray-700">
        구매 총액 : {totalPrice}원
      </p>
    </footer>
  );
}

export default CartFooter;
