import React, { useEffect, useState }  from 'react'
import API from "../controllers/api"
import { Artist } from '../components/';

const Artists = () => {
    let [artistsData, setArtistsData] = useState([]);
    let [refreshData, setRefreshData] = useState(false);
    let [loading, setLoading] = useState(false);
    let headers = { "Content-Type": "application/json" };
    const fetchartists = async () => {
        try {
          const config = { headers };
          const res = await API.get("/users", config);
          setArtistsData(res.data);
          console.log(res.data)
          setLoading(true);
          return;
        } catch (err) {
          console.log(err);
          return false;
        }
      };
      useEffect(() => {
        fetchartists();
      }, [refreshData]);
    
    return (
      <div className="container-fluid mt-4">
      <div className="px-2">
        <div className="text-center">
          <h3>
            Our Artists
          </h3>
        </div>
        <div className="mt-3">
          <div className="row  justify-content-end px-3 px-xxl-5">
          
            <div className="col-sm-2 col-3 col-lg-2">
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => {
                    setLoading(false);
                    setRefreshData(!refreshData);
                  }}
                  className="btn w-100 btn-success waves-effect waves-light mb-2"
                >
                  <span className="d-none d-md-inline-block">Refresh</span>

                  <i className="fas fa-sync px-1 mx-2" />
                </button>
              </div>
            </div>
            {/* end col*/}
          </div>
          <div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3  align-items-stretch py-4 px-3 px-xxl-5 g-5">   
          {loading &&
                  artistsData &&
                  artistsData.length >= 1 &&
                  artistsData.map((artist : any, index) => (
                    <div className="col" key={index}>
                    <Artist name={artist.name} email={artist.email} phone={artist.phone} userId={artist.id} />
                    </div>
                  ))}
              </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Artists
