import { Route, Routes } from 'react-router-dom';
import LogIn from '@pages/LogIn';
import DashBoard from '@pages/DashBoard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
};

export default App;
