import * as ProxyChain from 'proxy-chain'

const C_PROXY_PORT = 8000;

const C_USERNAME = '1';
const C_PASSWORD = '1';


class ProxyChainServer extends ProxyChain.Server {
    constructor(options = {}) {
        super(options);
    }

    async onConnect(request, socket, head) {
        const timing = `${Date.now()} [${socket.proxyChainId} ${request.method} ${request.url}]`;
        try {
            console.time(timing);
            super.onConnect(request, socket, head);
        } finally {
            console.timeEnd(timing);
        }
    }

    async onRequest(request, response) {
        const timing = `${Date.now()} [${request.socket.proxyChainId} ${request.method} ${request.url}]`;
        try {
            console.time(timing);
            super.onRequest(request, response);
        } finally {
            console.timeEnd(timing);
            console.log(`${timing} ${response.statusCode}`);
        }
    }
    sendSocketResponse(socket, statusCode = 500, caseSensitiveHeaders = {}, message = '') {
        const timing = `${Date.now()} [${socket.proxyChainId} ${statusCode} ${message}]`;
        try {
            console.time(timing);
            super.sendSocketResponse(socket, statusCode, caseSensitiveHeaders, message);
        } finally {
            console.timeEnd(timing);
        }
    }
}

const server = new ProxyChainServer({
    port: C_PROXY_PORT,
    verbose: false, // 日志配置
    authRealm: 'proxy-chain-server',
    prepareRequestFunction: ({ request, username, password, port, isHttp, connectionId }) => {
        
        if (request.url?.indexOf('example.com') !== -1
            || request.url.indexOf('google.com') !== -1
            || request.url.indexOf('googleapis.com') !== -1
            || request.url.indexOf('gstatic.com') !== -1) {
                
            return {
                requestAuthentication: true,
            }
        }
        
        console.log(`${Date.now()} ${connectionId}: ${request.url}`);
        return {
            requestAuthentication: username !== C_USERNAME || password !== C_PASSWORD,
            failMsg: 'Bad credential, please try again.',

            // TODO: mocking rotate upstream proxy: connectionId % N
            upstreamProxyUrl: _getProxyList(),
        }
    },
});

server.listen(() => {
    console.log(`Proxy server is listening on port ${server.port}`);
});


// Emitted when HTTP connection is closed
server.on('connectionClosed', ({ connectionId, stats }) => {
    console.log(`${Date.now()} ${connectionId} closed: ${JSON.stringify(stats)}`);
});

// Emitted when HTTP request fails
server.on('requestFailed', ({ request, error }) => {
    console.log(`${Date.now()} ${request.socket.proxyChainId} Request ${request.url} failed: ${error}`);
});


server.on('tunnelConnectFailed', ({ proxyChainId, response, socket, head, customTag }) => {
    console.log(`${Date.now()}  ${proxyChainId} CONNECT response failed with status code: ${response.statusCode}`);
});

server.on('tunnelConnectResponded', ({ proxyChainId, response, socket, head, customTag }) => {
    console.log(`${Date.now()} ${proxyChainId} CONNECT response received: ${response.statusCode}`);
});


// Shutdown server
// server.close(true, () => {
//     console.log(`Proxy server was closed`);
// })


/**
 * Get proxy list.
 * @returns proxy list
 */
function _getProxyList() {
    return 'http://USERNAME:PASSWORD@proxy-provider.com';
}