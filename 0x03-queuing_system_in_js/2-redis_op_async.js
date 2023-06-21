import { createClient, print } from 'redis';
import { promisify } from 'util';

const client = createClient();

client.get = promisify(client.get);

client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err}`);
});

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, print);
}

function displaySchoolValue(schoolName) {
  client.get(schoolName).then(console.log).catch(console.log);
}

client.on('ready', () => {
  console.log('Redis client connected to the server');
});

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
