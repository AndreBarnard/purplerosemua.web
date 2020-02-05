import * as React from 'react';

export interface IProps {
}

function ServicePagination(props : IProps) {
    return <div className="pagination-bx clearfix ">
    <ul className="custom-pagination pagination">
       <li><a href="#">«</a></li>
       <li className="active"><a href="#">1</a></li>
       <li><a href="#">2</a></li>
       <li><a href="#">3</a></li>
       <li><a href="#">4</a></li>
       <li><a href="#">5</a></li>
       <li><a href="#">»</a></li>
    </ul>
</div>
}

export default ServicePagination