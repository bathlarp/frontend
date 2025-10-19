'use client';

import {
  toast,
  ToastContainer,
  ToastContent,
  TypeOptions,
} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer position={'top-center'} />
    </>
  );
}

export function setToast(type: TypeOptions, content: ToastContent<string>) {
  toast(content, { type });
}
