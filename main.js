if (window.Worker) {
  const config =  {
    type: 'line',
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderColor: 'pink'
        }
      ]
    },
    options: {
    }
  }
  const canvas = document.getElementById('ff');
  const offscreenCanvas = canvas.transferControlToOffscreen();
  const myWorker = new Worker("worker.js");

  myWorker.postMessage({canvas: offscreenCanvas, config}, [offscreenCanvas]);
} else {
  console.log('Your browser doesn\'t support web workers.');
}
