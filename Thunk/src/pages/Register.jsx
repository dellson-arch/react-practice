import Input from "../shared/components/Input";
import { useRHF } from "../shared/hooks/useRHF";

const Register = () => {
  const{register , errors , isValid} = useRHF()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>

        <form className="space-y-5">
         
         <Input
         name="name"
         register={register}
         placeholder={"enter your name"}
         label={name}
         rules={{required : 'name is required'}}
         error={errors.name}
         type={'text'}
         />

         <Input
         name="email"
         register={register}
         placeholder={"enter your email"}
         label={name}
         rules={{required : 'email is required'}}
         error={errors.name}
         type={'email'}
         />

         <Input
         name="password"
         register={register}
         placeholder={"enter your password" , {
          minLength : {
            value : 6 ,
            message : "minLength of 6 is required"
          }
         }}
         label={name}
         rules={{required : 'email is required'}}
         error={errors.name}
         type={'email'}
         />

          <button
          disabled={!isValid}
          className="w-full bg-green-500 hover:bg-green-400 disabled:bg-zinc-700 disabled:text-zinc-500 text-black font-bold py-3 rounded-lg mt-4 transition-all active:scale-95 shadow-lg shadow-green-500/10"
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            {isValid ? "creating Account" : "create free account"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}




export default Register
