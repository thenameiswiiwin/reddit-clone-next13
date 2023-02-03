import { Button } from '@components/Button';
import Link from 'next/link';

import { FormInput } from './FormInput';
import { OAuthButtons } from './OAuthButtons';

interface SignupProps {
  toggleView: (view: string) => void;
}

export const Signup = ({ toggleView }: SignupProps) => {
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

          <form className="space-y-6" action="#" method="POST">
            <FormInput name="email" autoComplete="email" placeholder="Email" />

            <Button type="submit" variant="tertiary" size="tertiary">
              Log In
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
