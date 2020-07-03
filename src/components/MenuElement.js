import React from 'react'
import { Row, Col, Typography } from 'antd'

const { Title, Paragraph } = Typography

function MenuElement({elements}){
    const rows = elements.map((element, index, array) => {
      return (
        <React.Fragment>
          <Typography>
            <Row justify="space-between">
              <Col>
                <Title level={4}>{element.name}</Title>
              </Col>
              <Col flex="left">
                <Title level={4}>${element.cost}</Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <Paragraph> {element.description}</Paragraph>
              </Col>
            </Row>
          </Typography>
        </React.Fragment>
      )
    })
    return rows
}

export default MenuElement;