export interface Order  {
	createdAt: string;
	ingredients: Array<string>;
	name: string;
	number: number;
	status: string;
	updatedAt: string;
	_id: string;
}

export interface Orders  {
	orders: Array<Order>;
	total: number;
	totalToday: number;
}

export interface OrderInfo  {
	name: string;
	order: { number: number };
	success: boolean;
}

export interface OrdersState {
    isLoading: boolean;
    hasError: boolean;
    loaded: boolean;    
    currentOrder: null | Order;
    createOrder: null | OrderInfo;
    orderRequest: boolean;
    orderFailed: boolean
    orderLoaded: boolean
};

