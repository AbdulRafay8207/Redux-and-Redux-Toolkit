// App.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Recipes from './Pages/Recipes';
import AddRecipe from './Pages/AddRecipe';
import EditRecipe from './Pages/EditRecipe';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/recipes" replace />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/edit/:id" element={<EditRecipe />} />
          <Route path="*" element={<Navigate to="/recipes" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
