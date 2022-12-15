import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});

myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});

myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);
