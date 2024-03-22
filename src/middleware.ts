import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const url = req.nextUrl;
    const referrer = req.headers.get('Referer') || null; // Try to get referrer from headers

    // You can process or store the referrer URL here
    // console.log('Current URL:', url.href);
    // console.log('Referrer URL:', referrer);

    // console.log('Request headers:', JSON.stringify(req, null, 2));

    // This example just returns the original request (no modifications)
    return NextResponse.next();
}
