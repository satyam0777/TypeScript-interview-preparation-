// Generic function
function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(10);
let str = identity<string>("hello");

// Generic interface
interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 123 };

// Generic class
class DataStore<T> {
  private data: T[] = [];
  add(item: T): void {
    this.data.push(item);
  }
  getAll(): T[] {
    return this.data;
  }
}