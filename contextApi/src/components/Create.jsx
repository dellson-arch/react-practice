import { nanoid } from "nanoid"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import TodoContext from "../context/TodoContext"

const Create = () => {

    const [todo , setTodo] = useContext(TodoContext)

    const{
     register,
     handleSubmit , 
     reset,
     formState : {errors}
    } = useForm()

    // console.log("Current Errors Object:", errors) //anywhere inside your component function, like right after you destructure errors:

   const SubmitHandler = (data)=>{
     console.log(data)

     data.isCompleted = false,
     data.id = nanoid()

     setTodo([...todo , data])

     reset()
   }
//    console.log(errors.title.message)

  return (
   <form onSubmit={handleSubmit(SubmitHandler)}>

    <input 
    {...register("title",{
        required : "title cannot be empty"
    })}
    type="text"
    placeholder="title"
    />

    <small>{errors?.title?.message}</small>

    <button>Submit</button>

   </form>
  )
}

export default Create
