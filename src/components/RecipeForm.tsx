import { useState, type FC } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe, updateRecipe } from '../redux/recipeSlice';
import { useNavigate } from 'react-router-dom';
import type { Recipe } from '../redux/recipeSlice'; // import Recipe type for consistency

interface RecipeFormProps {
  recipe?: Recipe; // use your existing Recipe type for prop
}

const RecipeForm: FC<RecipeFormProps> = ({ recipe }) => {
  const [name, setName] = useState(recipe?.name || '');
  const [ingredients, setIngredients] = useState(recipe?.ingredients.join(', ') || '');
  const [instructions, setInstructions] = useState(recipe?.instructions || '');
  const [image, setImage] = useState(recipe?.image || ''); // renamed from imageUrl to image
  const [category, setCategory] = useState(recipe?.category || 'Main Course');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a newRecipe object consistent with Recipe type
    const newRecipe: Recipe = {
      id: recipe ? recipe.id : String(Date.now()), // Convert ID to string
      name,
      ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
      instructions,
      image,
      category,
    };

    if (recipe) {
      dispatch(updateRecipe(newRecipe)); // Update existing recipe
    } else {
      dispatch(addRecipe(newRecipe)); // Add new recipe
    }

    navigate('/recipes'); // Navigate back to recipes list
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Recipe Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input input-bordered w-full"
        required
      />
      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        className="textarea textarea-bordered w-full"
        required
      />
      <input
        type="text"
        placeholder="Ingredients (comma-separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="input input-bordered w-full"
        required
      />
      <input
        type="text"
        placeholder="Image URL (optional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="input input-bordered w-full"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="select select-bordered w-full"
      >
        <option value="Main Course">Main Course</option>
        <option value="Dessert">Dessert</option>
        <option value="Snack">Snack</option>
      </select>
      <button type="submit" className="btn btn-primary w-full">
        {recipe ? 'Update Recipe' : 'Add Recipe'}
      </button>
    </form>
  );
};

export default RecipeForm;
