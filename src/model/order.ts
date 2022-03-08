export interface Order  {
	createdAt: string;
	ingredients: Array<string>;
	name: string;
	number: number;
	status: string;
	updatedAt: string;
	_id: string;
}

export interface OrdersState {
    isLoading: boolean;
    hasError: boolean;
    loaded: boolean;    
    currentOrder: null | Order;
    orderRequest: boolean;
    orderFailed: boolean
    orderLoaded: boolean
};