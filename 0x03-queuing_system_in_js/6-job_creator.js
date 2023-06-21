import { createQueue } from 'kue';

const data = {
  phoneNumber: '(248) 434-5508',
  message: 'Rick Astley',
};

const queue = createQueue();

const job = queue.create('push_notification_code', data);

job.save((error) => {
  if (!error) {
    console.log(`Notification job created: ${job.id}`);
  }
});

job.on('complete', () => {
  console.log('Notification job completed');
});

job.on('failed', () => {
  console.log('Notification job failed');
});
