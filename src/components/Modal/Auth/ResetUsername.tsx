import { Button } from '@components/Button';

import { FormInput } from './FormInput';

interface ResetUsernameProps {
  toggleView: (view: string) => void;
}

export const ResetUsername = ({ toggleView }: ResetUsernameProps) => {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-6 sm:px-6 lg:px-8">
        <div className="space-y-2 sm:mx-auto sm:w-full sm:max-w-md">
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
                Don&#39;t have an email or need assistance logging in?{' '}
                <Button
                  href="https://reddithelp.com/hc/en-us/sections/360008917491-Account-Security"
                  variant="forum"
                  size="forum"
                >
                  Get Help
                </Button>
              </div>
            </div>

            <div className="flex gap-1 text-xs">
              <Button
                variant="forum"
                size="forum"
                type="button"
                onClick={() => toggleView('signup')}
              >
                Sign Up
              </Button>
              <span className="font-bold text-blue-500">&#8226;</span>
              <Button
                variant="forum"
                size="forum"
                type="button"
                onClick={() => toggleView('login')}
              >
                Log In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
