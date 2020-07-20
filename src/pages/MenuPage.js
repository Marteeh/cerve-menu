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
        name: "TAPA DE JAMON SERRANO CON ACEITUNAS",
        cost: 70,
        description:
          "Jamón serrano, pan, aceitunas y ajo",
      },
      {
        key: 1,
        name: "CARPACCIO DE RES",
        cost: 70,
        description:
          "Petalos de filete de res, macerado con aceite de oliva, vinagre balsámico y jugo de limón",
      },
      {
        key: 2,
        name: "NOPAL PORTOBELLO",
        cost: 70,
        description:
          "Portobello relleno de pimientos, gratinado con queso cheddar, nopal asado con queso panela, aceite de oliva y oregano",
      },
    ]
  },
  {
    key: 1,
    name: "ENSALADAS",
    elements: [
      {
        key: 0,
        name: "ESTILO CAPRESE TIBIA",
        cost: 50,
        description:
          "Queso panela, jitomate cherry, albahaca, orégano y aceite de oliva",
      },
      {
        key: 1,
        name: "MANZANA ENCANELADA",
        cost: 60,
        description:
          "Lechugas mixtas, manzana, nuez encanelada, queso de cabra con aderezo balsámico",
      },
      {
        key: 2,
        name: "GRIEGA",
        cost: 55,
        description:
          "Espinacas, cebolla morada, pepino, aceitunas, tomate, pimientos y aceite de oliva",
      }
    ]
  },
  {
    key: 2,
    name: "PASTAS",
    elements: [
      {
        key: 0,
        name: "CARBONARA",
        cost: 75,
        description:
          "Espaguetti, tocino, ajo, cebolla, crema y mantequilla",
      },
      {
        key: 1,
        name: "POMODORO CON CAMARON",
        cost: 80,
        description:
          "Espaguetti, salsa italiana, albahaca, orégano y camarón",
      },
      {
        key: 2,
        name: "ALFREDO CON TOMATE Y POLLO",
        cost: 75,
        description:
          "Espaguetti, crema, ajo, cebolla, mantequilla, tomate deshidratado y pollo",
      },
    ]
  },
  {
    key: 3,
    name: "PIZZAS",
    elements: [
      {
        key: 0,
        name: "CORAZONES DE ALCACHOFA & CAMARONES",
        cost: 75,
        description:
          "Salsa italiana, corazón de alcachofa, camarón y queso",
      },
      {
        key: 1,
        name: "JAMON SERRANO",
        cost: 80,
        description:
          "Salsa italiana, jamón serrano, champiñones y queso",
      },
      {
        key: 2,
        name: "MEDITERRANEA",
        cost: 75,
        description:
          "Salsa italiana, pimientos, aceitunas, tomates deshidratados y queso",
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
        <Row justify="left">
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
