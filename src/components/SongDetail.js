import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <h2>Select a Song!!</h2>
  };

  return (
    <div>
      <h3>Details for:</h3>
      <h4>
        Title: { song.title }
        <br/>
        Duration: { song.duration }
      </h4>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);