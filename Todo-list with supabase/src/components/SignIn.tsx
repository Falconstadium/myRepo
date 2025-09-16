import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router';
import type { showSignType } from '../pages/LoginPage';
import { useAuthStore } from '../store/supabase';
import GoogleSign from './GoogleSign';

function SignIn({ showSign }: showSignType) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const { signIn, setLoading } = useAuthStore();

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signIn(email, password);

      if (result) {
        navigate('/');
      }
    } catch (err) {
      setError(`${err}: error occured`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="font-bold text-4xl text-center pb-12">Welcome Back!</h2>
      <GoogleSign />
      <div className="flex items-center justify-center gap-4 py-6">
        <div className="w-full h-0.5 bg-neutral-600"></div>
        <h5 className="text-neutral-400 text-center font-semibold text-xs">
          or
        </h5>
        <div className="w-full h-0.5 bg-neutral-600"></div>
      </div>
      <form className="space-y-4 max-w-xs mx-auto" onSubmit={handleSignIn}>
        <div className="grid gap-1.5">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="email"
            name=""
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="border-neutral-400 border rounded-sm py-2 px-2 focus:outline-none text-xs"
            required
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            type="password"
            name=""
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="border-neutral-400 border rounded-sm py-2 px-2 focus:outline-none text-xs"
            required
          />
        </div>
        <div className="flex items-center justify-between px-4">
          <p className="text-xs">
            No account yet?{' '}
            <span
              className=" text-neutral-400 font-semibold cursor-pointer hover:underline"
              onClick={showSign}>
              Create one
            </span>
          </p>
          <button
            type="submit"
            className="bg-neutral-200 text-neutral-900 text-xs uppercase py-2 px-4 font-medium rounded transition-colors duration-300 hover:bg-neutral-300">
            Sign in
          </button>
        </div>
      </form>
      {error && <p>Error</p>}
    </>
  );
}

export default SignIn;
