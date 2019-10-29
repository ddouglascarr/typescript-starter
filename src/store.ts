import {createStore, Store, Dispatch} from 'redux';
import {
  Action as HelloWorldAction,
  reducer as helloWorldReducer,
  initialState as helloWorldInitialState,
  State as HelloWorldState,
} from 'helloWorld';

export type AppAction = HelloWorldAction;
export type AppDispatch = Dispatch<AppAction>;

type Idle = 'Idle';
type Ready = 'Ready';
type Status = Idle | Ready;
export type AppState = {
  helloWorld: HelloWorldState;
};

export const initialState: AppState = {
  helloWorld: helloWorldInitialState,
};

export const configureStore = (
  initialState: AppState,
): Store<AppState, AppAction> => {
  const rootReducer = (
    state: AppState = initialState,
    action: AppAction,
  ): AppState => ({
    helloWorld:
      action.domain === 'helloWorld'
        ? helloWorldReducer(state.helloWorld, action)
        : state.helloWorld,
  });

  return createStore<AppState, AppAction, unknown, unknown>(rootReducer);
};
