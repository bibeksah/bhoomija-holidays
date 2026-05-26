import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  // Verify authorization using the existing Supabase Service Key
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.SUPABASE_SERVICE_KEY}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    // Perform a simple query to keep Supabase awake
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('count')
      .limit(1)
      .maybeSingle();

    if (error) {
      console.error('Supabase keep-alive ping failed:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    console.log('Supabase keep-alive ping successful');
    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      message: 'Supabase is awake',
    });
  } catch (err) {
    console.error('Unexpected error during Supabase keep-alive:', err);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
