import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RecipeForm from '../components/RecipeForm';
import type { RootState } from '../redux/store';

const EditRecipe = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = useSelector((state: RootState) =>
    state.recipes.recipes.find((r) => r.id === id)
  );

  if (!recipe) {
    return <Navigate to="/recipes" replace />;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Edit Recipe</h1>
      <RecipeForm recipe={recipe} />
    </div>
  );
};

export default EditRecipe;
