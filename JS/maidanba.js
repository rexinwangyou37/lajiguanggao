/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://creditcard.bankcomm.com/tfimg/public00/M00/3A/F6/trScJ2Nov2mAJVnnAAEtmGLc0Eo160.png`;
const method = `GET`;
const headers = {
'User-Agent' : `BankOfCommunications/6.0.1 (iPhone; iOS 15.4; Scale/3.00)`,
'Host' : `creditcard.bankcomm.com`,
'Connection' : `keep-alive`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept-Encoding' : `gzip, deflate, br`,
'Accept' : `image/*;q=0.8`
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
