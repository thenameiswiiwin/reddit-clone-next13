import { ModalWrapper } from '../ModalWrapper';
import { Login } from './Login';
/* import { Signup } from './Signup'; */

export const AuthModal = () => {
  return (
    <ModalWrapper>
      <Login />
      {/* <Signup /> */}
    </ModalWrapper>
  );
};
