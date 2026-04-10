import { NextRequest, NextResponse } from "next/server"

const ACCESS_QUERY_PARAM = "secret"
const ACCESS_COOKIE = "sa_preview_access"
const ACCESS_SECRET = process.env.SA_PREVIEW_SECRET ?? "fasdfn345t34nlajh4344"

function isPublicAsset(pathname: string) {
  return (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/logo-academy.png") ||
    /\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|txt|xml)$/.test(pathname)
  )
}

function comingSoonHtml() {
  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="robots" content="noindex,nofollow" />
    <title>Scalextric Academy</title>
    <style>
      html,body{margin:0;padding:0;background:#0b0b0c;color:#fff;font-family:Inter,Arial,sans-serif}
      .wrap{min-height:100vh;display:grid;place-items:center}
      .card{text-align:center;padding:24px}
      img{width:min(420px,75vw);height:auto;display:block;margin:0 auto 18px;filter:brightness(0) invert(1)}
      p{font-size:28px;letter-spacing:.02em;margin:0}
    </style>
  </head>
  <body>
    <main class="wrap">
      <section class="card">
        <img src="/logo-academy.png" alt="Scalextric Academy" />
        <p>Próximamente...</p>
      </section>
    </main>
  </body>
</html>`
}

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  if (isPublicAsset(pathname)) {
    return NextResponse.next()
  }

  const hasCookie = request.cookies.get(ACCESS_COOKIE)?.value === "1"
  const incomingSecret = searchParams.get(ACCESS_QUERY_PARAM)
  const hasValidSecret = incomingSecret === ACCESS_SECRET

  if (hasCookie || hasValidSecret) {
    if (hasValidSecret) {
      const cleanUrl = request.nextUrl.clone()
      cleanUrl.searchParams.delete(ACCESS_QUERY_PARAM)
      const response = NextResponse.redirect(cleanUrl)
      response.cookies.set(ACCESS_COOKIE, "1", {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      })
      return response
    }

    return NextResponse.next()
  }

  return new NextResponse(comingSoonHtml(), {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
  })
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
}
