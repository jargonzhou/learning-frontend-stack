
process.on('message', data => {
  console.info('Parent process sent a mesage', data)
});

process.send({ 'type': 'ack', 'data': [3] })
