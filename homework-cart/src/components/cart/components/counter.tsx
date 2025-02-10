import IconMinus from '../icons/icon-minus';
import IconPlus from '../icons/icon-plus';
import { useState } from 'react';

interface CounterProps {
  stock: number;
  currentCount: number;
}

function Counter({ stock, currentCount }: CounterProps) {
  const [count, setCount] = useState(1);

  const handleDecrease = () => {
    const nextCount = count - 1;

    if (nextCount < 1) return;

    setCount(nextCount);
  };

  const handleIncrease = () => {
    const nextCount = count + 1;

    if (nextCount > stock) return;

    setCount(nextCount);
  };

  return (
    <div className="w-[61px] h-[28px] px-[8px] py-[6px] flex flex-row justify-between items-center border border-gray-300 rounded-[18px] bg-gray-100">
      <button
        type="button"
        aria-label="상품 수량 줄이기 버튼"
        className="min-w-[16px]"
        onClick={handleDecrease}
      >
        <IconMinus />
      </button>

      <output className="px-[2px] font-semibold text-[14px] text-gray-700">
        {currentCount}
      </output>

      <button
        type="button"
        aria-label="상품 수량 늘리기 버튼"
        className="min-w-[16px]"
        onClick={handleIncrease}
      >
        <IconPlus />
      </button>
    </div>
  );
}

export default Counter;
