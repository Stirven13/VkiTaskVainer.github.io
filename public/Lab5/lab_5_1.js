// 1.1
async function counter(n) {
    while (n >= 0) {
      console.log(n);
      n--;
      await new Promise(resolve => setTimeout(resolve, 1000)); 
    }
  }

counter(5);



// 1.2
function createCounter(n) {
    let count = n;
    let intervalId;
  
    function decrease() {
      console.log(count);
      count--;
      if (count < 0) {
        clearInterval(intervalId);
      }
    }
  
    return {
      start: function() {
        if (!intervalId) {
          console.log("Count started:");
          intervalId = setInterval(decrease, 1000);
        }
      },
      pause: function() {
        if (intervalId) {
          console.log("Count paused.");
          clearInterval(intervalId);
          intervalId = undefined;
        }
      },
      stop: function() {
        console.log("Count stopped.");
        clearInterval(intervalId);
        intervalId = undefined;
        count = n;
      }
    };
  }
  
  const counter = createCounter(5);
  counter.start();
  setTimeout(() => {
    counter.pause();
  }, 2000);
  setTimeout(() => {
    counter.start(); 
  }, 4000);
  setTimeout(() => {
    counter.stop(); 
  }, 7000);



  // 2.1
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function counter(n) {
    async function countDown(i) {
      if (i < 0) {
        return;
      }
      console.log(i);
      await delay(1000);
      countDown(i - 1);
    }
  
    await countDown(n);
  }
  
  counter(5); 
  


  // 2.2
  async function getFirstRepository(username) {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userResponse.json();
  
      const repositoriesResponse = await fetch(userData.repos_url);
      const repositoriesData = await repositoriesResponse.json();
  
      if (repositoriesData.length > 0) {
        return repositoriesData[0].name;
      } else {
        return 'Пользователь не имеет репозиториев на GitHub.';
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
      return 'Ошибка при получении данных с GitHub API.';
    }
  }
  
  const username = 'octocat';
  getFirstRepository(username)
    .then(repositoryName => console.log(`Первый репозиторий пользователя ${username} на GitHub: ${repositoryName}`))
    .catch(error => console.error(error));



// 3.1
class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
      return await response.json();
    } else {
      throw new HttpError(response);
    }
  }
  
  async function getGithubUser() {
    let user;
    while (!user) {
      let name = prompt("Введите логин?", "iliakan");
      try {
        user = await loadJson(`https://api.github.com/users/${name}`);
        alert(`Полное имя: ${user.name}.`);
      } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        } else {
          throw err;
        }
      }
    }
    return user;
  }
  
  async function demoGithubUser() {
    try {
      let user = await getGithubUser();
      console.log(user);
    } catch (err) {
      console.error(err);
    }
  }
  
  demoGithubUser();
  