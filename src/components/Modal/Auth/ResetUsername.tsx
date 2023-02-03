import { Button } from '@components/Button';
import Link from 'next/link';
import { FormInput } from './FormInput';

interface ResetUsernameProps {
  toggleView: (view: string) => void;
}

export const ResetUsername = ({ toggleView }: ResetUsernameProps) => {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-6 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md space-y-2">
          <h2 className="mt-6 text-xl font-medium">Recover your username</h2>
          <p className="text-xs text-gray-600">
            Tell us the email address associated with your Reddit account, and
            we’ll send you an email with your username.
          </p>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" action="#" method="POST">
            <FormInput name="email" autoComplete="email" placeholder="Email" />

            <Button type="submit" variant="tertiary" size="tertiary">
              Email Me
            </Button>

            <div className="flex items-center justify-between">
              <div className="text-xs">
                Don't have an email or need assistance logging in?{' '}
                <Link
                  href="https://reddithelp.com/hc/en-us/sections/360008917491-Account-Security"
                  className="font-bold text-blue-500 underline hover:text-blue-400"
                >
                  Get Help
                </Link>
              </div>
            </div>

            <div className="text-xs flex gap-1">
              <button
                type="button"
                onClick={() => toggleView('signup')}
                className="font-bold text-blue-500 underline hover:text-blue-400"
              >
                Sign Up
              </button>
              <span className="text-blue-500 font-bold">•</span>
              <button
                type="button"
                onClick={() => toggleView('login')}
                className="font-bold text-blue-500 underline hover:text-blue-400"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
