import { useState } from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

export interface showSignType {
  showSign: () => void;
}

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const showSign = () => {
    setShow(!show);
  };

  return (
    <main className="bg-neutral-950 text-neutral-200 min-h-dvh font-main place-content-center">
      <article className="max-w-sm mx-auto">
        {show ? <SignUp showSign={showSign} /> : <SignIn showSign={showSign} />}
      </article>
    </main>
  );
};

export default LoginPage;
