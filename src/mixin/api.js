
const apiParamsClientID = {
    headers: {
        Authorization: 'Client-ID e32885c0558c4f1'
    }
}
const headerCover = 'https://cdn4.eyeem.com/thumb/686f88029a7e7b80d68b9b887533c9bc7ac9a248-1582630816077/w/2600'
const titleRenameList = {
  'PzbnjOo': 'Christmas',
  '8NwHlVq': 'Macao',
  'wyfx2wA': 'Korea',
  'IK5DmkX': 'Summer',
  // 'IK5DmkX': '[Season] Fall',
  'AAZjpPn': 'Winter',
  '9treTDX': 'Spring',
  'AJLJXXJ': 'Sky'

}

const apiAlbumsUrl =  "https://api.imgur.com/3/account/dawnhsj/submissions"
// const apiAlbumsUrl =  "/api/3/account/dawnhsj/submissions"

export default {
    apiParamsClientID,
    apiAlbumsUrl,
    titleRenameList,
    headerCover
}
