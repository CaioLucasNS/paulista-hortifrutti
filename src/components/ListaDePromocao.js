import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import abacaxiImg from "../../../src/assets/abacaxi.jpg";
import laranjaImg from "../../../src/assets/laranja.png";
import goiabaImg from "../../../src/assets/goiaba.png";
import macaImg from "../../../src/assets/maca.jpg";
import maracujaImg from "../../../src/assets/maracuja.jpg";
import Carrinho from "./Carrinho";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
    };
    return (
      <div>
        <h2> Frutas </h2>
        <Slider {...settings}>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={abacaxiImg} />
              <Card.Body>
                <Card.Title>Abacaxi</Card.Title>
                <Card.Text>R$ 12,00/kg</Card.Text>
                <Carrinho />
                <Button variant="primary">Adicionar a sacola</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={laranjaImg} />
              <Card.Body>
                <Card.Title>Laranja</Card.Title>
                <Card.Text>R$ 5,00/kg</Card.Text>
                <Button variant="primary">Adicionar a sacola</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={goiabaImg} />
              <Card.Body>
                <Card.Title>Goiaba</Card.Title>
                <Card.Text>R$ 5,00/kg</Card.Text>
                <Button variant="primary">Adicionar a sacola</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={macaImg} />
              <Card.Body>
                <Card.Title>Maçã</Card.Title>
                <Card.Text>R$ 5,00/kg</Card.Text>
                <Button variant="primary">Adicionar a sacola</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={maracujaImg} />
              <Card.Body>
                <Card.Title>Maracujá</Card.Title>
                <Card.Text>R$ 5,00/kg</Card.Text>
                <Button variant="primary">Adicionar a sacola</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={abacaxiImg} />
              <Card.Body>
                <Card.Title>Abacaxi</Card.Title>
                <Card.Text>Aproximadamente 1kg</Card.Text>
                <Button variant="primary">Adicionar a sacola</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={abacaxiImg} />
              <Card.Body>
                <Card.Title>Abacaxi</Card.Title>
                <Card.Text>Aproximadamente 1kg</Card.Text>
                <Button variant="primary">Adicionar a sacola</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={abacaxiImg} />
              <Card.Body>
                <Card.Title>Abacaxi</Card.Title>
                <Card.Text>Aproximadamente 1kg</Card.Text>
                <Button variant="primary">Adicionar a sacola</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={abacaxiImg} />
              <Card.Body>
                <Card.Title>Abacaxi</Card.Title>
                <Card.Text>Aproximadamente 1kg</Card.Text>
                <Button variant="primary">Adicionar a sacola</Button>
              </Card.Body>
            </Card>
          </div>
        </Slider>
      </div>
    );
  }
}
