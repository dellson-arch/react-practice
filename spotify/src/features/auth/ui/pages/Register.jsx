import React from 'react';
import { User, Mail, Lock, Disc3, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useRHF } from '../../../../shared/hooks/useRHF';
import Input from '../../../../shared/components/Input';
import { Link } from 'react-router';

const Register = () => {
  let {register , handleSubmit , errors , isValid} = useRHF()
   let {handleRegisterSubmit} = useAuth()

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
        
        <div className="flex flex-col items-center mb-6">
          <Disc3 className="text-green-500 animate-spin-slow mb-2" size={40} />
          <h2 className="text-2xl font-bold text-white tracking-tight">Create Account</h2>
          <p className="text-zinc-400 text-sm">Join the VibeStream community</p>
        </div>

        <form onSubmit={handleSubmit(handleRegisterSubmit)} className="space-y-4">
          
          {/* Username Field */}
          <div>
           
              <Input
              name="name"
              register={register}
              placeholder={"Enter your name"}
              label={"name"}
              rules={{required : "name is required"}}
              type ={"text"}
              error={errors.name}
              />
          </div>

          {/* Email Field */}
          <div>
           
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
            className="w-full bg-green-500 hover:bg-green-400 disabled:bg-zinc-700 disabled:text-zinc-500 text-black font-bold py-3 rounded-lg mt-4 transition-all active:scale-95 shadow-lg shadow-green-500/10"
          >
            {isValid ? "Creating Account..." : "Create Free Account"}
          </button>
        </form>

        <p  className="mt-8 text-center text-zinc-500 text-sm">
          Already a member? <Link to="/auth" className="text-white hover:underline font-medium">Log in here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;