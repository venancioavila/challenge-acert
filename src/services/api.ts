const api = async (method: string, search: string) => {
  const res = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=${method}.search&artist=${search}&api_key=71a2102883fca54f9e0909aa328a330d&format=json`
  );
  return await res.json();
};

export default api;
