import React, { useEffect, useState }  from 'react'
import API from "../controllers/api"
import { Tweet } from '../components/';
import { useParams } from "react-router-dom";

const Tweets = () => {
    let [tweetsData, setTweetsData] = useState([]);
    let [artistData, setArtistData] = useState<any>([]);
    let [refreshData, setRefreshData] = useState(false);
    let [loading, setLoading] = useState(false);
    let headers = { "Content-Type": "application/json" };
    const { userId } = useParams<any>();
    const fetchtweets = async () => {
        try {
          const config = { headers };
          const res = await API.get(`/comments?_limit=10`, config);
          setTweetsData(res.data);
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
      
// const deletetweet = async(id: number) =>{
//     try {
//         const config = { headers };
//         setLoading(false);
//         await API.delete(`/comments/${id}`, config);
//         setRefreshData(!refreshData);
//         setLoading(true);
//         return;
//       } catch (err) {
//         console.log(err);
//         return false;
//       }
// }

      useEffect(() => {
        fetchtweets();
        fetchartist();
      }, [refreshData]);
    
    return (
      <div className="container-fluid mt-4">
      <div className="px-2">
        <div className="text-center">
          <h3>
            {artistData?.name} Tweets
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
          <div className="row row-cols-1  align-items-stretch py-4 px-3 px-xxl-5 g-0">   
          {loading &&
                  tweetsData &&
                  tweetsData.length >= 1 &&
                  tweetsData.map((comment : any, index) => (
                    <div className="col" key={index}>
                    <Tweet comment={comment} />
                    </div>
                  ))}
              </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Tweets
