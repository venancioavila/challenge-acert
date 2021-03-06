export const api = async (method: string, search: string) => {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=${method}.search&artist=${search}&api_key=2f56f55df943c0e9b920041c41530de2&format=json`
  );
  return await res.json();
};

export const getAlbums = async (album: string) => {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${album}&api_key=2f56f55df943c0e9b920041c41530de2&format=json`
  );
  return await res.json();
};
