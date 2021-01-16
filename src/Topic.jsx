import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import './App.css';
import { topics } from './data';

function Topic() {

    return (
        <Row justify='center' align='middle' style={{height: window.innerHeight}}>
            <Col style={{width: '100%'}}>
                {
                    topics.map(topic => {
                        return (
                            <Row style={{width: '100%'}} key={topic.urlKey}>
                                <Col style={{width: '100%'}}>
                                        <Link onClick={() => {}} to={topic.enabled ? `/topics/${topic.urlKey}/mindmap` : ''} style={{width: '100%'}}>
                                    <Row justify='center' align='middle'>
                                            <Card key={topic.urlKey} hoverable bordered style={
                                                topic.enabled ? 
                                                {marginTop: 10, marginBottom: 10, paddingTop: 0, paddingBottom: 0,  width: '20%', borderWidth: 2, borderColor: 'black', backgroundColor: '#cfcfcf'} : 
                                                {marginTop: 10, marginBottom: 10, paddingTop: 0, paddingBottom: 0,  width: '20%', borderWidth: 2, borderColor: 'black'}

                                            }>
                                                <Row justify='center' align='middle'>
                                                    <h3>
                                                        {topic.displayName}
                                                    </h3>
                                                </Row>  
                                            </Card>
                                    </Row>
                                        </Link>
                                    <Row justify='center' align='middle'>
                                        <hr style={{width: '22%'}} />
                                    </Row>
                                </Col>
                            </Row>
                        );
                    })
                }
            </Col>
        </Row>
    );
}

export default Topic;