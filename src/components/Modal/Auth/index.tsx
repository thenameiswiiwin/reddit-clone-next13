import { authModalState } from '@atoms/authModalAtom';
import { useRecoilState } from 'recoil';
import { ModalWrapper } from '../ModalWrapper';
import { Login } from './Login';
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
      {modalState.view === 'login' ? (
        <Login toggleView={toggleView} />
      ) : (
        <Signup toggleView={toggleView} />
      )}
    </ModalWrapper>
  );
};
