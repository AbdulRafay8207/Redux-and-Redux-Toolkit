import { type FC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteRecipe } from '../redux/recipeSlice';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string;
  imageUrl?: string;
  category?: string;
}

const RecipeCard: FC<RecipeCardProps> = ({ id, name, ingredients, instructions, imageUrl }) => {
  const dispatch = useDispatch();

 const handleDelete = () => {
  if (window.confirm('Are you sure you want to delete this recipe?')) {
    dispatch(deleteRecipe(id)); // id is already string now
  }
};


  return (
    <div className="card w-80 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
  <figure className="h-48 overflow-hidden">
    <img
      src={imageUrl || 'https://via.placeholder.com/300x192'}
      alt={name}
      className="w-full h-full object-cover"
    />
  </figure>

  <div className="p-4 flex flex-col justify-between h-56">
    <h2 className="card-title text-xl font-semibold text-gray-900 mb-2">{name}</h2>
    
    <p className="text-sm text-gray-600 mb-2 font-medium">
      <span className="font-semibold">Ingredients:</span> {ingredients.join(', ')}
    </p>

    <p className="text-sm text-gray-700 flex-grow mb-4">
      {instructions.length > 100 ? instructions.slice(0, 100) + '...' : instructions}
    </p>

    <div className="card-actions flex justify-between">
  <Link
    to={`/edit/${id}`}
    className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
  >
    Edit
  </Link>
  <button
  style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '6px' }}
  onClick={handleDelete}
>
  Delete
</button>
</div>

  </div>
</div>

  );
};

export default RecipeCard;
