export const chatGPTRequest = async (input) => {
  console.log('gpt request');
  try {
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: input,
          },
        ],
      }),
    };
    console.log('request', req);
    const response = await fetch(
      'https://api.openai.com/v1/chat/completions',
      req
    );
    console.log('RESPONSE: ', response);
    console.log('RESPONSE DATA: ', response.data);

    const result = await response.json();
    return result.choices[0].message.content;
  } catch (error) {
    console.log('error in gpt request ', error);
    return "Something went wrong...this shouldn't happen";
  }
};
