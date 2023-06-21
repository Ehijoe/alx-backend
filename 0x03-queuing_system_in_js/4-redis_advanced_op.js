import { createClient, print } from 'redis';

const client = createClient();

client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err}`);
});

client.on('ready', () => {
  console.log('Redis client connected to the server');
});

const hash = {
  Portland: '50',
  Seattle: '80',
  'New York': '20',
  Bogota: '20',
  Cali: '40',
  Paris: '2'
}

for (const [key, val] of Object.entries(hash)) {
  client.hset('HolbertonSchools', key, val, print);
}

client.hgetall('HolbertonSchools', (err, val) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(val);
  }
});
