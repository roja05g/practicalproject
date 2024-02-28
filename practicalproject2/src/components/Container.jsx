import React, { useState } from "react";
import ImageCards from "./ImageCards";
import ImgComponents from './ImageComponents';


function Container({search}) {
  const [object, setObject] = useState({});

  function getObject(params) {
    setObject(params);

  }

  return (
    <div className="container-fluid " style={{ height: "88vh" }}>
      <div className="row">
        <div className="col-4">
          <ImgComponents data={getObject} search={search}/>
        </div>
        <div className="col-8 imgbody">
        {
          Object.keys(object).length===0?"":<ImageCards object={object}/>
        }
        </div>
      </div>
    </div>
  );
}

export default Container;