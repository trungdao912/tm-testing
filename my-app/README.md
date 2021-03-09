## TEST 1
- Changing ~/mock/data.json to change the structure of the dropdown menu
- ~/src/components/Menu is the menu component for test 1
- The structure of the data must comply this structure
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

## TEST 2
~/src/App.js
