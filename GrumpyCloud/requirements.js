(function (window) {
    {
        var unknown = '-';

        // screen
        var screenSize = '';
        if (screen.width) {
            width = (screen.width) ? screen.width : '';
            height = (screen.height) ? screen.height : '';
            screenSize += '' + width + " x " + height;
        }

        // browser
        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;
        var browser = navigator.appName;
        var version = '' + parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;

        // Opera
        if ((verOffset = nAgt.indexOf('Opera')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Opera Next
        if ((verOffset = nAgt.indexOf('OPR')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 4);
        }
        // Legacy Edge
        else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
            browser = 'Microsoft Legacy Edge';
            version = nAgt.substring(verOffset + 5);
        } 
        // Edge (Chromium)
        else if ((verOffset = nAgt.indexOf('Edg')) != -1) {
            browser = 'Microsoft Edge';
            version = nAgt.substring(verOffset + 4);
        }
        // MSIE
        else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(verOffset + 5);
        }
        // Chrome
        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
            browser = 'Chrome';
            version = nAgt.substring(verOffset + 7);
        }
        // Safari
        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
            browser = 'Safari';
            version = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Firefox
        else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
            browser = 'Firefox';
            version = nAgt.substring(verOffset + 8);
        }
        // MSIE 11+
        else if (nAgt.indexOf('Trident/') != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(nAgt.indexOf('rv:') + 3);
        }
        // Other browsers
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            browser = nAgt.substring(nameOffset, verOffset);
            version = nAgt.substring(verOffset + 1);
            if (browser.toLowerCase() == browser.toUpperCase()) {
                browser = navigator.appName;
            }
        }
        // trim the version string
        if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

        majorVersion = parseInt('' + version, 10);
        if (isNaN(majorVersion)) {
            version = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }

        // mobile version
        var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);
        var ismobile = navigator.userAgentData.mobile;
      
        // cookie
        var cookieEnabled = (navigator.cookieEnabled) ? true : false;

        if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
            document.cookie = 'testcookie';
            cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
        }

        // system
        var os = unknown;
        var clientStrings = [
            {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
            {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
            {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
            {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
            {s:'Windows Vista', r:/Windows NT 6.0/},
            {s:'Windows Server 2003', r:/Windows NT 5.2/},
            {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
            {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
            {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
            {s:'Windows 98', r:/(Windows 98|Win98)/},
            {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
            {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {s:'Windows CE', r:/Windows CE/},
            {s:'Windows 3.11', r:/Win16/},
            {s:'Android', r:/Android/},
            {s:'Open BSD', r:/OpenBSD/},
            {s:'Sun OS', r:/SunOS/},
            {s:'Chrome OS', r:/CrOS/},
            {s:'Linux', r:/(Linux|X11(?!.*CrOS))/},
            {s:'iOS', r:/(iPhone|iPad|iPod)/},
            {s:'Mac OS X', r:/Mac OS X/},
            {s:'Mac OS', r:/(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {s:'QNX', r:/QNX/},
            {s:'UNIX', r:/UNIX/},
            {s:'BeOS', r:/BeOS/},
            {s:'OS/2', r:/OS\/2/},
            {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
        ];
        for (var id in clientStrings) {
            var cs = clientStrings[id];
            if (cs.r.test(nAgt)) {
                os = cs.s;
                break;
            }
        }

        var osVersion = unknown;

        if (/Windows/.test(os)) {
            osVersion = /Windows (.*)/.exec(os)[1];
            os = 'Windows';
        }

        switch (os) {
            case 'Mac OS':
            case 'Mac OS X':
            case 'Android':
                osVersion = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(nAgt)[1];
                break;

            case 'iOS':
                osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                break;
        }
        
        // flash (you'll need to include swfobject)
        /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
        var flashVersion = 'no check';
        if (typeof swfobject != 'undefined') {
            var fv = swfobject.getFlashPlayerVersion();
            if (fv.major > 0) {
                flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
            }
            else  {
                flashVersion = unknown;
            }
        }
    }

    window.jscd = {
        screen: screenSize,
        browser: browser,
        browserVersion: version,
        browserMajorVersion: majorVersion,
        mobile: mobile,
        ismobile: ismobile,
        os: os,
        osVersion: osVersion,
        cookies: cookieEnabled,
        flashVersion: flashVersion
    };
}(this));

(function(Scratch) {
  'use strict';
  const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNjkuODA5MDEiIGhlaWdodD0iODguMjcxMjgiIHZpZXdCb3g9IjAsMCwxNjkuODA5MDEsODguMjcxMjgiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTUuMDk1NSwtOTEuODUyMzkpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxpbWFnZSB4PSIyNi40Nzk0MSIgeT0iMTUuOTExNDUiIHRyYW5zZm9ybT0icm90YXRlKC0wLjIwMjYxKSBzY2FsZSg1Ljg0NDgzLDUuODQ0ODMpIiB3aWR0aD0iMjkiIGhlaWdodD0iMTUiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQjBBQUFBUENBWUFBQUFZamNTZkFBQUFBWE5TUjBJQXJzNGM2UUFBQVVaSlJFRlVPRTlqWk1BRFZOYnQrNDhzemN6THk4REl6c0h3aTVzWExIelBXSUVSbjM1Y2NqZzFJVnVJYmhteVllUllqTlZTWWkyRVdVNnF4UmlXa21vaHVzWFk5Tit3MDBXeEI2K2xMQ0tpOFBnakZIY2czOElzeEJZZHlLR0IxOUovOGtxRTdBTExzNzU3emZEMzgyY3dHMlRoYnlGUkRIMUVXWG9ueUFtc1VWVGVtT0gxdzdNTSttNGxEQmQzOWNCcGtEZ0k0SklEaVlPQTB0a0hHQ2tkeGFldzRBRlpxTEp1SDl6Vjk0d1Z3QnFSTGY3Y25nTXpES2NjTkZ1QkxXYjcrcGtCRnJkZ1M5SHpJM0xZZ09MMWJXd0MyRWN3aTUvZDNNL0F1MjR0bVA4NUtCaW5ITXdja0lVd0FMSVlIdm40SWc4VVQrOVNNc0NHZzRJVlppRk1EOHhpYkhJZ05UQkxZWVVLUVV0SlNjRkVwVG9HQmdhOGx0TENRcEREOEZxS0s4dkFFaGJNWjdBVVNyUlBjU1VrZk9VdHNZWmpVd2ZLci9Bc2d5MEZVOXRpV0FFQkFPMU9wa2hxbU1IaUFBQUFBRWxGVGtTdVFtQ0MiLz48L2c+PC9nPjwvc3ZnPg==';
  
  class GrumpyCloudRequirements {
    getInfo () {
      return {
        id: 'grumpycloudrequirements',
        name: 'Grumpy Cloud Requirements',
        menuIconURI: icon,
        blockIconURI: icon,
        blocks: [
          {
            opcode: 'getOS',
            blockType: Scratch.BlockType.REPORTER,
            text: 'operating system'
          },
          {
            opcode: 'getBrowser',
            blockType: Scratch.BlockType.REPORTER,
            text: 'browser'
          },
          {
            opcode: 'getURL',
            blockType: Scratch.BlockType.REPORTER,
            text: 'url'
          },
          {
            opcode: 'iscomputer',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is this device a mobile'
          },
          {
            opcode: 'isDownloaded',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is this project downloaded'
          }
        ]
      };
    }
    iscomputer () {
      return jscd.ismobile;
    }
    getOS () {
      return jscd.os;
    }
    getURL (){
      return window.location.href;
    }
    isDownloaded (){
      if (window.location.href.indexOf("file:///") == 0){
        return true;
      } else {
        return false;
      }
    }
    getBrowser () {
      return jscd.browser;
    }
  }

  Scratch.extensions.register(new GrumpyCloudRequirements());
}(Scratch));
