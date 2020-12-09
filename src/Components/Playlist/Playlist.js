import React from "react";
import "./Playlist.css";
import TracksList from "../TracksList/TracksList";

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.nameChange = this.nameChange.bind(this);
  }

  nameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} onChange={this.nameChange} />
        <TracksList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <button className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}

export default Playlist;
