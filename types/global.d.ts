export {};
declare global {
  interface Fn<T = any, R = T> {
    (...arg: T[]): R;
  }

  type Nullable<T> = T | null;
  type Indexable<T = any> = {
    [key: string]: T;
  };
}
