import { fetchRevenue } from '@/app/lib/data';

export const GET = async () => {
  try {
    const data = await fetchRevenue();

    return Response.json({ data });
  } catch (error) {
    console.error('Database Error:', error);
    return Response.json({ error: 'Failed to fetch revenue data.' }, { status: 500 });
  }
};

export const runtime = 'edge';
