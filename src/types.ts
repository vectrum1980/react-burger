import { store } from './services/store';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { TAuthActions } from './services/actions/auth';
import { TIngredientsActions } from './services/actions/ingredients';
import { TWSActionsAuthActions } from './services/actions/ws-auth';
import { TWSActionsActions } from './services/actions/ws';

type TApplicationActions = TAuthActions | TIngredientsActions | TWSActionsAuthActions | TWSActionsActions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
	ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;

export type TWSAction = {
	wsInit: string,
	wsClose: string,
	wsSendMessage: string,
	onOpen: string,
	onClose: string,
	onError: string,
	onMessage: string
}