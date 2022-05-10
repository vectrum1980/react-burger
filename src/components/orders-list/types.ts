import { Order } from '../../model/order';

export type TStatusArrays = {
	done: Array<Order>;
	pending: Array<Order>
}