import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const USER_AGENTS = [
  'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
  'WhatsApp/2.19.221 A',
  'Twitterbot/1.0',
];

function formatFullNumber(val, defaultVal = '16,000+') {
  if (!val) return defaultVal;
  let str = String(val).trim().toUpperCase().replace(/\+$/, '');

  let num = 0;
  if (str.endsWith('K')) {
    num = Math.round(parseFloat(str.replace('K', '')) * 1000);
  } else if (str.endsWith('M')) {
    num = Math.round(parseFloat(str.replace('M', '')) * 1000000);
  } else {
    num = parseInt(str.replace(/,/g, ''), 10);
  }

  if (isNaN(num) || num <= 0) return defaultVal;
  return num.toLocaleString('en-IN') + '+';
}

export async function GET() {
  const profileUrl = 'https://www.instagram.com/grandosolar/';

  for (const ua of USER_AGENTS) {
    try {
      const res = await fetch(profileUrl, {
        headers: {
          'User-Agent': ua,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
          'Cache-Control': 'no-cache, no-store',
        },
        cache: 'no-store'
      });

      if (res.ok) {
        const html = await res.text();
        
        // Parse meta content containing Followers and Posts
        const metaMatch = html.match(/content="([^"]*Followers[^"]*)"/i) || html.match(/<meta [^>]*content="([^"]*Followers[^"]*)"/i);
        
        if (metaMatch) {
          const content = metaMatch[1];
          const followersMatch = content.match(/([\d\.,KkMm]+)\s+Followers/i);
          const postsMatch = content.match(/([\d\.,KkMm]+)\s+Posts/i);

          const followersRaw = followersMatch ? followersMatch[1] : null;
          const postsRaw = postsMatch ? postsMatch[1] : null;

          if (followersRaw || postsRaw) {
            const followers = formatFullNumber(followersRaw, '16,000+');
            const posts = postsRaw ? (postsRaw.endsWith('+') ? postsRaw : `${postsRaw}+`) : '128+';

            return NextResponse.json(
              {
                followers,
                posts,
                live: true,
                rawFollowers: followersRaw,
                rawPosts: postsRaw,
                sourceUrl: profileUrl,
                fetchedAt: new Date().toISOString(),
              },
              {
                headers: {
                  'Cache-Control': 'no-store, max-age=0, must-revalidate',
                },
              }
            );
          }
        }
      }
    } catch (err) {
      console.error(`Error scraping Instagram using UA (${ua}):`, err);
    }
  }

  // Fallback response if network/Instagram is unreachable
  return NextResponse.json(
    {
      followers: '16,000+',
      posts: '128+',
      live: false,
      sourceUrl: profileUrl,
      fetchedAt: new Date().toISOString(),
    },
    {
      headers: {
        'Cache-Control': 'no-store, max-age=0, must-revalidate',
      },
    }
  );
}
