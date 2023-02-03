import { atom } from 'recoil';

export interface AuthModalState {
  isOpen: boolean;
  view: 'login' | 'signup' | 'resetUsername' | 'resetPassword' | 'getApp';
}

const defaultModalState: AuthModalState = {
  isOpen: false,
  view: 'login',
};

export const authModalState = atom<AuthModalState>({
  key: 'authModalState',
  default: defaultModalState,
});
