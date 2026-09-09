const UPSTREAM_ORIGIN = 'https://gaceta-hilario-olveras-projects.vercel.app';
const CANONICAL_ORIGIN = 'https://www.meriadock.org.mx';

function buildUpstreamUrl(req) {
  const rawPath = Array.isArray(req.query.path) ? req.query.path.join('/') : (req.query.path || '');
  const upstreamUrl = new URL(`/gaceta${rawPath ? `/${rawPath}` : ''}`, UPSTREAM_ORIGIN);

  for (const [key, value] of Object.entries(req.query)) {
    if (key === 'path') continue;
    if (Array.isArray(value)) {
      for (const item of value) upstreamUrl.searchParams.append(key, item);
    } else if (value != null) {
      upstreamUrl.searchParams.set(key, value);
    }
  }

  return upstreamUrl;
}

function rewriteLocation(location) {
  if (!location) return location;

  try {
    const resolved = new URL(location, UPSTREAM_ORIGIN);
    if (resolved.hostname === new URL(UPSTREAM_ORIGIN).hostname) {
      return `${CANONICAL_ORIGIN}${resolved.pathname}${resolved.search}${resolved.hash}`;
    }
    return location;
  } catch {
    return location;
  }
}

export const config = {
  api: {
    bodyParser: false,
    responseLimit: false,
    externalResolver: true,
  },
};

export default async function handler(req, res) {
  try {
    const upstreamUrl = buildUpstreamUrl(req);
    const headers = {};

    for (const header of ['accept', 'accept-language', 'content-type', 'range', 'user-agent']) {
      if (req.headers[header]) headers[header] = req.headers[header];
    }

    const upstream = await fetch(upstreamUrl, {
      method: req.method,
      headers,
      redirect: 'manual',
    });

    res.status(upstream.status);

    for (const header of [
      'content-type',
      'content-disposition',
      'cache-control',
      'etag',
      'last-modified',
      'accept-ranges',
      'content-range',
    ]) {
      const value = upstream.headers.get(header);
      if (value) res.setHeader(header, value);
    }

    const location = upstream.headers.get('location');
    if (location) res.setHeader('Location', rewriteLocation(location));

    if (req.method === 'HEAD' || upstream.status === 204 || upstream.status === 304) {
      res.end();
      return;
    }

    const contentType = upstream.headers.get('content-type') || '';
    const body = Buffer.from(await upstream.arrayBuffer());

    if (contentType.includes('text/html')) {
      const html = body
        .toString('utf8')
        .replaceAll(UPSTREAM_ORIGIN, CANONICAL_ORIGIN);
      res.send(html);
      return;
    }

    res.send(body);
  } catch (error) {
    console.error('Gaceta institutional proxy failed', error);
    res.status(502).json({ error: 'No fue posible cargar la Gaceta Institucional.' });
  }
}
