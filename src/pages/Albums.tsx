import React, { useEffect, useState }  from 'react'
import API from "../controllers/api"
import { Album } from '../components/';
import { useParams } from "react-router-dom";

const Albums = () => {
    let [albumsData, setAlbumsData] = useState([]);
    let [artistData, setArtistData] = useState<any>([]);
    let [refreshData, setRefreshData] = useState(false);
    let [loading, setLoading] = useState(false);
    let headers = { "Content-Type": "application/json" };
    const { userId } = useParams<any>();
    const fetchalbums = async () => {
        try {
          const config = { headers };
          const res = await API.get(`/albums?userId=${userId}`, config);
          setAlbumsData(res.data);
          console.log(res.data)
          setLoading(true);
          return;
        } catch (err) {
          console.log(err);
          return false;
        }
      };
    const fetchartist = async () => {
        try {
          const config = { headers };
          const res = await API.get(`/users/${userId}`, config);
          setArtistData(res.data);
          console.log(res.data)
          setLoading(true);
          return;
        } catch (err) {
          console.log(err);
          return false;
        }
      };
      useEffect(() => {
        fetchalbums();
        fetchartist();
      }, [refreshData]);
    
    return (
      <div className="container-fluid mt-4">
      <div className="px-2">
        <div className="text-center">
          <h3>
            {artistData?.name} Albums
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
                  albumsData &&
                  albumsData.length >= 1 &&
                  albumsData.map((artist : any, index) => (
                    <div className="col" key={index}>
                    <Album name={artist.title}  albumId={artist.id} userId={userId} />
                    </div>
                  ))}
              </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Albums
