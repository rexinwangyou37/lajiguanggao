
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://promote-pic.helipay.com/AGENT_PICS/images/advertisement/20220815183302.png`;
const method = `GET`;
const headers = {
'User-Agent' : `%E5%85%83%E5%AE%87%E5%AE%A2/10251734 CFNetwork/1331.0.7 Darwin/21.4.0`,
'Host' : `promote-pic.helipay.com`,
'Connection' : `keep-alive`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept-Encoding' : `gzip, deflate, br`,
'Accept' : `*/*`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
