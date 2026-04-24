import { useContext } from "react"
import recipecontext from "../context/Brain"
import RecipeCard from "../components/RecipeCard"

const Recipes = () => {
  const {data} = useContext(recipecontext)

  const renderRecipes = data.map((recipe)=>(
    <RecipeCard key={recipe.id} recipe={recipe}/>
  ))
  return (
    <div className="flex flex-wrap gap-[2rem]">
     {data.length > 0 ? renderRecipes : ""}
    </div>
  )
}

export default Recipes
