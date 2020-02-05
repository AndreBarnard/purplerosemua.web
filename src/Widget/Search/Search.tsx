import * as React from 'react';

export interface IProps {
}

function Search(props : IProps) {
    return <div className="widget bg-white ">
    <h4 className="widget-title">Search</h4>
    <div className="search-bx">
        <form role="search" method="post">
            <div className="input-group">
                <input name="news-letter" type="text" className="form-control" placeholder="Write your text" />
                <span className="input-group-btn">
                    <button type="submit" className="site-button"><i className="fa fa-search"></i></button>
                </span>
            </div>
        </form>
    </div>
</div>  
}

export default Search