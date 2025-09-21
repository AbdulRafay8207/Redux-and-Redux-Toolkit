import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
  const recipes = useSelector((state: RootState) => state.recipes.recipes);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.length === 0 ? (
        <p>No recipes added yet!</p>  
      ) : (
        recipes.map((recipe) => (
          <RecipeCard
          key={recipe.id}
          {...recipe}
          category={recipe.category || "Uncategorized"}
          />
        ))
      )}
    </div>
  );
};

export default RecipeList;
