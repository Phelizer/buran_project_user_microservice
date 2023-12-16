var collection = db.users;

const NAMES = [
  'James',
  'John',
  'Robert',
  'Michael',
  'William',
  'David',
  'Richard',
  'Joseph',
  'Charles',
  'Thomas',
  'Christopher',
  'Daniel',
  'Matthew',
  'Anthony',
  'Donald',
  'Mark',
  'Paul',
  'Steven',
  'Andrew',
  'Brian',
];

const SURNAMES = [
  'Smith',
  'Johnson',
  'Williams',
  'Brown',
  'Jones',
  'Miller',
  'Davis',
  'García',
  'Rodriguez',
  'Martinez',
  'Hernandez',
  'Lopez',
  'Gonzalez',
  'Wilson',
  'Anderson',
  'Thomas',
  'Taylor',
  'Moore',
  'Jackson',
  'White',
];

function gaussianRandom(mean = 0, stdev = 1) {
  const u = 1 - Math.random();
  const v = Math.random();
  const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return z * stdev + mean;
}

const generateAge = () => gaussianRandom(25);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomElem(arr) {
  const index = getRandomArbitrary(0, arr.length - 1);
  return arr[index];
}

const getRandomName = () => getRandomElem(NAMES);
const getRandomSurname = () => getRandomElem(SURNAMES);

const EMAIL_HOSTS = [
  'gmail.com',
  'yahoo.com',
  'outlook.com',
  'hotmail.com',
  'example.com',
];

const getRandomEmailHost = () => getRandomElem(EMAIL_HOSTS);

function generateEmail() {
  return `${getRandomName}.${getRandomSurname}${getRandomArbitrary(
    100,
    999,
  )}@${getRandomEmailHost}`;
}

const mockUser = () => ({
  id: getRandomArbitrary(10000000000, 99999999999).toString(),
  first_name: getRandomName(),
  last_name: getRandomSurname(),
  email: generateEmail(),
  registration_date: new Date(),
  age: generateAge(),
  sex: Math.random() > 0.2 ? 'male' : 'female',
  roles: ['user'],
});

const users = [];
for (let i = 0; i < 100; i++) {
  users.push(mockUser());
}

collection.insertMany(users);
