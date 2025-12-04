import { GET as rssHandler } from '../rss/route';

export function GET(request: Request) {
  return rssHandler(request);
}
