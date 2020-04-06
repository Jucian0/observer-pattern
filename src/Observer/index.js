class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers = [...this.observers, fn];
    return () => {
      this.unsubscribe(fn);
    };
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(observer => observer !== fn);
  }

  notify(data) {
    this.observers.forEach(observer => {
      observer(data);
    });
  }
}

export default new Observable();
