import CryptoJS from 'crypto-js';

const secretKey = './okfoAyF:262+12';

function IsEncryptText(data) {
    try {
        if(data.startsWith("function(")){
            return false;
        };
      const decryptedData = CryptoJS.AES.decrypt(data, secretKey).toString(CryptoJS.enc.Utf8);
      if(decryptedData.startsWith("function(")){
        return true;
    };
      return false;
    } catch (error) {
      return false;
    }
  }
function encryptPrintFunction(data) {
    if (data && data.length > 0) {
      return data.map(item => ({
            ...item,
        functionInfo: {
            ...item.functionInfo,
            printFunction: IsEncryptText(item.functionInfo.printFunction) ? item.functionInfo.printFunction : CryptoJS.AES.encrypt(item.functionInfo.printFunction, secretKey).toString()
        }
      }));
    }
    return data;
  }

export default {
  EncryptText(data) {
    // 导出代码的时候是列表
    let list = JSON.parse(data);
    if (!(list instanceof Array)) {
        this.$$message.error("导出的原数据格式错误");
    }
    const encryptedData = JSON.stringify(encryptPrintFunction(list));
    return encryptedData;
  },
  DecryptText(data) {
    // 执行的时候是单条 需要解密 printFunction
    // Decrypt AES-encrypted data and convert to UTF-8
    if(! IsEncryptText(data)){
        return data
    }
    const decryptedData = CryptoJS.AES.decrypt(data, secretKey).toString(CryptoJS.enc.Utf8);
    return decryptedData;
  }
};
