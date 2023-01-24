
const apiParamsClientID = {
    headers: {
        Authorization: 'Client-ID e32885c0558c4f1'
    }
}
const headerCover = 'https://cdn4.eyeem.com/thumb/686f88029a7e7b80d68b9b887533c9bc7ac9a248-1582630816077/w/2600'

// 手動開啟未開放相簿、覆寫檔名 ＆ 封面圖：
let albumsObj = {
  fPRNIKi: {
    title: '春日',
    cover: 'tFaAlZJ'
  },
  NyH82Jb: {
    title: '夏日',
    cover: 'Dck1I4N'
  },
  MfMqPn1: {
    title: '秋日',
    cover: null
  },
  hU1Eizy: {
    title: '冬日',
    cover: null
  },
  EfOlbXz: {
    title: '落花',
    cover: null
  },
  xuJyzMh: {
    title: '天空',
    cover: null
  },
  MNaopiH: {
    title: '海天一線',
    cover: 'v17szvE'
  },
  Bvz2kWV: {
    title: '流水',
    cover: 'L55EXkR'
  },
  wZtrdwk: {
    title: '街景',
    cover: '6BnfzWK'
  },
  leMe5s1: {
    title: '街角微光',
    cover: 'G0YAWig'
  },
  iFb1GHJ: {
    title: '聖誕夜',
    cover: 'OEmjtfQ'
  },
  cSSpVTQ: {
    title: '燈景',
    cover: 'bwwWa1q'
  },
  A3ZPSKH: {
    title: '午茶',
    cover: null
  },
  zPfvMqJ: {
    title: '小物',
    cover: '4j348gD'
  },
}
const albumsIdAry = Object.keys(albumsObj)
const apiAlbumUrlPre =  "https://api.imgur.com/3/album/"
// const apiAlbumsUrl =  "https://api.imgur.com/3/account/dawnhsj/submissions" // 取公開相簿
// const apiAlbumsUrl =  "/api/3/account/dawnhsj/submissions"

export default {
    apiParamsClientID,
    apiAlbumUrlPre,
    headerCover,
    albumsObj,
    albumsIdAry,
}
