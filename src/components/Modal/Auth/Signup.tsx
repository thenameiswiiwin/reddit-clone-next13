import { Button } from '@components/Button';
import { Spinner } from '@components/icons/Spinner';
import { auth } from '@firebase/clientApp';
import { FIREBASE_ERRORS } from '@firebase/errors';
import Link from 'next/link';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { FormInput } from './FormInput';
import { OAuthButtons } from './OAuthButtons';

interface SignupProps {
  toggleView: (view: string) => void;
}

export const Signup = ({ toggleView }: SignupProps) => {
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (error) setError('');
    if (signUpForm.password !== signUpForm.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

  const onChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-6 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-xl font-medium">Sign Up</h2>
          <p className="mt-2 text-xs text-gray-600">
            By continuing, you agree are setting up a Reddit account and agree
            to our{' '}
            <Link
              href="https://www.redditinc.com/policies/user-agreement"
              className="font-medium text-blue-500 hover:text-blue-400"
            >
              User Agreement
            </Link>{' '}
            and{' '}
            <Link
              href="https://www.reddit.com/policies/privacy-policy"
              className="font-medium text-blue-500 hover:text-blue-400"
            >
              Privacy Policy
            </Link>
          </p>
        </div>

        <div className="mt-16 sm:mx-auto sm:w-full sm:max-w-md">
          <OAuthButtons />

          <div className="my-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 font-bold uppercase text-gray-500">
                  Or
                </span>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <FormInput
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              onChange={onChange}
            />
            <FormInput
              name="password"
              type="password"
              placeholder="Password"
              onChange={onChange}
            />
            <FormInput
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={onChange}
            />
            <div className="text-center text-sm text-red-500">
              {error ||
                FIREBASE_ERRORS[
                  userError?.message as keyof typeof FIREBASE_ERRORS
                ]}
            </div>
            <Button type="submit" variant="tertiary" size="tertiary">
              {loading ? <Spinner /> : 'Sign Up'}
            </Button>

            <div className="flex items-center justify-between">
              <div className="text-xs">
                Already a redditor?{' '}
                <Button
                  variant="forum"
                  size="forum"
                  type="button"
                  onClick={() => toggleView('login')}
                >
                  Log In
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
