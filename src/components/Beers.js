import React from "react"
import { Col, Typography, Carousel } from "antd"

const { Title } = Typography

const Beers = ({beers}) => {
  const cols = beers.map((value, index, array) => {
    return (
      <Carousel>
        <Col>
          <Title level = {4}>{value.name}</Title>
          <Title level = {4} style={{fontWeight: 300}}>{value.cost1}</Title>
          <Title level = {4} style={{fontWeight: 300}}>{value.cost2}</Title> 
        </Col>
      </Carousel>
    )
  })
  return cols
}

export default Beers 