import { authModalState } from '@atoms/authModalAtom';
import { Button } from '@components/Button';
import { QrCodeIcon } from '@heroicons/react/24/outline';
import { useSetRecoilState } from 'recoil';

export const AuthButtons = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleModalOpen = () =>
    setAuthModalState({ isOpen: true, view: 'login' });

  return (
    <div className="ml-auto flex h-full items-center gap-2 md:gap-4">
      <Button
        variant="secondary"
        size="md"
        type="button"
        className="hidden sm:inline-flex sm:items-center sm:gap-1"
      >
        <QrCodeIcon className="h-6 w-6" aria-hidden="true" />
        Get App
      </Button>
      <Button
        variant="primary"
        size="md"
        type="button"
        onClick={handleModalOpen}
        className="hidden sm:inline-flex"
      >
        Log In
      </Button>
    </div>
  );
};
