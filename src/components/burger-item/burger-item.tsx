import React from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-item.module.css';
import { Burger } from '../../model/burger'
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import { useRef } from 'react';
import { XYCoord } from 'dnd-core'

type TDragItem = {
	index: number
	id: string
}

const BurgerItem: React.FunctionComponent<Burger> = ({ item, index, deleteIngredient, moveItem }) => {
  const id = item._id;
  const ref = useRef<HTMLLIElement>(null);
  const [, drop] = useDrop({
    accept: 'item',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(el: TDragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = el.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);

      el.index = hoverIndex;
    },
  });
  const [{ isDrag }, drag] = useDrag({
    type: 'item',
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const opacity = isDrag ? 0 : 1;
  drag(drop(ref));
  
  return (
    <li className={styles.item} ref={ref} style={{ opacity }}>
      <DragIcon type='primary' />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={deleteIngredient}
      />
    </li>
  );
}

export default BurgerItem;
