# compare-CUD

Compare 2 array of objects and filter out create/update/delete objects

## Usage

```bash
npm i 'compare-cud'
```

```js
import compare from './index.js';

const newArray = [
  {
    id: 1,
    a: 1,
    b: 2
  },
  {
    id: 2,
    a: 1,
    b: 2,
    c: 3,
  },
  {
    id: 4,
    a: 0,
  },
  {
    id: 5,
    a: 1,
  },
];

const oldArray = [
  {
    id: 1,
    a: 1,
    b: 2
  },
  {
    id: 2,
    b: 2,
    c: 3,
  },
  {
    id: 3,
    d: 1,
    b: 2,
  },
  {
    id: 6,
    d: 1,
  },
];

const result = compare(newArray, oldArray);

/* result:
{
  "create": [
      {
          "id": 4,
          "a": 0
      },
      {
          "id": 5,
          "a": 1
      }
  ],
  "update": [
      {
          "id": 2,
          "a": 1,
          "b": 2,
          "c": 3
      }
  ],
  "delete": [
      {
          "id": 3,
          "d": 1,
          "b": 2
      },
      {
          "id": 6,
          "d": 1
      }
  ]
}

*/
```

