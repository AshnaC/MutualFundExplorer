/**
 *
 * App.js
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import FundContainer from '../FundContainer';

const AppWrapper = styled.div`
  min-width: 800px;
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: darkslategray;
`;

export default function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route exact path="*" component={FundContainer} />
      </Switch>
    </AppWrapper>
  );
}
