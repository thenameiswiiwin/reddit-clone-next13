import { Button } from '@components/Button';

export const AuthButtons = () => {
  return (
    <div className="ml-auto flex h-full items-center gap-2 md:gap-4">
      <Button
        variant="secondary"
        size="md"
        type="button"
        className="hidden sm:inline-flex"
      >
        Sign Up
      </Button>
      <Button
        variant="primary"
        size="md"
        type="button"
        className="hidden sm:inline-flex"
      >
        Log In
      </Button>
    </div>
  );
};
