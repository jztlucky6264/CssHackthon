import React, { useState } from "react";
import Swing from "react-reveal/Swing";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PlaceholderLoading from "react-placeholder-loading";

const Card = (props) => {
  const [load, setLoad] = useState(false);
  const StuffLoad = () => {
    setTimeout(() => {
      setLoad(true);
    }, 2000);
  };

  return (
    <>
      <SkeletonTheme>
        <Swing>
          <div className="  col-md-4 col-10 mx-auto">
            <div className="card">
              <div className="card-img">
                {!load && (
                  <PlaceholderLoading shape="rect" width={1000} height={200} />
                )}
                <img
                  className="card-img-top overflow-hidden"
                  src={props.imgsrc}
                  alt="Hack_img"
                  onLoad={StuffLoad}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title font-weight-bold">
                  {props.title || <Skeleton />}
                </h5>
                <p className="card-text">
                  <Skeleton>we are provide you awesome hackthons</Skeleton>
                </p>

                <a href={props.link} className="btn btn_Register btn-primary">
                  Registar Now
                </a>
              </div>
            </div>
          </div>
        </Swing>
      </SkeletonTheme>
    </>
  );
};

export default Card;
