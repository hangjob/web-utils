import CryptoJS from "crypto-js";
import JSEncrypt from "jsencrypt"
/**
 * 对称加密
 * @param word
 * @param iv
 * @param key
 * @returns {string}
 */
function aesEncrypt(word, iv, key) {
    let str = typeof word == "string" ? word : JSON.stringify(word);
    const data = CryptoJS.enc.Utf8.parse(str);
    const encrypted = CryptoJS.AES.encrypt(data, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}


/**
 * 对称解密
 * @param word
 * @param iv
 * @param key
 * @returns {string}
 */
function aesDecrypt(word, iv, key) {
    const decrypt = CryptoJS.AES.decrypt(word, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypt);
}


/**
 * 获取加密的密钥
 * @param iv
 * @param key
 */
function getCrypto({iv = '', key = ''} = {}) {
    return {
        CryptoJS,
        iv: CryptoJS.enc.Utf8.parse(iv),
        key: CryptoJS.enc.Utf8.parse(key), //16位
    }
}


/**
 * 非对称加密
 * @param str
 * @param publicKey
 * @returns {*}
 */
const rsaEncrypt = (str, publicKey) => {
    let encrypted = new JSEncrypt() // 创建加密对象实例
    encrypted.setPublicKey(publicKey) // 设置公钥
    return encrypted.encrypt(str) // 对内容进行加密
}


/**
 * 非对称解密
 * @param str
 * @param privateKey
 */
const rasDecrypt = (str, privateKey) => {
    const decrypted = new JSEncrypt() // 创建解密对象实例
    decrypted.setPrivateKey(privateKey) // 设置私钥
    return decrypted.decrypt(str) // 拿私钥解密内容
}

/**
 * 非对称生成Key
 * @param keySize
 */
const getJSEncrypt = (keySize = '512') => {
    const crypt = new JSEncrypt({default_key_size: keySize});
    return new Promise((resolve) => {
        crypt.getKey(function () {
            return resolve({
                privateKey: crypt.getPrivateKey(),
                publicKey: crypt.getPublicKey()
            })
        })
    })
}





export {
    aesEncrypt,
    aesDecrypt,
    getCrypto,
    rsaEncrypt,
    rasDecrypt,
    getJSEncrypt
}
