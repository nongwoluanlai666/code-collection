function({name}, print) { 
    print("问候语", `你好${name}`);
    const hd = {
          'Cookie': name,
          'Content-Type': 'application/json; charset=utf-8',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2012K11AC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.141 Mobile Safari/537.36 XWEB/5169 MMWEBSDK/20221206 MMWEBID/5700 MicroMessenger/8.0.32.2300(0x2800205D) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64'
      };
  
      const url = 'http://mwx.sanguosha.cn/api/boxes/index';
    const data = {
          method: 'POST',
          mode :'cors',
          headers:{
            'Content-Type': 'application/json; charset=utf-8',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2012K11AC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.141 Mobile Safari/537.36 XWEB/5169 MMWEBSDK/20221206 MMWEBID/5700 MicroMessenger/8.0.32.2300(0x2800205D) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64'
        },
          body: JSON.stringify({"PostGet": "POST","remoteUrl":url, "headers":hd, "body":{ "url": "http%3A%2F%2Fmwx.sanguosha.cn%2Fh5game_jieyingbaoweizhan%2Findex.html%23%2Fgame%3Flevel%3D1" }})
      };
    const apiUrl = `http://${window.location.hostname}:${1233}/api/http`;
    print("apiUrl", apiUrl);
    fetch(apiUrl, data)
          .then(response => {
            if (!response.ok) {
                print("HTTP error! Status:", `${response}`);
            }
            return response.json(); // Parse the response JSON
          })
          .then(data => {
            console.log("res", data);
            print("res", data);
          })
  }



  function({name}, print) { 
    print("问候语", `你好${name}`);
    const hd = {
          'Cookie': name,
          'Content-Type': 'application/json; charset=utf-8',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2012K11AC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.141 Mobile Safari/537.36 XWEB/5169 MMWEBSDK/20221206 MMWEBID/5700 MicroMessenger/8.0.32.2300(0x2800205D) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64'
      };
  
      const url = 'https://www.baidu.com';
    const data = {
          method: 'POST',
          mode :'cors',
          headers:{
            'Content-Type': 'application/json; charset=utf-8',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2012K11AC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.141 Mobile Safari/537.36 XWEB/5169 MMWEBSDK/20221206 MMWEBID/5700 MicroMessenger/8.0.32.2300(0x2800205D) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64'
        },
          body: JSON.stringify({"PostGet": "GET","remoteUrl":url, "headers":hd, "body":{}})
      };
    fetch('http://192.168.8.25:1233/api/http', data)
          .then(response => {
            if (!response.ok) {
                print("HTTP error! Status:", `${response}`);
            }
            return response.json(); 
          })
          .then(data => {
            print("res", data);
          })
  }