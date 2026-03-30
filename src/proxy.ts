import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const protectedPaths = ["/admin/dashboard", "/admin/customers"]

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isProtected = protectedPaths.some((path) =>
    pathname.startsWith(path)
  )

  if (isProtected) {
    const sessionCookie = request.cookies.get("better-auth.session_token")
    if (!sessionCookie) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/((?!login|_next|api).*)"],
}
