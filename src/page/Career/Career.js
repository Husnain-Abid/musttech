import React from 'react'
import Layout from '../../component/Layout/Layout'
import ASSET_PATHS from '../../constant'
import './Career.css';
import { useNavigate } from 'react-router-dom';

export default function Career() {

  const iconRoute = ASSET_PATHS.ICON_URL

  const navigate = useNavigate();

  const handleNav = (slug) => {
    navigate(`/job/${slug}`);
    // window.open(`/service-detail/${id}`, '_blank');
  }

  const Jobs = [
    { id:1, title: "full stack developer", location: "LAHORE,PAKISTAN", slug: "fullstack-developer" },
    { id:2, title: "frontend developer", location: "LAHORE,PAKISTAN", slug: "frontend-developer" },
    { id:3, title: "sale agent", location: "LAHORE,PAKISTAN", slug: "sale-agent" },
  ]



  return (
    <>
      <Layout>
        <div className='career'>
          <div className='career-hero'>
            <div className='content'>
              <h2>
                Whatever you
                decide to do,
                make sure it
                makes you happy.
              </h2>
            </div>
            <div className='career_img'>
              <img src={`${iconRoute}/career_img.svg`} alt='career_img' />
            </div>

          </div>

          <div className='career-job'>

            <h3>job opportunities </h3>

            {Jobs.map((e) => {
              
              return (
                <>
                  <div className='job' key={e.id}>

                    <div className='title'>
                      <h4>{e.title}</h4>
                      <span>{e.location}</span>
                    </div>

                    <div className='view-detail'>
                      <button onClick={()=>handleNav(e.slug)}>View Details</button>
                    </div>

                  </div>
                </>

              )

            })}



          </div>


        </div>
      </Layout>
    </>
  )
}
