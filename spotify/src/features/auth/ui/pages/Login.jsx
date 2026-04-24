import React from 'react';
import { Mail, Lock, Disc3, AlertCircle } from 'lucide-react';
import Input from '../../../../shared/components/Input';
import { useRHF } from '../../../../shared/hooks/useRHF';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router';

const Login = () => {
 
 let {register , handleSubmit , errors , isValid} = useRHF()
  let {handleLoginSubmit} = useAuth()


  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
        
        <div className="flex flex-col items-center mb-8">
          <Disc3 className="text-green-500 animate-spin-slow mb-2" size={40} />
          <h2 className="text-2xl font-bold text-white">Welcome back</h2>
        </div>

        {/* 3. Wrap in handleSubmit */}
        <form onSubmit={handleSubmit(handleLoginSubmit)} className="space-y-5">
          
          {/* Email Field */}
          <div>
            
            <div className="relative">

              <Input
              name="email"
              register={register}
              placeholder={"mail"}
              label={"Email"}
              rules={{required : "Email is required"}}
              type ={"email"}
              error={errors.email}
              />
            </div>
           
          </div>

          {/* Password Field */}
          <div>
            <Input
             name={"password"}
              register={register}
              placeholder={"......"}
              label={"Password"}
              rules={{
                required : "Password is required",
                minLength : {
                    value : 6,
                    message : "mimLength of 6 is required"
                }
            }}
              type ={"password"}
              error={errors.password}
              />
          </div>

          <button 
            disabled={!isValid}
            className="w-full bg-green-500 hover:bg-green-400 disabled:bg-zinc-700 disabled:cursor-not-allowed text-black font-bold py-3 rounded-lg transition-all active:scale-95"
          >
            {isValid ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p  className="mt-8 text-center text-zinc-500 text-sm">
          Don't have an account? <Link to="register" className="text-white hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;