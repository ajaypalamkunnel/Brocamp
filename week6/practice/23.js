const urls = [
    'https://facebook.com',
    'https://flipkart.com',
    'https://google.com'
  ];
  
  function fetchAllUrls(urls) {
    const fetchPromises = urls.map((url) => {
      return fetch(url)
        .then((response) => response.json());
    });
  
    return Promise.all(fetchPromises);
  }
  
  fetchAllUrls(urls)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log('Error:', err);
    });
  