import React, { useState,useEffect } from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";
import http from "../../services/http-services"

const servicesData = [
  {
    id: 1,
    icon: "images/service-1.svg",
    title: "UI/UX design",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "Web Development",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "images/service-3.svg",
    title: "Photography",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    color: "#F97B8B",
    contentColor: "light",
  },
];

function Services() {
  const [servicesData,setServicesData]=useState([])
  const [IsLoading,setIsLoading]=useState(false)

  const getServices=async ()=>{
    let data=await http.get('services')
    return data
  }

  useEffect(() => {
    setIsLoading(true)
    const fetchData=async()=>{
      let data=await getServices()
      console.log(data)
      setServicesData(data.Data.data)
      setIsLoading(false)
    }
    fetchData()

  },[]);

  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Services" />
        <div className="row fix-spacing">
          {!IsLoading?servicesData.map((service) => (
            <div className="col-md-4" key={service._id}>
              <Service service={service} />
            </div>
          )):"No Data"}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            Looking for a custom job?{" "}
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click here
            </Link>{" "}
            to contact me! 👋
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
