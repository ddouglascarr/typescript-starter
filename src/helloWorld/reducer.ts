type InitHelloWorldAction = {
  readonly type: 'InitHelloWorld';
  readonly domain: 'helloWorld';
  readonly payload: {readonly text: string};
};

export type Action = InitHelloWorldAction;

export type State =
  | {readonly status: 'Idle'}
  | {readonly status: 'Ready'; readonly data: string};

export const initialState: State = {status: 'Idle' as const};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'InitHelloWorld':
      return {status: 'Ready', data: action.payload.text};
    default:
      return state;
  }
};
