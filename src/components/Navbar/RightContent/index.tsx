import { AuthModal } from '@components/Modal/Auth';

import { AuthButtons } from './AuthButtons';

export const RightContent = () => {
  return (
    <>
      <AuthModal />
      <div className="flex items-center">
        <AuthButtons />
      </div>
    </>
  );
};
