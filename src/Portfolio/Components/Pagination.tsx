import * as React from 'react';

export interface IAppProps {
}

function Pagination() {

    return <div className="filter-wrap p-a15">
    <ul className="masonry-filter link-style  text-uppercase">
            <li className="active"><a data-filter="*" href="#">All</a></li>
            <li><a data-filter=".cat-1" href="#">Spa</a></li>
            <li><a data-filter=".cat-2" href="#">Hair Makeup</a></li>
            <li><a data-filter=".cat-3" href="#">Waxing</a></li>
            <li><a data-filter=".cat-4" href="#">Facial</a></li>
            <li><a data-filter=".cat-5" href="#">Massage</a></li>
    </ul>
</div>
}
export default Pagination