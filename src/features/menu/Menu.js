import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

export const loader = async () => {
  const menu = await getMenu();
  return menu;
};

export default function Menu() {
  const menu = useLoaderData();

  const renderedMenu = menu.map((pizza) => {
    return <MenuItem pizza={pizza} key={pizza.id} />;
  });

  return <ul className="divide-y divide-stone-200 px-2">{renderedMenu}</ul>;
}
