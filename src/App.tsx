import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Wrapper></Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  background-color: aliceblue;
`;
export default App;
