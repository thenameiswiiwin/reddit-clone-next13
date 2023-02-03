import { Button } from '@components/Button';

const FormInputs = [
  { name: 'email', autoComplete: 'email', placeholder: 'Username' },
  {
    name: 'password',
    autoComplete: 'current-password',
    placeholder: 'Password',
  },
];

export const LoginForm = () => {
  return (
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
          </a>
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
  );
};
