import React from "react";

const Team = (props) => {
  return (
    <>
      <div className="team_main m-5">
        <div className="col-md-4 mb-5 col-12 mx-auto">
          <div className="card ">
            <div className="card-img">
              <img
                className="card-img-top overflow-hidden"
                src="https://img.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg?size=338&ext=jpg"
                alt="Card cap"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title font-weight-bold">
                We are the team of senior developers
              </h5>
              <p className="card-text">DURGA PRASAD</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-10 mx-auto">
          <div className="card  ">
            <div className="card-img">
              <img
                className="card-img-top overflow-hidden"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShfAkt-YyhLLslLZuhPTLihE8o0sQuccbb1A&usqp=CAU"
                alt="Card cap"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title font-weight-bold">
                We are the team of senior developers
              </h5>
              <p className="card-text">ISHU MEHRA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
