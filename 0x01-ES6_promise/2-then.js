export default function handleResponseFromAPI(promise) {
  promise.then({ status: 200, body: 'Success' },
    console.log('Got a response from the API'));
  promise.catch(new Error(''));
}
