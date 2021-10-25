const videos = [...document.querySelectorAll('li')];

// videos.map((video) => {
//   console.log(video, 'video');
// });

const totalTime = videos.reduce((total, current) => {
  const time = current.dataset.time;
  const [min, sec] = time.split(':').map(parseFloat);
  const sum = min * 60 + sec;
  return (total += sum);
}, 0);

const toHHss = (time) => {
  const sec_num = parseInt(time, 10);
  const hours = Math.floor(sec_num / 3600);
  const minutes = Math.floor(sec_num / 60) % 60;
  const seconds = sec_num % 60;
  return hours + ':' + minutes + ':' + seconds;
};

console.log(toHHss(totalTime));
