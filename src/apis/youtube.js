import axios from "axios";

const KEY = "AIzaSyAh3wnTmKbDliFZa5YnmCSWdTz9mx7mwaY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
