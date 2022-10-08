
const LinkList = require('./LinkList');

(()=>{
    const list = new LinkList()

    list.append(10);
    list.append(14);
    list.append(89);
    list.append(89);

    list.print()
})()