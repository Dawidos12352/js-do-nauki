  // 200 OK
  
  fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
      })
        .then((response) => {
          console.log(`request status code is: ${response.status}`);
          console.log('is response ok', response.ok);
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log('err', err);
        });
        

// FETCH ERROR WRONG DOMAIN

    //     fetch('https://jsXDDDDDDDDonplaceholder.typicode.com/users', {
    //     method: 'GET',
    //   })
    //     .then((response) => {
    //       console.log(`request status code is: ${response.status}`);
    //       console.log('is response ok', response.ok);
    //       return response.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((err) => {
    //       console.log('err', err);
    //     });


    //404 ERROR
    
    // fetch('https://jsonplaceholder.typicode.com/usersls', {
    //     method: 'GET',
    //   })
    //     .then((response) => {
    //       console.log(`request status code is: ${response.status}`);
    //       console.log('is response ok', response.ok);
    //       return response.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((err) => {
    //       console.log('err', err);
    //     });