import sql from '@/app/api/utils/sql';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Simple email validation
    if (!email || !email.includes('@')) {
      return Response.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Clean email
    const cleanEmail = email.trim().toLowerCase();

    // Insert email into database
    const result = await sql`
      INSERT INTO signups (email)
      VALUES (${cleanEmail})
      RETURNING id, email, created_at
    `;

    return Response.json({
      success: true,
      message: 'Successfully joined waitlist!'
    }, { status: 200 });

  } catch (error) {
    console.error('Registration error:', error);
    
    // Handle duplicate email
    if (error.code === '23505') {
      return Response.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    return Response.json(
      { error: 'Registration failed. Please try again.' },
      { status: 500 }
    );
  }
}