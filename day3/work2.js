async function fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
  
      // Loop through and log each user's name
      data.map((a) => console.log(a.name));
  
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchUsers();
  
  