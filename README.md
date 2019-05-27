# next-weapp-clipboard
> Clipboard for weapp

## installation
```bash
npm install -S afeiship/next-weapp-clipboard --registry=https://registry.npm.taobao.org
```

## apis
| api | params           | description             |
| --- | ---------------- | ----------------------- |
| set | (inValue,inData) | Set data to clipboard   |
| get | (inData)         | Get data from clipboard |

## usage
```js
import NxWeappClipboard from 'next-weapp-clipboard';

// code goes here:
NxWeappClipboard.set('hello').then(response=>{
  if(!response.code){
    console.log('success');
  }
});

NxWeappClipboard.get();
```

## resources
- https://github.com/afeiship
