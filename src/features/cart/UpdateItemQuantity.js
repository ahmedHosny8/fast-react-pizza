import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  const handleItemDecrease = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };
  const handleItemIncrease = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleItemDecrease}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={handleItemIncrease}>
        +
      </Button>
    </div>
  );
}
