import axios from "axios";

const getData = function (number) {

  return new Promise(async (resolve, reject) => {

    const { data: user1 } = await axios(

      `https://jsonplaceholder.typicode.com/users/${number}`
    );
    const { data: user2 } = await axios(

      `https://jsonplaceholder.typicode.com/posts?userId=${number}`
    );
    const lastData = [user1, user2[1]];

    console.log(lastData);
  });
};

export default getData;