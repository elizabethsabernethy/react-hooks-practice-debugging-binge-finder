class Adapter {
  static getShows(){
    return fetch("http://api.tvmaze.com/shows")
    .then(res => res.json())
  }

  static getShowEpisodes(showID){
    return fetch(`http://api.tvmaze.com/shows/${showID}/episodes`, {
      headers: {
        'Access-Control-Allow-Origin': `http://api.tvmaze.com/shows/${showID}/episodes`
      }
    })
    .then(res => res.json)
  }
}

export default Adapter
