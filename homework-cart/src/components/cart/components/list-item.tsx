import Counter from './counter';

interface ListItemProps {
  image: string;
  name: string;
  price: number | string;
  stock: number;
  currentCount: number;
}

function ListItem({ image, name, price, stock, currentCount }: ListItemProps) {
  return (
    <li className="w-full px-[8px] py-[5px] flex flex-row justify-between items-center gap-[12px]">
      <img className="w-[64px] h-[64px] rounded-full" src={image} alt={name} />

      <div className="w-full min-w-0">
        <h3 className="mb-[8px] font-normal text-[20px] text-gray-700 leading-none whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </h3>
        <p className="font-extrabold text-[18px] text-gray-700 leading-none whitespace-nowrap overflow-hidden text-ellipsis">
          {price} 원
        </p>
      </div>

      <Counter stock={stock} currentCount={currentCount} />
    </li>
  );
}

export default ListItem;
