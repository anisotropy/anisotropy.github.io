const api  = {
  fetchPosts(){
    return fetch('./data/test-.md').then((response) => (response.ok ? response.text() : null));
  }
};

export default api;
