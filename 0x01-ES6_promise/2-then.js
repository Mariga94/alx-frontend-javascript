export default function handleResponseFromAPI(promise) {
  promise.then({ status: 200, body: 'Success' });
  promise.catch(new Error(''));
  promise.then(console.log('Got a response from the API'));
}
