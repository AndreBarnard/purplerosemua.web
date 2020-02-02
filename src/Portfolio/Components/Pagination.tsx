import * as React from 'react';

export interface IAppProps {
}

function Pagination(props : 
    {cat1Heading : string,
    cat2Heading: string,
    cat3Heading: string,
    cat4Heading : string,
    cat5Heading : string}) {

    return <div className="filter-wrap p-a15">
    <ul className="masonry-filter link-style  text-uppercase">
            <li className="active"><a data-filter="*" href="#">All</a></li>
            <li><a data-filter=".cat-1" href="#">{props.cat1Heading}</a></li>
            <li><a data-filter=".cat-2" href="#">{props.cat2Heading}</a></li>
            <li><a data-filter=".cat-3" href="#">{props.cat3Heading}</a></li>
            <li><a data-filter=".cat-4" href="#">{props.cat4Heading}</a></li>
            <li><a data-filter=".cat-5" href="#">{props.cat5Heading}</a></li>
    </ul>
</div>
}
export default Pagination