import EventEmitter from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.setMaxListeners(0); //unlimit listener: nguoi nghe khong gioi han

export { eventEmitter };