const Parser = require('ua-parser-js')
const parser = new Parser()

const connectionUrl = 'https://assets.akkadu.com/analysis/connection.json'
let connectionErrors = 0
let connectionInterval
let offlineFlag = false

// wechat
const isWeChat = () => {
  if (navigator.userAgent.match(/MicroMessenger/i)) {
    return true
  }
  return false
}


const isHuaweiBrowser = () => {
  // Editing the following line to accomodate === instead of == will make wechat none-detectible
  if (navigator.userAgent.match(/HuaweiBrowser/)) {
    const [version] = navigator.userAgent?.split?.('HuaweiBrowser/')[1]?.split?.(' ') || [0]
    return { version:parseFloat(version), name:'HuaweiBrowser' }
  }
  return false
}

/** Detect huawei phone. Ref: https://github.com/etienne-martin/device-detector-js/ */
const isHuaweiPhone = () => {
  const regexRawHuaweiStr = '(HW-)?(?:Huawei|Ideos|Honor[ _]?|(?:(?:AGS|AGS2|ALE|ALP|AMN|ANE|ARE|ARS|ATH|ATU|AUM|BAC|' +
  'BAH|BAH2|BG2|BGO|BKK|BKL|BLA|BLL|BLN|BND|BTV|CAG|CAM|CAN|CAZ|CHC|CHE[12]?|CHM|CLT|CMR|COL|COR|CPN|CRO|CRR|CUN|DIG|DIG|' +
  'DLI|DRA|DUA|DUB|DUK|EDI|ELE|EML|EVA|EVR|FDR|FIG|FLA|FRD|GRA|HLK|HMA|HRY|HWI|H[36]0|INE|JAT|JDN|JDN2|JKM|JMM|JSN|KIW|KNT|' +
  'KOB|KSA|LDN|LLD|LND|LON|LUA|LY[AO]|MAR|MHA|MRD|MYA|NCE|NEM|NEO|NXT|PAR|PCT|PIC|PLE|PLK|POT|PRA|RIO|RNE|RVL|SCC|SCL|SEA|' +
  'SHT|SLA|SNE|STF|STK|TAG|TIT|TNY|TRT|VCE|VEN|VIE|VKY|VNS|VOG|VRD|VTR|WAS|YAL|G(?:527|620S|621|630|735)|Y(?:221|330|550|6[23]5))' +
  '-(?:[A-Z]{0,2}[0-9]{1,4}[A-Z]{0,2}?)|H1711|U(?:8230|8500|8661|8665|8667|8800|8818|8860|9200|9508))[);/ ])|hi6210sft|SPN-AL00|' +
  'HRY-LX1MEB|GEM-70[1-3]L|PE-(UL00|TL10)|VRD-W09|T1-A21L|T1-701u|ASK-AL00x'
  const regex = RegExp(`(?:^|[^A-Z0-9-_]|[^A-Z0-9-]_|sprd-)(?:${regexRawHuaweiStr})`, 'i')
  if (regex.exec(navigator.userAgent)) {
    return true
  }
  return false
}

const isSogou = () => {
  if (navigator.userAgent.match(/SogouMobileBrowser/)) {
    const [version] = navigator.userAgent?.split?.('SogouMobileBrowser/')[1]?.split?.(' ') || [0]
    return { version:parseFloat(version), name:'SogouMobileBrowser' }
  }
  return false
}


/**
 * Get briwser version and type.
 * @name getBrowserInfo
 * @description takes no parameters and returns an object with the browser name and version of the userAgent.
 * @returns {{browserName:string, browserVersion:number, osName:string, osVersion:number, isMobile:boolean, isSafari:boolean, isIos:boolean, isMac:boolean}}
 */

export function getBrowserInfo() {
  const result = parser.getResult()
  const browserInfo = {
    browserName:result && result.browser && result.browser.name || '',
    browserVersion:result && result.browser && parseFloat(result.browser.version) || 0,
    osName:result && result.os && result.os.name || '',
    osVersion:result && result.os && parseFloat(result.os.version) || 0,
    deviceVendor: result && result.device && result.device.vendor || '',
    isMobile:false,
    isSafari: false,
    isIos: false,
    isMac: false
  }
  if (browserInfo && browserInfo.osName.match(/(ios|android|blackberry)/i)) {
    browserInfo.isMobile = true
  }

  if (isWeChat()) {
    browserInfo.browserName = 'wechat'
    browserInfo.isMobile = true
  }

  if (isHuaweiBrowser()) {
    const { version, name } = isHuaweiBrowser()
    browserInfo.browserName = name
    browserInfo.browserVersion = version
    browserInfo.isMobile = true
  }

  if (isHuaweiPhone()) {
    browserInfo.deviceVendor = 'huawei'
    browserInfo.isMobile = true
  }
  
  if (isSogou()) {
    const { version, name } = isSogou()
    browserInfo.browserName = name
    browserInfo.browserVersion = version
    browserInfo.isMobile = true
  }

  browserInfo.isIos = browserInfo.osName ? !!browserInfo.osName.match(/(ios)/i) : false
  browserInfo.isMac = browserInfo.osName ? !!browserInfo.osName.match(/(mac)/i) : false
  // ios devices report browser name to be ios
  browserInfo.isSafari = browserInfo.browserName ? !!browserInfo.browserName.match(/(safari|ios)/i) : false
  return browserInfo
}

/**
 * @description tries to get a small 67 byte file from our S3 bucket every (interval) seconds
 * fires corresponding callbacks when we are either offline or online
 * TODO: separate this into it's own module
 * @param {Function} offlineCallback function to run when we become offline
 * @param {Function} onlineCallback function to run when we are online again
 * @param {number} interval
 * @param {number} sensitivity // how many connection errors we allow before we decide that we are offline
 */
export function monitorConnection(offlineCallback = () => {}, onlineCallback = () => {}, interval = 8000, sensitivity = 2) {
  if (connectionInterval) {
    clearInterval(connectionInterval)
  }
  connectionInterval = setInterval(() => {
    fetch(connectionUrl, {
      method:'get',
      cache:'no-store',
      mode:'no-cors' // we do not care about the returned data
    })
      .then((response) => {
        if (!offlineFlag) {
          return
        }
        connectionErrors = 0
        offlineFlag = false
        onlineCallback()
      })
      .catch(() => { connectionErrors += 1 })
      .then(() => {
        if (connectionErrors >= sensitivity) {
          if (offlineFlag) {
            return
          }
          offlineFlag = true
          connectionErrors = 0
          offlineCallback()
        }
      })
  },interval)
}
