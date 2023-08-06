class Chronometer {
  constructor() { 
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
  this.intervalId = setInterval(() => {
  this.currentTime++;
  if (typeof printTimeCallback === 'function') {
  printTimeCallback(this.currentTime);
}
},1000);
}

  getMinutes() {
  const currentMinutes = Math.floor(this.currentTime/60);
  return currentMinutes;
  }

  getSeconds() {
  const currentSeconds = this.currentTime%60;
  return currentSeconds;
  }

  computeTwoDigitNumber(value) {
    const stringValue = value.toString();
    return stringValue.padStart(2, '0');
  }
  stop() {
  clearInterval(this.intervalId)
  }

  reset() {
  return this.currentTime=0;
  }

  split() {
  const minutes = this.computeTwoDigitNumber(this.getMinutes());
  const seconds = this.computeTwoDigitNumber(this.getSeconds());
return `${minutes}:${seconds}`;
  }
}
