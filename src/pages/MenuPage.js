import React from "react"
import { Row, Col, Typography, Layout, Space } from "antd"
import Category from "../components/Category"
import Beers from "../components/Beers"
import mainlogo from "../images/cerve-logo.png"
import mastercardlogo from "../images/mastercard-logo.png"
import visalogo from "../images/visa-logo.png"

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const beers = [
  {
    key: 0,
    name: "XX Lager",
    cost1: "Jarra $98",
    cost2: "Litro $98", 
  },
  {
    key: 0,
    name: "XX lager",
    cost1: "Jarra $98",
    cost2: "Litro $98", 
  },
  {
    key: 0,
    name: "XX lager",
    cost1: "Jarra $98",
    cost2: "Litro $98", 
  },
]

const categories = [
  {
    key: 0,
    name: "ENTRADAS",
    elements: [
      {
        key: 0,
        name: "Carpaccio de res",
        cost: 70,
        description:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      },
      {
        key: 1,
        name: "Carpaccio de res",
        cost: 70,
        description:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      },
      {
        key: 2,
        name: "Res",
        cost: 40,
        description:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      },
      {
        key: 3,
        name: "Tacos",
        cost: 50,
        description:
          "lorem ipsum lorem ipsum lorem ipsum ",
      },
    ]
  },
  {
    key: 1,
    name: "ENSALADAS",
    elements: [
      {
        key: 0,
        name: "Estilo Caprese Tibia",
        cost: 50,
        description:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      },
      {
        key: 1,
        name: "Manzana encanelada",
        cost: 60,
        description:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      },
    ]
  },
  {
    key: 1,
    name: "PASTAS",
    elements: [
      {
        key: 0,
        name: "Carbonara",
        cost: 75,
        description:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      },
      {
        key: 1,
        name: "Pomodoro con camaron",
        cost: 60,
        description:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      },
    ]
  },
]

const CerveMenu = ({title}) => {
  return (
    <Layout>
      <Header>
        <Row justify="space-between">
          <Col span={6}>
            <img src={mainlogo} alt="main logo" style={{height: "3rem"}}></img>
          </Col>
          <Col span={12}>
            <Title style = {{
              fontSize: "1.6rem", 
              fontFamily: "Notable", 
              textAlign:"center", 
              color: "white",
              marginTop: "1rem",
              }}
            >
              {title}
            </Title>
          </Col>
          <Col span={3}>
            <img src={mastercardlogo} alt="main logo" style={{height: "1rem"}}></img>
          </Col>  
          <Col span={3}>            
            <img src={visalogo} alt="main logo" style={{height: "1rem"}}></img>
          </Col>
        </Row>
      </Header>
      <Content>
        <Row justify="center">
          <Col style={{marginTop: "1rem"}} span={24}>
              <Category category={categories}/>
          </Col>
        </Row>
        <Row justify="space-around">
          <Beers beers={beers} />
        </Row>
      </Content>
      <Footer>
        footer
      </Footer>
    </Layout>
  )
}

export default CerveMenu
