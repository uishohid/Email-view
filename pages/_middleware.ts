import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
    // return NextResponse.redirect('/hello-nextjs')
    return NextResponse.next();
}