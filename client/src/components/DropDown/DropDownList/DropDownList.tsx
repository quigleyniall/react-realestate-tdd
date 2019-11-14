import React from 'react';

const DropDownList = ({
  display,
  data,
  click
}: {
  display: boolean;
  data: any;
  click: any;
}) => (
  <ul className="list-group">
    {data.map(type => (
      <li key={type} onClick={() => click(type)} className="list-group-item">
        {type}
      </li>
    ))}
  </ul>
);

export default DropDownList;
