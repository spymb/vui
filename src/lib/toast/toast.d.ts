export type ToastType = 'normal' | 'secondary' | 'success' | 'warning' | 'error';
export interface ToastProps  {
  text?: string;
  type?: ToastType;
  delay?: number;
  showClose?: boolean;
  top?: number;
  id?: string;
}