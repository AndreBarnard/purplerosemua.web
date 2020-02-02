import  React, { Component }  from 'react';

export interface IAppProps {
}

interface PopupImage {
    img: string
}

export default class ImagePopUpModel extends Component<PopupImage, {} > {
    state = { isOpen: false };
  
    handleShowDialog = () => {
      this.setState({ isOpen: !this.state.isOpen });
      console.log('cliked');
    };
  
    render() {
      return (
        <div>
          <img
            className="small"
            src={this.props.img}
            onClick={this.handleShowDialog}
            alt=""
          />
          {this.state.isOpen && (
            <dialog
              className="pr-dialog"
              style={{ position: 'absolute' }}
              open
              onClick={this.handleShowDialog}
            >
            <figure>
              <img
                className="pr-image"
                src={this.props.img}
                onClick={this.handleShowDialog}
                alt=""
              />
              </figure>
            </dialog>
          )}
        </div>
      );
    }
  }