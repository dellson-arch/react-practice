import { Link } from "react-router-dom"

const RecipeCard = (props) => {
    const {id , title , image , description , chef} = props.recipe
  return (
    <Link to={`/recipes/detail/${id}/`} className="block w-[23vw] rounded-lg overflow-hidden bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out hover:-translate-y-2">                         
      <div className="relative overflow-hidden bg-gray-800 h-[20vh]">
        <img className="object-cover w-full h-full hover:scale-110 transition-transform duration-500" src={image} alt={title} />
      </div>
      <div className="p-4">
        <h1 className="font-bold text-lg text-white line-clamp-2 mb-2">{title}</h1>
        <div className="flex items-center mb-3">
          <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
          <small className="font-semibold text-gray-300 text-sm">{chef}</small>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
          {description.slice(0,100)}...{" "}
          <span className="text-orange-500 font-semibold hover:text-orange-600">more</span>
        </p>
      </div>
    </Link>
  )
}

export default RecipeCard




//The reason you use Link from react-router-dom is because you want this card to be clickable and navigate to another route/page in your React app without reloading the page.