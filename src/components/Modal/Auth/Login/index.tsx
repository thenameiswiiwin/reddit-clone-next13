import { OAuthButtons } from '../OAuthButtons';
import { LoginForm } from './LoginForm';

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

          <LoginForm toggleView={toggleView} />
        </div>
      </div>
    </>
  );
};
