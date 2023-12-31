import { Link, useParams } from 'react-router-dom';
import './Navbar.css';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BiHomeHeart } from 'react-icons/bi'
import { IoLogoOctocat } from 'react-icons/io5'
import { IoIosCall } from 'react-icons/io'
import { IoMdListBox } from 'react-icons/io'
import { HiBuildingOffice } from 'react-icons/hi2'






function Navbar() {


  // const value = useContext(Context)


  const [data, setData] = useState([])

  const [users, setUsers] = useState()

  const params = useParams()


  useEffect(() => {




    axios.get(`http://localhost:5000/cadastro`)
      .then((response) => {
        console.log('navbar',response.data)
        setData(response.data)


      })
    


  },[])



  const id = localStorage.getItem('id')


  return (

    <section>


      <nav className="navbar navbar-expand-lg nav-style">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src='./img/costs_logo.png' height={'50px'}></img></a>
          <button className="navbar-toggler toggler-style1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon toggler-style2" ></span>
          </button>
          <div className="collapse navbar-collapse navbar-positioning" id="navbarNav">



            <ul className="navbar-nav ul-style">





              <li className="nav-item">
                <Link className="nav-link anchor-style" to={`/${id}`}><BiHomeHeart className='icon-navbar'></BiHomeHeart> Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link anchor-style" to="/contato"><IoIosCall className='icon-navbar'></IoIosCall> Contato</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link anchor-style" to="/companhia"><HiBuildingOffice className='icon-navbar'></HiBuildingOffice> Companhia</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link anchor-style" to='/projeto'><IoMdListBox className='icon-navbar'></IoMdListBox> Projeto</Link>
              </li>


              {/* {data.map((items) => {
             return <li className="nav-item"> */}

             {localStorage.getItem('user') ? (
              <li>
                < Link className="nav-link anchor-style" to={`/users/${localStorage.getItem('user')}`
                }> <IoLogoOctocat className='icon-navbar'></IoLogoOctocat> {localStorage.getItem('user')}</Link>

              </li>

             ):
             <li>
             < Link className="nav-link anchor-style" to={`/users/${localStorage.getItem('user')}`
             }> <IoLogoOctocat className='icon-navbar'></IoLogoOctocat> Login</Link>

           </li>
             }
              

              {/* })} */}




            </ul>

          </div>
        </div>

      </nav >

    </section>

  )
}



// eslint-disable-next-line no-undef
export default Navbar;

