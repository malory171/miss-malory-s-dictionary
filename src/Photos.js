import React from "react";

import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos">
        <section>
          <div className="row">
            {props.photos.photos.map(function (photos, index) {
              return (
                <div className="col-4" key={index}>
                  <a
                    href={photos.src.original}
                    target="-blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src={photos.src.landscape}
                      className="img-fluid"
                      alt={"Photographer:" + photos.photographer}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
