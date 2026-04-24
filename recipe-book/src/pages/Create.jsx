import { nanoid } from "nanoid"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import recipecontext from "../context/Brain"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Create = () => {
   const navigate = useNavigate()
   const {data , setData} =  useContext(recipecontext)

    const{register, handleSubmit , reset , formState:{errors}} = useForm()


    const onSubmit = (recipe)=>{
        recipe.id = nanoid()
        setData([...data , recipe])
        toast.success("recipe create ho gya")
        navigate("/recipes")
        reset()
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
         <input 
        className="block border-b outline-0 p-2"
        {...register("image",{
            required : "image daal lawde"
        })}
        type="url"
        placeholder="Enter image url"
        />
        <span className="text-red-400">{errors?.image?.message}</span>

        <input 
        className="block border-b outline-0 p-2"
        {...register("title",{
            required:"title cannot be empty"
        })}
        type="text" 
        placeholder="Recipe Title"
        />
        <span className="text-red-400">{errors?.title?.message}</span>

        <input 
        className="block border-b outline-0 p-2"
        {...register("chef",{
            required:"chef cannot be empty"
        })}
        type="text" 
        placeholder="Enter chef name"
        />
        <span className="text-red-400">{errors?.chef?.message}</span>

        <textarea
        className="block border-b outline-0 p-2"
        {...register("description",{
            required:"description cannot be empty"
        })}
        type="text" 
        placeholder="// start Description"
        ></textarea> 
        <span className="text-red-400">{errors?.description?.message}</span>

        <textarea
        className="block border-b outline-0 p-2"
        {...register("ingredients",{
            required:"ingredients cannot be empty"
        })}
        type="text" 
        placeholder="// write ingredients here separated by comma"
        ></textarea> 
        <span className="text-red-400">{errors?.ingredients?.message}</span>

        <textarea
        className="block border-b outline-0 p-2"
        {...register("instructions",{
            required:"instructions cannot be empty"
        })}
        type="text" 
        placeholder="// write instructions here."
        ></textarea> 
        <span className="text-red-400">{errors?.instructions?.message}</span>

          <select
        className="block border-b outline-0 p-2"
        {...register("categories",{
            required:"categories cannot be empty"
        })}
        >
        <option value="breakfast">Breakfast</option> 
        <option value="lunch">Lunch</option> 
        <option value="supper">Supper</option> 
        <option value="dinner">Dinner</option> 
        </select> 
        <span className="text-red-400">{errors?.categories?.message}</span>

        <button className=" mt-5 block bg-gray-900 px-4 py-2 rounded">Save Recipe</button>
    </form>
  )
}

export default Create
