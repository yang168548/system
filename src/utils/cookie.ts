//! export  vs export default
//!  export 是批量导出，导出多个
//! export default 是默认导出，导出一个

interface SetCookieType {
  // :前的是函数参数的类型，:后的是函数返回值的数据类型
  (name: string,value:string,days: number):void
}
interface GetCookieType {
  (name: string): undefined|string
}

interface RemoveCookieType {
  (name: string): void
}

export const setCookie:SetCookieType = function(name, value, days) {
  let d = new Date();
  d.setDate(d.getDate() + days);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d};path=/`;
};

export const getCookie:GetCookieType = function(name) {
  let arr = decodeURIComponent(document.cookie).split("; ");
  for (let i = 0; i < arr.length; i++) {
    let newarr = arr[i].split("=");
    if (name === newarr[0]) {
      return newarr[1];
    }
  }
};

export const removeCookie: RemoveCookieType = function(name) {
  setCookie(name, "", -1);
};
