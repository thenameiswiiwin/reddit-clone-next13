import { Button } from '@components/Button';

import { FormInput } from './FormInput';
import { OAuthButtons } from './OAuthButtons';

interface LoginProps {
  toggleView: (view: string) => void;
}

export const Login = ({ toggleView }: LoginProps) => {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-6 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-xl font-medium">Log In</h2>
          <p className="mt-2 text-xs text-gray-600">
            By continuing, you agree are setting up a Reddit account and agree
            to our{' '}
            <Button
              href="https://www.redditinc.com/policies/user-agreement"
              variant="forum"
              size="forum"
            >
              User Agreement
            </Button>{' '}
            and{' '}
            <Button
              href="https://www.reddit.com/policies/privacy-policy"
              variant="forum"
              size="forum"
            >
              Privacy Policy
            </Button>
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
            <FormInput
              name="email"
              autoComplete="email"
              placeholder="Username"
            />
            <FormInput
              name="password"
              autoComplete="current-password"
              placeholder="Password"
            />

            <div className="flex items-center justify-between">
              <div className="text-xs">
                Forget your{' '}
                <Button
                  variant="forum"
                  size="forum"
                  type="button"
                  onClick={() => toggleView('resetUsername')}
                >
                  username
                </Button>{' '}
                or{' '}
                <Button
                  variant="forum"
                  size="forum"
                  type="button"
                  onClick={() => toggleView('resetPassword')}
                >
                  password
                </Button>
                ?
              </div>
            </div>

            <Button type="submit" variant="tertiary" size="tertiary">
              Log In
            </Button>

            <div className="flex items-center justify-between">
              <div className="text-xs">
                New to Reddit?{' '}
                <Button
                  variant="forum"
                  size="forum"
                  type="button"
                  onClick={() => toggleView('signup')}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
