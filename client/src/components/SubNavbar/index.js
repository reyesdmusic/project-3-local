import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import "./style.css";
import UserInfoContext from '../../utils/UserInfoContext';
import AuthService from '../../utils/auth';



function SubNavbar({ cb }) {


    const userData = useContext(UserInfoContext);

    useEffect(() => {
        userData.getUserData();
    }, []);



    return (



        <div className="text-center" id="sub-navbar-menu">
            <Table>  
                <tr id="table-row">
                    <td id="sub-navbar-th"><button  id="side-bar-li" onClick={() => cb("all")}>ALL</button></td>
                    <td id="sub-navbar-th"><button  id="side-bar-li" onClick={() => cb("music")}>MUSIC</button></td>
                    <td id="sub-navbar-th"><button  id="side-bar-li" onClick={() => cb("movie")}>MOVIES</button></td>
                    <td id="sub-navbar-th"><button  id="side-bar-li" onClick={() => cb("game")}>GAMES</button></td>
                    <td id="sub-navbar-th"><button  id="side-bar-li" onClick={() => cb("book")}>BOOKS</button></td>
                </tr>
                
            </Table>
{/* 
            <ul>
                <li id="side-bar-li"><a id="side-bar-a" href="/search-user">ALL</a></li>
                <li id="side-bar-li"><a id="side-bar-a" href="/search-user">MUSIC</a></li>
                <li id="side-bar-li"><a id="side-bar-a" href="/search_books">MOVIES</a></li>
                <li id="side-bar-li"><a id="side-bar-a" href="/search_music">GAMES</a></li>
                <li id="side-bar-li"><a id="side-bar-a" href="/search_movies">BOOKS</a></li>

            </ul> */}
        </div>










    );
}

export default SubNavbar;