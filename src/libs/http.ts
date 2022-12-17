export class Http {
  static instance = new Http();
  /* private apiUrl = 'https://api.coinlore.net/api'; */

  get = async (url: string) => {
    try {
      const req = await fetch(`${url}`);
      const json = await req.json();
      return json;
    } catch (error) {
      console.log(error);
      throw Error(error as string);
    }
  };

  post = async (url: string, body: any) => {
    try {
      const req = await fetch(`${url}`, {method: 'POST', body});
      const json = await req.json();
      return json;
    } catch (error) {
      console.log(error);
      throw Error(error as string);
    }
  };
}
