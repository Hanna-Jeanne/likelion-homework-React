import ListItem from './list-item';
import data from '@/data.json';

interface CartListProps {
  key: string;
  image: string;
  name: string;
  stock: number;
  price: number;
  currentCount: number;
  onChange: () => void;
}

function CartList({ currentCount, onChange }: CartListProps) {
  return (
    <ul className="w-full flex flex-col justify-between items-center gap-[20px]">
      {data.map((item) => {
        const key = item.id;
        const image = item.image;
        const name = item.name;
        const price = item.price;
        const stock = item.stock;

        const handlePrice = (price, currentCount) => {
          return price * currentCount;
        };

        return (
          <ListItem
            key={key}
            image={image}
            name={name}
            price={price.toLocaleString()}
            stock={stock}
            currentCount={currentCount}
            onChange={handlePrice}
          />
        );
      })}
    </ul>
  );
}

export default CartList;
