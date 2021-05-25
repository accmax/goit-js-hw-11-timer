const refs = {
  daysEl: document.querySelector('.value[data-value = "days"]'),
  hoursEl: document.querySelector('.value[data-value="hours"]'),
  minsEl: document.querySelector('.value[data-value="mins"]'),
  secondsEl: document.querySelector('.value[data-value="secs"]'),
}


class CountdownTimer {
  timeComponents = { days: 0, hours: 0, mins: 0, secs: 0 };

  constructor({targetDate}) {
    this.targetDate = targetDate;
  }

  start() {
     setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      this.getTimeComponents(deltaTime);
      this.updCounter()
    }, 1000);
  }

  pad(value) {
  return String(value).padStart(2, '0');
  }

  getTimeComponents(time) {
  this.timeComponents.days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  this.timeComponents.hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  this.timeComponents.mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  this.timeComponents.secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  }
  
  updCounter() {
  refs.daysEl.textContent = this.timeComponents.days;
  refs.hoursEl.textContent = this.timeComponents.hours;
  refs.minsEl.textContent = this.timeComponents.mins;
  refs.secondsEl.textContent = this.timeComponents.secs;
 } 
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

timer.start()
