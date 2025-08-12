import { NextResponse } from 'next/server';
import { verify } from '@tsndr/cloudflare-worker-jwt';

export async function GET(request) {
    try {
        // 1. Get token from cookies
        const token = request.cookies.get('authToken')?.value;
        
        if (!token) {
            console.log('No auth token found in cookies');
            return NextResponse.json(
                { isAuthenticated: false, message: "No token found" },
                { status: 401 }
            );
        }

        // 2. Verify using environment variable
        const JWT_SECRET = "your-secret-key-here-must-be-at-least-32-chars";
        const isValid = await verify(token, JWT_SECRET);
        
        if (!isValid) {
            console.log('Invalid token format or signature');
            return NextResponse.json(
                { isAuthenticated: false, message: "Invalid token" },
                { status: 401 }
            );
        }

        // 3. Successful verification
        return NextResponse.json({
            isAuthenticated: true,
            message: "Authenticated successfully"
        });

    } catch (error) {
        console.error('JWT Verification Error:', error.message);
        return NextResponse.json(
            { 
                isAuthenticated: false, 
                message: "Authentication failed",
                error: process.env.NODE_ENV === 'development' ? error.message : null
            },
            { status: 401 }
        );
    }
}