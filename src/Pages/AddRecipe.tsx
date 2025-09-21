import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addRecipe } from '../redux/recipeSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddRecipe = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(addRecipe({
      id: uuidv4(),
      name,
      ingredients: ingredients.split(',').map(i => i.trim()),
      instructions,
      image,
      category,
    }));

    navigate('/recipes');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 p-4">
      <h1 className="text-2xl font-bold">Add New Recipe</h1>

      <input
        type="text"
        placeholder="Recipe Name"
        className="input input-bordered w-full"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Ingredients (comma-separated)"
        className="input input-bordered w-full"
        value={ingredients}
        onChange={e => setIngredients(e.target.value)}
        required
      />

      <textarea
        placeholder="Cooking Instructions"
        className="textarea textarea-bordered w-full"
        value={instructions}
        onChange={e => setInstructions(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Image URL (optional)"
        className="input input-bordered w-full"
        value={image}
        onChange={e => setImage(e.target.value)}
      />

      <select
        className="select select-bordered w-full"
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option disabled value="">Select Category</option>
        <option>Dessert</option>
        <option>Main Course</option>
        <option>Snack</option>
      </select>

      <button type="submit" className="btn btn-primary w-full">Add Recipe</button>
    </form>
  );
};

export default AddRecipe;
