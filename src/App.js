import React from 'react';
import Dropdown from './Dropdown.js';

function App() {

const locationGroups =
    [
        {
            "name": 'Canada',
            "id": 1,
            "children": [
                {
                    "name": 'Ontario',
                    "id": 2,
                    "children": [
                        {
                            "name": 'Toronto',
                            "id": 3,
                            "children": [
                                {
                                    "name": 'Store 1',
                                    "id": 4,
                                    "children": null
                                },
                                {
                                    "name": 'Store 2',
                                    "id": 5,
                                    "children": [
                                        {
                                            "name": 'Sub-Store 2.2',
                                            "id": 6,
                                            "children": null
                                        },
                                        {
                                            "name": 'Sub-Store 2.3',
                                            "id": 7,
                                            "children": null
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": 'Etobicoke',
                            "id": 8,
                            "children": [
                                {
                                    "name": 'Store 3',
                                    "id": 9,
                                    "children": null
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": 'Quebec',
                    "id": 10,
                    "children": [
                        {
                            "name": 'Montreal',
                            "id": 11,
                            "children": [
                                {
                                    "name": 'Store 4',
                                    "id": 12,
                                    "children": null
                                },
                                {
                                    "name": 'Store 5',
                                    "id": 13,
                                    "children": null
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": 'USA',
            "children": [
                {
                    "name": "Illinois",
                    "children": [
                        {
                            "name": "Chicago",
                            "children": [
                                { 
                                    "name": 'Store 6',
                                    children: null 
                                },
                                { 
                                    "name": 'Store 7',
                                    children: null
                                },
                            ]
                        }
                    ]
                }
            ]
        }
    ];


  return (
    <div className="App">
      <ul>
        <Dropdown locationGroups = { locationGroups } />
      </ul>
    </div>
  );
}

export default App;
