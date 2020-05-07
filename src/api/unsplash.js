import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
  Authorization: 'Client-ID GQmbYdBecMzjs4eYyyeAgNi6umEgXJ1aPRWEWhHrs5g'
}
});
