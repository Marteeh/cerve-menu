import React from "react"
import { Row, Col, Typography, Collapse } from "antd"
import MenuElement from "./MenuElement"

const { Title } = Typography;
const { Panel } = Collapse;

const Category = ({category}) => {
  const rows = category.map((value, index, array) => {
    return (
      <React.Fragment >
        <Collapse 
          style={{marginBottom: "1rem"}} 
          defaultActiveKey={['1']}
          showArrow={false}
          ghost
        >
          <Panel 
            header={
              <Title style={{marginTop: "5px"}} level={3}>
                {value.name}
              </Title>
            }
          >
            <Row justify="center">
              <Col>
                <MenuElement elements={value.elements}/>
              </Col>
            </Row>
          </Panel>
        </Collapse>
      </React.Fragment>
    )
  })
  return rows
}

export default Category
