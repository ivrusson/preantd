export async function fakeRequest(params) {
  return new Promise(resolve => {
    setTimeout(() => { resolve(true); }, 3000);
  });
}
