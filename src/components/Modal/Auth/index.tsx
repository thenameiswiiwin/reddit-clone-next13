import { authModalState } from '@atoms/authModalAtom';
import { useRecoilState } from 'recoil';
import { ModalWrapper } from '../ModalWrapper';
import { Login } from './Login';
import { ResetPassword } from './ResetPassword';
import { ResetUsername } from './ResetUsername';
import { Signup } from './Signup';

export const AuthModal = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);

  const handleModalClose = () =>
    setModalState((prev) => ({ ...prev, isOpen: false }));

  const toggleView = (view: string) => {
    setModalState({ ...modalState, view: view as typeof modalState.view });
  };

  return (
    <ModalWrapper modalState={modalState} handleModalClose={handleModalClose}>
      {modalState.view === 'login' && <Login toggleView={toggleView} />}
      {modalState.view === 'signup' && <Signup toggleView={toggleView} />}
      {modalState.view === 'resetUsername' && (
        <ResetUsername toggleView={toggleView} />
      )}
      {modalState.view === 'resetPassword' && (
        <ResetPassword toggleView={toggleView} />
      )}
    </ModalWrapper>
  );
};
