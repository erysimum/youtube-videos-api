import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  state = { videos: [], onSelectedVideo: null };

  onTermSubmit = async (term) => {
    //console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    // console.log(response.data.items);
    this.setState({ videos: response.data.items });
  };

  onSelectedVideo = (video) => {
    this.setState({ onSelectedVideo: video });
    console.log("From App", video.snippet.title);
  };
  render() {
    return (
      <div className='ui container'>
        <SearchBar frmChildToParent={this.onTermSubmit} />
        {/*   You got {this.state.videos.length} videos. */}
        <div className='ui grid'>
          <div className='eleven wide column'>
            <VideoDetails video={this.state.onSelectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList
              onSelectedVideo={this.onSelectedVideo}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
