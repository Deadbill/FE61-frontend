  const getWantedPeople = async () => {
    const response = await fetch('https://api.fbi.gov/wanted/v1/list');
    const data = await response.json();
    return data.items.map((item) => {
      return {
        src: item.images[0].original,
        fullName: item.title,
        race: item.race,
        nationality: item.nationality,
        rewardText: item.reward_text,
        descriptions: item.description,
        birthPlace: item.place_of_birth,
        details: item.details,
      };
    });
  };

  export default getWantedPeople;