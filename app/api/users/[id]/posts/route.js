import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';
import { getServerSession } from 'next-auth';
import User from '@models/user';

export const dynamic = 'force-dynamic';
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const session = await getServerSession({ req: request });

    console.log(JSON.stringify(session));
    if (session) {
      const user = await User.findOne({ email: session.user.email });
      console.log('found user: ', user);
      if (user._id.toString() === params.id) {
        const prompts = await Prompt.find({ creator: params.id }).populate(
          'creator'
        );

        return new Response(JSON.stringify(prompts), {
          status: 200,
        });
      }
    }
    return new Response('Unauthorized', { status: 403 });
  } catch (error) {
    return new Response('Failed to fetch prompts', { status: 500 });
  }
};
