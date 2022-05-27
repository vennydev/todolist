// Module
import { createGlobalStyle } from 'styled-components';

// Component
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
  <>
  <GlobalStyle/>
    <TodoTemplate>
      <TodoHead></TodoHead>
    </TodoTemplate>
  </>
  );
}

export default App;
