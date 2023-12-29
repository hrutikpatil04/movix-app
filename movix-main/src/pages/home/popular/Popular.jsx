import React, { useState } from 'react'
import Carousel from '../../../components/carousel/Carousel';

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import UseFetch from '../../../hooks/UseFetch'


const Popular = () => {
  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading } = UseFetch(`/${endPoint}/popular`);

  if (loading || data === null) {
    return <div>Loading...</div>;
  }

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  }

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className="carouselTitle"> What's Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel 
      data={data?.results}
      loading={loading}
      endPoint={endPoint}/>
    </div>
  )
}

export default Popular
