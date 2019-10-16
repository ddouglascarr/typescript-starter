import * as React from 'react';
import styled from 'styled-components';

const HelloDiv = styled.div`
  padding: 10px;
  color: blue;
`;

export class Hello extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return <HelloDiv>Hello Reloadable World</HelloDiv>;
  }
}
