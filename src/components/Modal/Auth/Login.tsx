import { Button } from '@components/Button';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { OAuthButtons } from './OAuthButtons';

const FormInputs = [
  { name: 'email', autoComplete: 'email', placeholder: 'Username' },
  {
    name: 'password',
    autoComplete: 'current-password',
    placeholder: 'Password',
  },
];

export const Login = () => {
  return (
    <>
      <div className="relative flex min-h-full flex-col justify-center py-6 sm:px-6 lg:px-8">
        <button type="button" className="absolute top-0 right-0">
          <XMarkIcon className="h-5 w-5 text-gray-500" />
        </button>

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-xl font-medium">Log In</h2>
          <p className="mt-2 text-xs text-gray-600">
            By continuing, you agree are setting up a Reddit account and agree
            to our{' '}
            <a
              href="#"
              className="font-medium text-blue-500 hover:text-blue-400"
            >
              User Agreement
            </a>{' '}
            and{' '}
            <a
              href="#"
              className="font-medium text-blue-500 hover:text-blue-400"
            >
              privacy Policy Agreement
            </a>
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

          <form className="space-y-6" action="#" method="POST">
            {FormInputs.map((FormInput) => (
              <div className="mt-5">
                <input
                  id={FormInput.name}
                  name={FormInput.name}
                  type={FormInput.name}
                  placeholder={FormInput.placeholder}
                  autoComplete={FormInput.autoComplete}
                  required
                  className="block w-full appearance-none rounded-full border border-gray-300/0 bg-gray-100 px-4 py-3 shadow-sm placeholder:font-semibold placeholder:text-gray-500 hover:border-gray-300/100 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
            ))}

            <div className="flex items-center justify-between">
              <div className="text-xs">
                Forget your{' '}
                <a
                  href="#"
                  className="font-bold text-blue-500 underline hover:text-blue-400"
                >
                  username
                </a>{' '}
                or{' '}
                <a
                  href="#"
                  className="font-bold text-blue-500 underline hover:text-blue-400"
                >
                  password
                </a>{' '}
                ?
              </div>
            </div>

            <Button type="submit" variant="tertiary" size="tertiary">
              Log In
            </Button>

            <div className="flex items-center justify-between">
              <div className="text-xs">
                New to Reddit?{' '}
                <a
                  href="#"
                  className="font-bold text-blue-500 underline hover:text-blue-400"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
