import * as React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {AppState, AppAction, AppDispatch} from 'store';

const HelloDiv = styled.div`
  padding: 10px;
  color: blue;
`;

const mapStateToProps = (state: AppState) => ({helloWorld: state.helloWorld});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  initHelloWorld: (text: string): void => {
    dispatch({
      type: 'InitHelloWorld',
      domain: 'helloWorld',
      payload: {text},
    });
  },
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

class HelloView extends React.Component<Props, {}> {
  componentDidMount(): void {
    this.props.initHelloWorld('foobar');
  }

  render(): React.ReactNode {
    if (this.props.helloWorld.status !== 'Ready') {
      return <HelloDiv>Hello Not Ready State</HelloDiv>;
    }
    return <HelloDiv>Hello {this.props.helloWorld.data}</HelloDiv>;
  }
}

export const Hello = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HelloView);
