async function fetchData() {
  const url = 'https://my-worker.ukdevelopers007.workers.dev/desikahaniya/getPicsWithCategory';

  const data = '{"category":"bollywood","page":"1"}';

  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: data,
      });

      // Handle the response here
      const result = await response.json();
      console.log(result);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

// Call the async function
fetchData();
