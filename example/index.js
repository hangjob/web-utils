import {aesEncrypt,aesDecrypt, getCrypto,rasDecrypt,rsaEncrypt,getJSEncrypt} from "../packages/index";
const {iv,key} = getCrypto({
    iv: '1234567890123456',
    key: '1234567890123456'
})


const privateKey = '-----BEGIN RSA PRIVATE KEY-----\n' +
    'MIIBOAIBAAJASj9QjNul1xu4Bpq6MByZJePADyBsoLvoGj+sSLuaPEy4pdJ6lEqW\n' +
    '0EjpT1nakDzlwXB1IDHQeeHlga31KkSUKwIDAQABAkAxWlLFvr9G9ELoCPOYRXo7\n' +
    'aF9i7q+mTCFlSUvQ8Pr9915Aot8qwjW3tcH0HhRbytikEmZ2esplPd832ie5qRKZ\n' +
    'AiEAigM6NID/wtv01bGBbmOgUePeD5UnHbD2IiwnAKcJ6/cCIQCJuLmkVNrOcVNe\n' +
    'Fz4vFRqvjOd95XBwlFkI4nfTVC7EbQIgYGPYpwrhlmqhGQ6cY0jZk9geI6v8YdRS\n' +
    'U5Oaue3wFAkCIDXE9F3Pb1oYbrcWlgWl1LRja+IAWUTq9lP8r1HH1TaFAiBSZ8oJ\n' +
    'Obty329SSgnl7ZICHome91o1BoxwWU5IBRKNaQ==\n' +
    '-----END RSA PRIVATE KEY-----'

const publicKey = '-----BEGIN PUBLIC KEY-----\n' +
    'MFswDQYJKoZIhvcNAQEBBQADSgAwRwJASj9QjNul1xu4Bpq6MByZJePADyBsoLvo\n' +
    'Gj+sSLuaPEy4pdJ6lEqW0EjpT1nakDzlwXB1IDHQeeHlga31KkSUKwIDAQAB\n' +
    '-----END PUBLIC KEY-----'


const str1  = aesEncrypt('123456', iv, key)
console.log(str1)
console.log(aesDecrypt(str1, iv, key))
console.log('------')

const str2 = rsaEncrypt('abcdefg', publicKey)
console.log(str2)
console.log(rasDecrypt(str2, privateKey))

