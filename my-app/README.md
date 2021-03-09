## How to change dynamic data
Changing ~/mock/data.json to change the structure of the dropdown menu

The structure of the data must comply this structure
```json
[
  {
    "title": "Menu A",
    "children": [
      {
        "title": "Menu A - 1",
      },
      {
        "title": "Menu A - 2",
      }
    ]
  },
  {
    "title": "Menu B",
  },
  {
    "title": "Menu C"
  },
  ...
]
```