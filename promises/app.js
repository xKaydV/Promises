const emailRef = document.querySelector(".email");
console.log(emailRef);

//1. Then
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    response.json().then((data) => {
      console.log(data);
      emailRef.innerHTML = data.email;
    });
  });

// Simplier

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    emailRef.innerHTML = data.email
  });

  // 2. Async/Await
  async function main () {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await response.json()
    console.log(data)
    emailRef.innerHTML = data.email
  }

  main();

  const statusRef = document.querySelector('.status')

  function getSubcriptionStatus() {
    return new Promise((resolve, reject) => {
      resolve("VIP")
    })
  }

// 1. Then
  getSubcriptionStatus().then(response => console.log(response))

// 2. Async/Await
  async function main () {
    const status = (await getSubcriptionStatus())
    statusRef.innerHTML = status
  }

main();

const statusRef = document.querySelector (".status");

function getSubcriptionStatus() {
  return new Promise(resolve, reject) => {
    setTimeout() => {
      resolve("VIP");
    }, 2000);
  }
}

/** 
 * 1. Create a function called `getVideo`
 * 2. Accept a parameter called  `subscriptionStatus`
 * 3. Return a new Promise inside of the function that:
 *       - if "VIP" resolve("show video")
 *       - if "FREE" resolve("show trailer")
 *       - otherwise reject ("no video")
 * 4. console.log the result of getVideo() in main()
*/





async function main () {
  const status = (await getSubcriptionStatus())
  statusRef.innerHTML = status;
  try{
    console.log(await getVideo(status))
  }
  catch (e) {
    console.log(e)
    videoRef.innerHTML = e;
  }
  console.log(getVideo(status))
}

main();