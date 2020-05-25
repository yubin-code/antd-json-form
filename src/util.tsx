import _ from 'lodash';

/**
 * 获取 antd 内置的参数
 * @param item form的item参数
 */
export function  GetSystemParam (param: any, filter: string[]) {
  const data: {[key: string]: any} = {}
  Object.keys(param).forEach((key) => {
    if(filter.indexOf(key) === -1){
      data[key] = param[key]
    }
  })
  return data
}


/**
 * 函数节流
 * @param fun 函数
 * @param wait 时间
 */
export function throttle(fun: (...params:any) => void, wait:number){
  let pre = Date.now();
  // eslint-disable-next-line func-names
  return function(...param: any){
      const now = Date.now();
      if(now - pre >= wait){
          pre = Date.now();
          if(_.isFunction(fun)){
            fun(...param)
          }
      }
  }
}