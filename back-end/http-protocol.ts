export interface Status {
  code: number
  message: string
}

export interface Response {
  status: Status
  content: unknown
  token?: string | null
}

export function defaultResponse(): Response {
  return { status: status(202), content: null }
}

export interface StatusHash {
  [key: string]: Status
}

export const status = function (_code: number): Status {
  const _s: StatusHash = {
    100: { code: 100, message: 'Continue' },
    101: { code: 101, message: 'Switching Protocols' },
    102: { code: 102, message: 'Processing (WebDAV)' },
    103: { code: 103, message: 'Early Hints Experimental' },
    200: { code: 200, message: 'OK' },
    201: { code: 201, message: 'Created' },
    202: { code: 202, message: 'Accepted' },
    203: { code: 203, message: 'Non-Authoritative Information' },
    204: { code: 204, message: 'No Content' },
    205: { code: 205, message: 'Reset Content' },
    206: { code: 206, message: 'Partial Content' },
    207: { code: 207, message: 'Multi-Status (WebDAV)' },
    208: { code: 208, message: 'Already Reported (WebDAV)' },
    226: { code: 226, message: 'IM Used (HTTP Delta encoding)' },
    300: { code: 300, message: 'Multiple Choices' },
    301: { code: 301, message: 'Moved Permanently' },
    302: { code: 302, message: 'Found' },
    303: { code: 303, message: 'See Other' },
    304: { code: 304, message: 'Not Modified' },
    305: { code: 305, message: 'Use Proxy Deprecated' },
    306: { code: 306, message: 'Unused' },
    307: { code: 307, message: 'Temporary Redirect' },
    308: { code: 308, message: 'Permanent Redirect' },
    400: { code: 400, message: 'Bad Request' },
    401: { code: 401, message: 'Unauthorized' },
    402: { code: 402, message: 'Payment Required Experimental' },
    403: { code: 403, message: 'Forbidden' },
    404: { code: 404, message: 'Not Found' },
    405: { code: 405, message: 'Method Not Allowed' },
    406: { code: 406, message: 'Not Acceptable' },
    407: { code: 407, message: 'Proxy Authentication Required' },
    408: { code: 408, message: 'Request Timeout' },
    409: { code: 409, message: 'Conflict' },
    410: { code: 410, message: 'Gone' },
    411: { code: 411, message: 'Length Required' },
    412: { code: 412, message: 'Precondition Failed' },
    413: { code: 413, message: 'Payload Too Large' },
    414: { code: 414, message: 'URI Too Long' },
    415: { code: 415, message: 'Unsupported Media Type' },
    416: { code: 416, message: 'Range Not Satisfiable' },
    417: { code: 417, message: 'Expectation Failed' },
    418: { code: 418, message: "I'm a teapot" },
    421: { code: 421, message: 'Misdirected Request' },
    422: { code: 422, message: 'Unprocessable Content (WebDAV)' },
    423: { code: 423, message: 'Locked (WebDAV)' },
    424: { code: 424, message: 'Failed Dependency (WebDAV)' },
    425: { code: 425, message: 'Too Early Experimental' },
    426: { code: 426, message: 'Upgrade Required' },
    428: { code: 428, message: 'Precondition Required' },
    429: { code: 429, message: 'Too Many Requests' },
    431: { code: 431, message: 'Request Header Fields Too Large' },
    451: { code: 451, message: 'Unavailable For Legal Reasons' },
    500: { code: 500, message: 'Internal Server Error' },
    501: { code: 501, message: 'Not Implemented' },
    502: { code: 502, message: 'Bad Gateway' },
    503: { code: 503, message: 'Service Unavailable' },
    504: { code: 504, message: 'Gateway Timeout' },
    505: { code: 505, message: 'HTTP Version Not Supported' },
    506: { code: 506, message: 'Variant Also Negotiates' },
    507: { code: 507, message: 'Insufficient Storage (WebDAV)' },
    508: { code: 508, message: 'Loop Detected (WebDAV)' },
    510: { code: 510, message: 'Not Extended' },
    511: { code: 511, message: 'Network Authentication Required' }
  }

  return _s[_code]
}
