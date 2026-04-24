import { useContext } from "react"
import recipecontext from "../context/Brain"
import { useNavigate, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const SingleRecipe = () => {
   const navigate = useNavigate()
   const {data , setData} =  useContext(recipecontext)

    const{register, handleSubmit , reset , formState:{errors}} = useForm()

    const onSubmit = (recipe)=>{
        recipe.id = nanoid()
        setData([...data , recipe])
        toast.success("Recipe created successfully 🚀")
        navigate("/recipes")
        reset()
    }

  const params = useParams();
  const recipe = data.find((recipe) => String(params.id) === String(recipe.id))

  return recipe ? (
      <div className="w-full flex flex-col lg:flex-row bg-gray-950 min-h-screen text-gray-100">
        
        {/* LEFT PANEL */}
        <div className="left lg:w-1/2 w-full p-10 lg:p-12 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-gray-800 overflow-y-auto">
           <div className="w-full max-w-md mx-auto flex flex-col gap-6">
             <h1 className="text-4xl lg:text-5xl font-black text-orange-400 leading-tight">{recipe.title}</h1>
             <img className="w-full h-80 lg:h-[50vh] object-cover rounded-2xl shadow-2xl border border-gray-700" src={recipe.image} alt={recipe.title} />
             <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex flex-col gap-2">
               <p className="text-gray-400 text-sm">Chef: <span className="text-gray-100 font-semibold">{recipe.chef}</span></p>
               <p className="text-gray-400 text-sm">Category: <span className="text-gray-100 font-semibold capitalize">{recipe.categories}</span></p>
             </div>
             <p className="text-gray-300 text-base leading-relaxed">{recipe.description}</p>
           </div>
        </div>

        {/* RIGHT PANEL */}
        <form onSubmit={handleSubmit(onSubmit)} className="right lg:w-1/2 w-full p-8 lg:p-10 overflow-y-auto">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-orange-500 text-center">Create New Recipe</h2>

          {/* Image URL */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-300 mb-2">Image URL</label>
            <input 
              className="w-full bg-gray-900 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none placeholder-gray-600 transition"
              {...register("image",{ required : "Image URL is required" })}
              type="url"
              placeholder="https://example.com/image.jpg"
            />
            {errors?.image && <span className="text-red-500 text-xs mt-1 block">{errors?.image?.message}</span>}
          </div>

          {/* Recipe Title */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-300 mb-2">Recipe Title</label>
            <input 
              className="w-full bg-gray-900 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none placeholder-gray-600 transition"
              {...register("title",{ required:"Recipe title is required" })}
              type="text" 
              placeholder="e.g., Spaghetti Carbonara"
            />
            {errors?.title && <span className="text-red-500 text-xs mt-1 block">{errors?.title?.message}</span>}
          </div>

          {/* Chef Name */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-300 mb-2">Chef Name</label>
            <input 
              className="w-full bg-gray-900 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none placeholder-gray-600 transition"
              {...register("chef",{ required:"Chef name is required" })}
              type="text" 
              placeholder="Your name"
            />
            {errors?.chef && <span className="text-red-500 text-xs mt-1 block">{errors?.chef?.message}</span>}
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-300 mb-2">Description</label>
            <textarea
              className="w-full bg-gray-900 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none placeholder-gray-600 transition resize-none"
              {...register("description",{ required:"Description is required" })}
              rows="3"
              placeholder="Describe your recipe..."
            ></textarea> 
            {errors?.description && <span className="text-red-500 text-xs mt-1 block">{errors?.description?.message}</span>}
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-300 mb-2">Ingredients</label>
            <textarea
              className="w-full bg-gray-900 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none placeholder-gray-600 transition resize-none"
              {...register("ingredients",{ required:"Ingredients are required" })}
              rows="3"
              placeholder="Flour, Sugar, Eggs... (comma separated)"
            ></textarea> 
            {errors?.ingredients && <span className="text-red-500 text-xs mt-1 block">{errors?.ingredients?.message}</span>}
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-300 mb-2">Instructions</label>
            <textarea
              className="w-full bg-gray-900 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none placeholder-gray-600 transition resize-none"
              {...register("instructions",{ required:"Instructions are required" })}
              rows="4"
              placeholder="Step 1: Mix ingredients...&#10;Step 2: Cook..."
            ></textarea> 
            {errors?.instructions && <span className="text-red-500 text-xs mt-1 block">{errors?.instructions?.message}</span>}
          </div>

          {/* Category */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-300 mb-2">Category</label>
            <select
              className="w-full bg-gray-900 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none cursor-pointer transition"
              {...register("categories",{ required:"Category is required" })}
            >
              <option value="">Select a category</option>
              <option value="breakfast">Breakfast</option> 
              <option value="lunch">Lunch</option> 
              <option value="supper">Supper</option> 
              <option value="dinner">Dinner</option> 
            </select> 
            {errors?.categories && <span className="text-red-500 text-xs mt-1 block">{errors?.categories?.message}</span>}
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 py-3 rounded-xl font-bold text-black mt-4 shadow-lg transition-transform transform hover:scale-105"
          >
            Save Recipe
          </button>
        </form>
      </div>
  ) : (
    <div className="w-full flex items-center justify-center bg-gray-950 min-h-screen">
      <p className="text-gray-400 text-lg">Loading...</p>
    </div>
  )
}

export default SingleRecipe;
