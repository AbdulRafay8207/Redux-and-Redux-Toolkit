import { useSelector, useDispatch } from 'react-redux';
import { deleteRecipe } from '../redux/recipeSlice';
import { Link } from 'react-router-dom';
import type { RootState, AppDispatch } from '../redux/store'; 
import type { Recipe } from '../redux/recipeSlice';  

const Recipes = () => {
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this recipe?')) {
      dispatch(deleteRecipe(id));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Recipes</h1>

      {recipes.length === 0 ? (
        <p className="text-gray-500">No recipes added yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {recipes.map((recipe: Recipe) => (
            <div key={recipe.id} className="card bg-base-100 shadow-md">
              <figure>
                <img
                  src={recipe.image || 'https://via.placeholder.com/300'}
                  alt={recipe.name}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{recipe.name}</h2>
                <p><strong>Category:</strong> {recipe.category || 'N/A'}</p>
                <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
                <div className="card-actions justify-end">
                  <Link to={`/edit/${recipe.id}`} className="btn btn-sm btn-warning">Edit</Link>
                  <button onClick={() => handleDelete(recipe.id)} className="btn btn-sm btn-error">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipes;
