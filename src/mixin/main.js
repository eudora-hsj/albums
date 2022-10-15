
const setImgSizeSrc = (src, size) => {
    // size: t(160) / m(320) / l(640) / h(1024)
    let winW = window.innerWidth
    size = size ? size :
            // winW > 940 ? 'h': // 940 以上
            winW > 359 ? 'l':  // 940~360
            // winW > 320 ? 'm': // 360
            'm'
    console.warn(winW)
    let preS = 'https://i.imgur.com/'
    let ary = src.split('.')
    let lastS = `${size}.${ary[ary.length-1]}`
    let id = ary[ary.length-2].split('/')[1]
    return preS + id + lastS
}



export default {
    setImgSizeSrc
}
