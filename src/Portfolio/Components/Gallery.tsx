import * as React from 'react';

export interface IAppProps {
}

export default class Gallery extends React.Component<IAppProps> {
  public render() {
    return (
        <div className="portfolio-wrap mfp-gallery no-col-gap clearfix">
            <div className="container-fluid">
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        </div>
    );
  }
}
