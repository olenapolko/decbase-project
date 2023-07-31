const servicesUrl = `https://jsonplaceholder.typicode.com/comments?_limit=20`;

async function getServices(){
  const request = await fetch(servicesUrl);
  const result = request.json();
  return result;
}

export {getServices};
