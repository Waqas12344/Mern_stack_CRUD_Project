import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000");
      const result = await response.json();

      if (!response.ok) {
        setError(result.error);
      } else {
        setData(result);
      }
    } catch (err) {
      setError("An error occurred while fetching data.");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete=async(id)=>{
    const response = await fetch(`http://localhost:5000/${id}`,{
      method:"DELETE",
    });
    const result= response.json();
    if(!response.ok){
      setError(result.error)
    }
    if(response.ok){
      setError("Delete Successfully");

      setTimeout(()=>{
        setError("");
        getData();
      },2000)
    }
  }
  return (
    <div className='container my-2'>
          {error && <div class="alert alert-danger" >
  {error}
</div>}
      <h2 className='text-center'>All Data</h2>

      <div className="row">
        {data.length > 0 ? (
          data.map((i) => (
            <div key={i._id} className="col-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{i.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{i.email}</h6>
                  <h6 className="card-text">{i.age}</h6>
                  <a href="#" className="card-link" onClick={()=>handleDelete(i._id)}>Delete</a>
                  <Link to={`/${i._id}`} className="card-link">Edit</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>

      {/* {error && <p className="text-danger">{error}</p>} */}
    </div>
  );
};

export default Read;
