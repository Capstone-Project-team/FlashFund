import React, { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import { Jumbotron } from "react-bootstrap"
import CampaignList from "../components/CampaignList"
import { useAuthContext } from "../../context"
import axios from "axios"

const baseUrl = "/api/campaigns/top"
//landing page
const Landing = () => {
  useEffect(() => {
    const topCampaigns = async () => {
      try {
        //send request to register user
        const response = await axios.get(baseUrl)
        console.log("response", response)
        setTop(response.data.reverse())
      } catch (err) {
        console.log(err)
      }
    }
    topCampaigns()
  }, [])
  const [top, setTop] = useState([])
  const authContext = useAuthContext()
  //redirect already logged in users
  if (authContext.auth.user.email) {
    return <Redirect to="/home" />
  }
  console.log("top", top)
  return (
    <div>
      <Jumbotron
        style={{
          background: "#FFD700",
          color: "#242a36",
          height: "140px",
          paddingTop: "20px",
          textAlign: "center",
        }}
        className="text-center"
      >
        <h1>Welcome to Flash Fund</h1>
      </Jumbotron>
      <h1 className="text-center">Top Campaigns</h1>
      <CampaignList cards={top} />
    </div>
  )
}

export default Landing
