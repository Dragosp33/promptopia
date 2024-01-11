export const SummaryRequest = async (input) => {
  console.log('gpt request');
  //try {
  const api_url =
    'https://article-extractor-and-summarizer.p.rapidapi.com/summarize';
  const queryParams = new URLSearchParams({
    url: input,
  });

  const req = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com',
    },
    /*
      params: {
        url: 'input'
      }*/
  };
  console.log('request', req);
  const response = await fetch(`${api_url}?${queryParams}`, req);
  console.log('RESPONSE: ', response);

  const result = await response.json();
  if (result.error) {
    throw new Error(`summary request failed: ${result.error}`);
  }
  console.log('response.json: ', result);
  return result.summary;
  /* } catch (error) {
    console.log('error in gpt request ', error);
    return 'error';
  }*/
};
