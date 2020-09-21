//  Clock funciotns //
export function setTime(left: number, hand: string): void {
  const targetClockwise = document.querySelector(
    `.clock__${hand}`
  )! as HTMLDivElement;
  targetClockwise.style.animationDelay = `${left * -1}s`;
}

export function getSecondsToday(): number {
  const now: any = new Date();
  const today: any = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff: number = now - today;

  return Math.round(diff / 1000);
}

//  Timer functions //

function startInterval(elem: any): void {
  let minutes = Math.floor(elem.number / 60);
  let seconds = elem.number % 60 === 0 ? '00' : elem.number % 60;
  elem.div.innerHTML = `${minutes}:${seconds}`;
  elem.number = elem.number - 1;
}

export function startClock(elem: any): void {
  if (!elem.start) {
    elem.start = !elem.start;
    elem.interval = setInterval(() => startInterval(elem), 1000);
    elem.btn.innerText = `Stop`;
  } else {
    elem.start = !elem.start;
    clearInterval(elem.interval);
    elem.btn.innerText = `Start`;
  }
}
