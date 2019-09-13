export interface RepositoryInterface<T> {
  add(t: T): void;
  update(t: T): void;
  delete(t: T): void;
  toArray(): Array<any>;
}
