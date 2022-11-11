
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://image.qqchess.qq.com/QQChessWX/public/assets/res/HuoDong/oldActivity/ggsj20221102.png`;
const method = `GET`;
const headers = {
'Accept-Encoding' : `gzip, deflate, br`,
'Accept' : `*/*`,
'Cache-Control' : `no-cache`,
'Connection' : `keep-alive`,
'Host' : `image.qqchess.qq.com`,
'User-Agent' : `QQChess/41604 CFNetwork/1331.0.7 Darwin/21.4.0`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
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
