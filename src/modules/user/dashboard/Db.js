import React from 'react';
function Db() {
  return (
    <div className="container-fluid">
      <div className="row shadow-lg p-3 mb-5 bg-body rounded">
        <div className="col-md-4">
          <div 
            className="card text-white" 
            style={{
              width: "280px",
              background: "linear-gradient(135deg, #1a2a6c, #16222a)", 
              boxShadow: "0 8px 20px rgba(0,0,0,0.6)"
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Earning</h5>
              <p className="card-text h1">
                $628
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div 
            className="card text-dark" 
            style={{
              width: "280px", 
              boxShadow: "0 8px 20px rgba(0,0,0,0.6)"
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Shares</h5>
              <p className="card-text h1">
                2434
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div 
            className="card text-warning" 
            style={{
              width: "280px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.6)"
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Like</h5>
              <p className="card-text h1">
                1259
              </p>
            </div>
          </div>
        </div>
             <div className="col-md-8">
          <div 
            className="card text-dark mt-5" 
            style={{
              
              height: "500px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.6)"
            }}
          >
            <div className="card-body">
             
            </div>
          </div>
        </div>
             <div className="col-md-4">
          <div 
            className="card text-light mt-5 " 
            style={{
              width: "300px",
              height: "500px",
               background: "linear-gradient(135deg, #1a2a6c, #16222a)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.6)"
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Like</h5>
              <p className="card-text h1">
                1259
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Db;
