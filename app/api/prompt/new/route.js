import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';
import { chatGPTRequest } from '@utils/chatapi';
import { SummaryRequest } from '@utils/summary';

export const POST = async (req, res) => {
  const { userId, prompt, tag, type } = await req.json();

  try {
    // connects to DB because of lambda function
    // lambda function die after each call
    await connectToDB();
    let apiresponse;
    if (type.toLowerCase() === 'prompt') {
      apiresponse = await chatGPTRequest(prompt);
    } else {
      apiresponse = await SummaryRequest(prompt);
    }
    console.log('chatgpt resp: ', apiresponse);
    if (!apiresponse || apiresponse === 'error') {
      throw new Error('gpt api error');
    }
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
      gptresponse: apiresponse,
      type: type,
    });

    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error.message), {
      status: 500,
    });
  }
};
