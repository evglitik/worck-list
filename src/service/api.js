import axios from 'axios';

axios.defaults.baseURL = 'https://63381b44937ea77bfdba8b40.mockapi.io/';

export const addWorckDay = async ({ date, individual, integral }) => {
  try {
    const response = await axios.post('/worcks', {
      date,
      individual,
      integral,
    });
      console.log(response.data)
    return response.data;
  } catch (e) {
    return console.log(e.message);
  }
};

export const getWorcks = async () => {
  const response = await axios.get('/worcks');
  return response.data;
};
