import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import Zoom from "react-reveal/Zoom";
import Spin from "react-reveal/Spin";
const Events = () => {
  return (
    <>
      <Zoom>
        <div className="  main_service  ">
          <div className="my-5">
            <Spin>
              <h1 className="text-center">Up Coming Events</h1>
            </Spin>
          </div>
          <div className="container-fluid mb-5  service_div">
            <div className="row">
              <div className="col-10 mx-auto ">
                <div className="row gy-4">
                  {Sdata.map((val, ind) => {
                    return (
                      <Card
                        imgsrc={val.imgsrc}
                        title={val.title}
                        link={val.link}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default Events;
