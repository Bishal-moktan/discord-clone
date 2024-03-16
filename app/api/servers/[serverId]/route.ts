import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export const PATCH = async (
  req: Request,
  {
    params,
  }: {
    params: {
      serverId: string;
    };
  }
) => {
  try {
    const current = await currentProfile();
    if (!current) {
      return new NextResponse('Unauthorzied', { status: 401 });
    }

    if (!params.serverId) {
      return new NextResponse('Server ID missing', { status: 400 });
    }

    const { name, imageUrl } = await req.json();

    const server = await db.server.update({
      where: {
        id: params.serverId,
        profileId: current.id,
      },
      data: {
        name,
        imageUrl,
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log('PATCH_SERVER_ID', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};
