// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
    // Add logging for debugging
    console.log('API Request:', request.url);

    return NextResponse.next();
}

export const config = {
    matcher: '/api/:path*',
};