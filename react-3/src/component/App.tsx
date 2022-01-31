import Header from './Header/Header';
import { FC } from 'react';


const App: FC = () => {
  const handleOnClick = () => {
    console.log('123');
  }

  return (
    <div className="App">
      <Header buttonText="edit">
        Title
      </Header>
      <Header buttonText="save" onClick={handleOnClick}>
        Title2
      </Header>
      Hello World
    </div>
  );
}

export default App;
