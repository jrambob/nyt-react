import axios from "axios";

const api = {

  searchNYT: function(topic, startYear, endYear) {
    const authKey = "BzQRDnWAHXGcgYCgJV9MM19fYurjO8y8";
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
    return axios.get(queryURL);
  },
  getArticle: function() {
    return axios.get("/api/saved");
  },
  saveArticle: function(articleObj) {
    return axios.post("/api/saved", articleObj);
  },
  deleteArticle: function(id) {
    return axios.delete(`/api/saved/${id}`);
  }
};

export default api;
