import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: '菊花台', duration: '5:05' },
    { title: '七里香', duration: '3:15' },
    { title: '千里之外', duration: '1:50' },
    { title: '夜曲', duration: '4:30' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  song: songsReducer,
  selectedSong: selectedSongReducer,
});