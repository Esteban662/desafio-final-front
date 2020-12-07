import React from 'react';

export default class ShowSerie extends React.Component {
    render() {
        return (
            <div>
                {this.props.series !== null ? <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.props.series.image.medium} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.series.name}</h5>
                            <p className="card-text">{this.props.series.summary}</p>
                            <a href={this.props.series.officialSite}>{ this.props.series.officialSite}</a>
                        </div>
                    </div>
                </div>
            </div>:<span></span>}
            
            </div>
        )
    }
}