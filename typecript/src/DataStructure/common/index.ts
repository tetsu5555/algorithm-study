abstract class Collection<T> {
  protected storage: T[] = [];

  size() {
    return this.storage.length;
  }

  abstract isFull(): boolean;
}

export {
  Collection
};
