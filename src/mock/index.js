import Mock from 'mockjs'

import { menuList } from './mock.menulist.js'
import { boardList } from './mock.boardlist.js'
import { slideImgs } from './mock.slideShow.js'

let mocks = [];
function addToMock(list) {
  list.forEach(n => {
    if(n.method) {
      mocks.push(n)
    }
  })
}

addToMock(menuList);
addToMock(boardList);
addToMock(slideImgs);

if(mocks.length !== 0) {
  mocks.forEach(n => {
    //格式： Mock.mock( url, post/get , 返回的数据)；
    Mock.mock(n.method, 'post', n.data)
  })
}
