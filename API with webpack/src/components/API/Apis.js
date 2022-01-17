/* eslint-disable arrow-body-style */
// import axios from 'axios';

const getCatsImages = async () => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=beng', {
    method: 'GET',
    headers: {
      'x-api-key': '08b51de7-37f3-4863-b157-34e348301bda',
    },
  });

  const data = await response.json();
  console.log(data);

  return data.items.map((item) => {
    return {
      src: item.image[0].url,
      // fullName: item.title,
      // sex: item.sex,
      // subjects: item.subjects[0],
    };
  });
};

export default getCatsImages;
