// 建立一個 Action
export const selectSong = (song) => {
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
