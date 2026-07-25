export async function GET(request: Request) {
  return Response.json({
    message: 'Contact API endpoint',
    method: 'POST to send contact message',
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Here you would typically save to database or send email
    console.log('Contact form submission:', body);
    
    return Response.json(
      {
        success: true,
        message: 'Message received successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: 'Failed to process contact form',
      },
      { status: 500 }
    );
  }
}
