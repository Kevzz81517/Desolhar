import './App.css';
import React from 'react';
import ReactFlow from "react-flow-renderer";


const elements = [
    {
        id: '1',
        type: 'input', // input node
        data: {label: 'Death'},
        position: {x: 250, y: 25},
    },
    {
        id: '2',
        data: {label: 'Optimistic'},
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
        type: 'output', // output node
        data: {label: 'It makes life precious It makes life precious It makes life preciousIt makes life preciousIt makes life preciousIt makes life precious'},
        position: {x: 100, y: 250},
    },
    {
        id: '6',
        type: 'output', // output node
        data: {label: 'Death is rest'},
        position: {x: 100, y: 375},
    },
    // animated edge
    {id: 'e1-2', source: '1', target: '2', animated: true},
    {id: 'e1-3', source: '1', target: '3', animated: true},
    {id: 'e1-4', source: '1', target: '4', animated: true},
    {id: 'e2-5', source: '2', target: '5'},
    {id: 'e2-6', source: '2', target: '6'},
];


const flowData = {
    nodes: [
        {
            id: '0',
            label: 'Node',
            x: 55,
            y: 55,
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

function App() {
    let detail = "abc"

    return (
        <div>
            <div style={{height: 500}}>
                <ReactFlow
                    elements={elements}
                    // snapToGrid={true}
                    onElementClick={(event, element) => {
                        console.log(element)
                        detail = element.data.label;
                    }}
                />
            </div>
            <div id={"detail"}>
                Detail {detail}
                <br/>
                Books
                <br/>
                Author
                <br/>
                Year
                <br/>
                Tags
            </div>
        </div>
    );
}

export default App;
