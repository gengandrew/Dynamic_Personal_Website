import React, { Component } from "react";
import {
  Modal,
  ModalBody,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import Dog1 from "../images/Dog1.jpg"
import Dog2 from "../images/Dog2.jpg"
import Dog3 from "../images/Dog3.jpg"
import Dog4 from "../images/Dog4.jpg"
import Dog5 from "../images/Dog5.jpg"

class DogModal extends Component {
  state = {
    modal: false,
    activeIndex: 0,
    items: [
        {
            src: Dog1,
            altText: "Picture 1",
            caption: ""
        },
        {
            src: Dog2,
            altText: "Picture 2",
            caption: ""
        },
        {
            src: Dog3,
            altText: "Picture 3",
            caption: ""
        },
        {
            src: Dog4,
            altText: "Picture 3",
            caption: ""
        },
        {
            src: Dog5,
            altText: "Picture 3",
            caption: ""
        }
    ]
  };

  onExiting = () => {
      this.animating = true;
  }

  onExited = () => {
      this.animating = false;
  }

  next = () => {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex});
  };

  previous = () => {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex});
  }

  goToIndex = (newIndex) => {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.toggle();
  };

  render() {
    const slides = this.state.items.map((item) => {
        return (
            <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
                <img src={ item.src } alt={ item.altText } style={{width: "100%", height: "auto"}} />
                <CarouselCaption captionText={ item.caption } captionHeader={ item.caption } />
            </CarouselItem>
        );
    });
    return (
      <React.Fragment>
        <a className="underLine" onClick={this.toggle}>
          {this.props.text}
        </a>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
          <ModalBody >
              <Carousel activeIndex={this.state.activeIndex} next={this.next} previous={this.previous}>
                <CarouselIndicators items={this.state.items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
              </Carousel>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
    item: state.item
  });

export default DogModal;
