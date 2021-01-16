
export const topics = [
   {
    displayName : "On Choices",
    urlKey: "choices",
    data: { data: [] },
   },
   {
    enabled: true,
    displayName : "Death",
    urlKey: "death",
    data: { 
        label: 'Death', level: 2,
        data: [
            {
                id: '2',
                data: {
                    label: 'Optimistic', level: 5,
                    data: [
                        {
                            data: {
                                label: "It makes life precious",
                                level: 5,
                                data: [
                                    {
                                        data: {
                                            label: ' It is no hardship to be a slave, if, when a man can no longer bear his master’s yoke, he may with a single step pass to freedom. Life is thanks to death that you are precious in my eyes. (Death brings freedom from pain, death also enlightens the value of life)',
                                            level: 6
                                        },
                                        
                                    },
                                ]
                            },
                        },
                        {
                            data: {
                                label: 'Death is rest', 
                                level: 5,
                                data: [
                                    {
                                        data: {
                                            label: 'Death frees a man from slavery through his masks is unwilling: it makes light the choice of a prisoner; it leads out of prison those forbidden to leave by a tyrant’s power: it shows exile; whose eyes and minds turn away to their homeland, that it does not matter beneath whose soil a man may lie.',
                                            level: 6
                                        },
                                        
                                    },
                                    {
                                        data: {
                                            label: 'Finally, he has come to rest in a place where nothing can drive him away, where nothing can make him afraid. (The afterlife)',
                                            level: 6
                                        },
                                        
                                    },
                                    {
                                        data: {
                                            label: 'Death is a realize from all pains and a boundary beyond which our suffering cannot go: it returns us to the state of peacefulness in which we lay before we were born.',
                                            level: 6,
                                            type: 'output'
                                        },
                                        
                                    },
                                ]
                            },
                        },
                        {
                            data: {
                                label: "Death is the best option",
                                level: 5
                            },
                        },
                        {
                            data: {
                                label: "Death can be a choice",
                                level: 5
                            },
                        },
                        {
                            data: {
                                label: "The fortune of death",
                                level: 5
                            },
                        },
                        {
                            data: {
                                label: "The length of life is perfect",
                                level: 5
                            },
                        },
                    ]
                },
            },
            {
                data: {
                    label: 'Neutral', level: 5,
                    data: [
                        {
                            data: {
                                label: "Equality of Death",
                                level: 5,
                            },
                        },
                        {
                            data: {
                                label: "The neutrality of death",
                                level: 5
                            },
                        },
                        {
                            data: {
                                label: "It’s Natural",
                                level: 5
                            },
                        },
                    ]
                },
            },
            {
                data: {
                    label: 'Pessimistic', level: 5,
                    data: [
                        {
                            data: {
                                label: "The forgetfulness of death",
                                level: 5,
                                data: [
                                    {
                                        data: {
                                            label: 'All is ephemeral. both that which remembers and that which is. ',
                                            level: 6
                                        },
                                        
                                    },
                                    {
                                        data: {
                                            label: 'This fleeting existence is the common lot of all things, and yet you pursue and flee each thing as though it will last forever. A little while and you will close your eyes: and he who carried you to your grave will soon be lamented by another',
                                            level: 6
                                        },
                                        
                                    },
                                    {
                                        data: {
                                            label: 'What has become of all that (Fame, achievements, etc..)? Smoke and ashes and merely a tale, or not even so much as a tale.',
                                            level: 6
                                        },
                                        
                                    }
                                ]
                            },
                        },
                        {
                            data: {
                                label: "Fear of death",
                                level: 5
                            },
                        },
                        {
                            data: {
                                label: "It is no hardship to be a slave, if, when a man can no longer bear his master’s yoke, he may with a single step pass to freedom. Life is thanks to death that you are precious in my eyes. (Death brings freedom from pain, death also enlightens the value of life)",
                                level: 6
                            }
                        },
                        {
                            data: {
                                label: "It is no hardship to be a slave, if, when a man can no longer bear his master’s yoke, he may with a single step pass to freedom. Life is thanks to death that you are precious in my eyes. (Death brings freedom from pain, death also enlightens the value of life)",
                                level: 6
                            }
                        },
                    ]
                },
            },
        ]
    },
   },
   {
    key: "3",
    displayName : "On Humans",
    urlKey: "humans",
    data: { data: [] },
   },
   {
    key: "4",
    displayName : "On Time",
    urlKey: "time",
    data: { data: [] },
   },
   {
    key: "5",
    displayName : "On Mind",
    urlKey: "mind",
    data: { data: [] },
   },
]

export const elements = [
  {
      id: '1',
      data: {label: 'Death'},
      position: {x: 250, y: 25},
  },
  {
      id: '2',
      data: {label: 'Opic'},
      position: {x: 100, y: 125},
  },
  {
      id: '3',
      data: {label: 'Neutral'},
      position: {x: 400, y: 125},
  },
  {
      id: '4',
      data: {label: 'Pessimistic'},
      position: {x: 700, y: 125},
  },
  {
      id: '5',
      data: {label: 'It makes life precious'},
      position: {x: 40, y: 250},
  },
  {
      id: '6',
      data: {label: 'Death is rest'},
      position: {x: 200, y: 250},
  },
  {id: 'e1-2', source: '1', target: '2'},
  {id: 'e1-3', source: '1', target: '3'},
  {id: 'e1-4', source: '1', target: '4'},
  {id: 'e2-5', source: '2', target: '5'},
  {id: 'e2-6', source: '2', target: '6'},
];

export const flowData = {
  nodes: [
      {
          id: '0',
          label: 'Node',
          x: 55,
          y: 55,
          contentEditable: false,
      },
      {
          id: '1',
          label: 'Node',
          x: 55,
          y: 255,
      },
  ],
  edges: [
      {
          label: 'Label',
          source: '0',
          target: '1',
      },
  ],
};

const mindData = {
  label: 'Central Topic',
  children: [
      {
          label: 'Main Topic 1',
      },
      {
          label: 'Main Topic 2',
      },
      {
          label: 'Main Topic 3',
      },
  ],
};