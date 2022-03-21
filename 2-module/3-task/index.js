let calculator = {
  read(m, n) {
    this.m = m;
    this.n = n;
  },
  sum() {
    return this.m + this.n;
  },
  mul() {
    return this.m * this.n;
  }
};


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
