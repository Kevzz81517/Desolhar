import './App.css';
import React, { useEffect, useState } from 'react';
import ReactFlow, { useStoreState, ReactFlowProvider } from "react-flow-renderer";
import { topics } from './data';
import { Card, Drawer, Menu, Row, Spin } from 'antd';
import Text from 'antd/lib/typography/Text';
import { Link, useParams } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';



function MindMap(props) {

  const [mapData, setMapData] = useState(undefined);

  const [selectedDataNode, setSelectedDataNode] = useState(undefined);

  let { topicUrlKey } = useParams();

  useEffect(() => {

    const getGraphElements = (parent, graphElements, edges) => {
    
      if(parent.data.data) {
        for(let i = 0; i < parent.data.data.length; i++) {
          let currentElement = {...parent.data.data[i],id: graphElements.length + 1};
          graphElements.push(currentElement);
          edges.push({id: `e${parent.id}-${currentElement.id}`, source: parent.id, target: currentElement.id})
          graphElements = getGraphElements(currentElement,graphElements,edges);
        }
      }

      return graphElements;
    } 
    
    const topic  = topics.find(topic => topic.urlKey === topicUrlKey);

    const parent = {...topic,id: 1};

    let edges = [];

    let graphElements = [...getGraphElements(parent, [parent], edges), ...edges];

    var dagre = require("dagre");

    let g = new dagre.graphlib.Graph({
      directed: true,
      multigraph: true,
      compound: true,
      ranker: "longest-path",
      rankdir: "TB",
    });

    g.setGraph({
      directed: true,
      multigraph: true,
      compound: true,
      ranker: "longest-path",
      rankdir: "TB",
    });

    g.setDefaultEdgeLabel(function() { return {}; });

    graphElements.filter(element => element.data).forEach(element=> {
      g.setNode(
        element.id, 
        {
          label: element.data.label,
          width: 150,
          height: 200
        }
      );
    });

    graphElements.filter(element => !element.data).forEach(element=> {
      g.setEdge(
        element.source, 
        element.target
      );
    });

    dagre.layout(g);

    g.nodes().forEach((n,index) => {
      graphElements[parseInt(n) - 1] ={
        ...graphElements[parseInt(n) - 1],
        style: {
          width: 150,
        },
        position: {
          x: g.node(n).x - g.node(n).width  / 2,
          y: g.node(n).y -  g.node(n).height  / 2,
        }
      }
    })
        
    setMapData(graphElements);

    
  },[topicUrlKey]);


    const onLoad = (graph) => {
      setTimeout(() => graph.fitView())
    };

    return (
        <Row style={{height: window.innerHeight, width: window.innerWidth, overflow: 'auto'}}>
        <Menu 
          mode='horizontal'
          selectedKeys={[topicUrlKey]}
        >
          { 
            topics.map(topic => {
              return (  
                <Menu.Item key={topic.urlKey}>
                  <Link to={`/topics/${topic.urlKey}/mindmap`}>{topic.displayName}</Link>
                </Menu.Item>
              );
            })
          }
        </Menu>
        { 
          mapData ? (
            <>
            
            <Row style={{height: window.innerHeight - 50, width: window.innerWidth, overflowX: 'auto'}} align='bottom'>
            <ReactFlow
                minZoom={0}
                maxZoom={5}
                elements={mapData}
                onElementClick={(event, element) => {
                  if(element && element.data && element.data.level === 6) {
                    if(!selectedDataNode || selectedDataNode.id !== element.id) {
                        setMapData(mapData.map(mapDataElement => {
                            return (
                                mapDataElement.id == element.id ? 
                                {...mapDataElement, type: 'output'} : 
                                {...mapDataElement, type: 'default'}
                            )
                        }));
                        setSelectedDataNode(element);
                    } else {
                        setMapData(mapData.map(mapDataElement => {
                            return ({...mapDataElement, type: 'default'})
                        }));
                        setSelectedDataNode(undefined);
                    }
                  }
                }}
                nodeTypes={
                  {
                    'default': (element) => { 
                      return (
                        element.data.level === 6 ? (
                          <div style={{ maxHeight: 200, overflowY: 'auto', border: '1px black solid', backgroundColor: '#f0f0f0', cursor: 'pointer'}}>
                            {<Text>{element.data.label}</Text>}
                          </div>
                        ) : (
                          <div style={{ maxHeight: 200, overflowY: 'auto'}}>
                            {<Title level={element.data.level}>{element.data.label}</Title>}
                          </div>
                        ))
                      },
                      'output': (element) => { 
                        return (
                          <div style={{ maxHeight: 200, overflowY: 'auto', border: '1px black solid', backgroundColor: '#f0f0f0', cursor: 'pointer'}}>
                            {<Text>{element.data.label}</Text>}
                          </div>
                        )
                      },
                  }
                }
                paneMoveable={true}
                snapToGrid={true}
                snapGrid={[8,24]}
                draggable={false}
                onLoad={onLoad}
                zoomOnScroll={true}
                zoomOnDoubleClick={true}
                contentEditable={false}
                nodesDraggable={false}
            />
            </Row>
            {
                selectedDataNode ? (
                    <Drawer 
                        visible={selectedDataNode}
                        mask={false}
                        destroyOnClose
                        placement='right'
                        onClose={() => {
                                setMapData(mapData.map(mapDataElement => {
                                    return ({...mapDataElement, type: 'default'})
                                }));
                                setSelectedDataNode(undefined);
                            
                        }}
                    >
                        <div
                          style={{paddingTop: 15}}
                        >
                          <hr />
                          <Card title='Detail' bordered={false}>
                            <Text>{selectedDataNode.data.label}</Text>
                          </Card>
                          <hr />
                          <Card title='Author' bordered={false}>
                            <Text>Henry O.</Text>
                          </Card>
                          <hr />
                          <Card title='Year' bordered={false}>
                            <Text>1999</Text>
                          </Card>
                          <hr />
                          <Card title='Books' bordered={false}>
                            <Text>Death, Life, Satisfaction</Text>
                          </Card>
                          <hr />
                        </div>
                    </Drawer>
                ): null
            }
            </>
          ): (
            <Row justify='center' align='middle' style={{height: window.innerHeight}}><Spin size='large' /></Row>
          )
        }
        </Row>   
    );
}

export default  MindMap;