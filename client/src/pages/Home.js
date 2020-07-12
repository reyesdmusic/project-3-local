import React, { useContext, useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';

// import context for global state
import UserInfoContext from '../utils/UserInfoContext';

import * as API from '../utils/API';

function Home() {

    const [friendsArray, setFriendsArray] = useState([]);
    const [allFriendsMediaState, setAllFriendsMediaState] = useState([]);

    let allFriendsMediaArray = [];
    
    
    // get whole userData state object from App.js
    const userData = useContext(UserInfoContext);

    useEffect(() => {
        // if (!userData || !userData.friends) {
        //     return
        // }
       console.log("mounted")
       console.log("USER DATA INSIDE USE EFFECT", userData)
        userData.friends.map(friend => {
            console.log("this is friend.friendUSername", friend.friendUsername)
            
            API.getUser(friend.friendUsername)
                .then(result => {
                //   if ( friendsArray.some((user) => user.username === result.data.username) ) {
                //       return
                //   }
                // console.log("friends array in loop", friendsArray)
                // const newFriendsArray = friendsArray;
                // newFriendsArray.push(result.data)
                setFriendsArray(friendsArray => [...friendsArray, result.data])

                // allFriendsMediaArray.push(result.data)
                

              console.log(result.data.savedBooks)

              if (result.data.savedBooks.length > 0) {

                result.data.savedBooks.map(savedBook => {
                  
                  allFriendsMediaArray.push(savedBook)

                })
                

                console.log("hey here's a whole savedBooks array: ", result.data.savedBooks)
              }
              })
               
        });

        
        console.log("this is all friends media array after the push: ", allFriendsMediaArray)

        // friendsArray.map(friend => {
        //   friend.savedMusic ?
        //   (friend.savedMusic.map(savedMusic =>

        //   setAllFriendsMediaArray(allFriendsMediaArray => [...allFriendsMediaArray, savedMusic]))) : null
        //   })


        //   friendsArray.map(friend => {
        //     friend.savedMovies ?
        //     (friend.savedMovies.map(savedMovie =>
  
        //     setAllFriendsMediaArray(allFriendsMediaArray => [...allFriendsMediaArray, savedMovie]))) : null
        //     })

        //     friendsArray.map(friend => {
        //       friend.savedGames ?
        //       (friend.savedGames.map(savedGame =>
    
        //       setAllFriendsMediaArray(allFriendsMediaArray => [...allFriendsMediaArray, savedGame]))) : null
        //       })

        //       friendsArray.map(friend => {
        //         friend.savedBooks ?
        //         (friend.savedBooks.map(savedBook =>
      
        //         setAllFriendsMediaArray(allFriendsMediaArray => [...allFriendsMediaArray, savedBook]))) : null
        //         })


        //         console.log("this is all your friend's saved media: " + allFriendsMediaArray)
    }, [userData, userData.friends]);




    

    // DELETE BOOK FUNCTION THAT COULD BE MODIFIED TO REMOVE FRIENDS
    // create function that accepts the book's mongo _id value as param and deletes the book from the database
    // const handleDeleteBook = (bookId) => {
    //     // get token
    //     const token = AuthService.loggedIn() ? AuthService.getToken() : null;

    //     if (!token) {
    //         return false;
    //     }
    //     API.deleteBook(bookId, token)
    //         // upon succes, update user data to reflect book change
    //         .then(() => userData.getUserData())
    //         .catch((err) => console.log(err));
    // };

    return (
        <>
            <Jumbotron fluid className='text-light bg-dark'>

                <Container>
                    <h1>Viewing friends Media!</h1>
                </Container>

            </Jumbotron>

            <Container>
                <h2>
                    My Feed
                </h2>
                <CardColumns>
                    {friendsArray.map(friend => {
                      // if (friend.savedMusic === []) {
                      //   return
                      // }
                      

                        return (friend.savedMusic ?
                          (friend.savedMusic.map(savedMusic =>
                            <Card key={friend._id} border='dark'>
                                {friend.picture ? <Card.Img src={friend.picture} alt={friend.username} variant='top' /> : null}
                                <Card.Body>
                                <Card.Text>{friend.username}</Card.Text>
                                <Card.Img src={savedMusic.image} alt={savedMusic.artist} variant='top' />
                                    <Card.Title>{savedMusic.title}</Card.Title>
                                    
                                    <p className='small'>Artist: {savedMusic.artist}</p>
                 
                 <ReactAudioPlayer
                   src={savedMusic.preview}
                     controls
                       />
                                    <Button className='btn-block btn-danger' >
                                        Comment
                                            </Button>
                                </Card.Body>
                            </Card>)

                          ) : null

                        

                          
                        );
                    })
                    }
                    
                    {friendsArray.map(friend => {
                      // if (friend.savedMusic === []) {
                      //   return
                      // }
                      

                        return (friend.savedMovies ?
                          (friend.savedMovies.map(savedMovie =>
                            <Card key={friend._id} border='dark'>
                                {friend.picture ? <Card.Img src={friend.picture} alt={friend.username} variant='top' /> : null}
                                <Card.Body>
                                <Card.Text>{friend.username}</Card.Text>
                  
                                {savedMovie.image ? <Card.Img src={savedMovie.image} alt={`The cover for ${savedMovie.title}`} variant='top' /> : null}
                                    <Card.Title>{savedMovie.title}</Card.Title>
                  <p className='small'>Released: {savedMovie.released}</p>
                  <p className='small'>Actors: {savedMovie.actors}</p>
                  <p className='small'>Director: {savedMovie.director}</p>
                  <p className='small'>Genre: {savedMovie.genre}</p>
                  <p className='small'>Plot: {savedMovie.plot}</p>
                  <p className='small'>Rated: {savedMovie.rated}</p>
                  <p className='small'>Runtime: {savedMovie.runtime}</p>
                                    <Button className='btn-block btn-danger' >
                                        Comment
                                            </Button>
                                </Card.Body>
                            </Card>)

                          ) : null

                        

                          
                        );
                    })
                    }

{friendsArray.map(friend => {
                      // if (friend.savedMusic === []) {
                      //   return
                      // }
                      

                        return (friend.savedBooks ?
                          (friend.savedBooks.map(savedBook =>
                            <Card key={friend._id} border='dark'>
                                {friend.picture ? <Card.Img src={friend.picture} alt={friend.username} variant='top' /> : null}
                                <Card.Body>
                                <Card.Text>{friend.username}</Card.Text>
                                {savedBook.image ? <Card.Img src={savedBook.image} alt={`The cover for ${savedBook.title}`} variant='top' /> : null}
                                    <Card.Title>{savedBook.title}</Card.Title>
                                    <p className='small'>Authors: {savedBook.authors}</p>
                                    <Card.Text>{savedBook.description}</Card.Text>
                                    <Button className='btn-block btn-danger' >
                                        Comment
                                            </Button>
                                </Card.Body>
                            </Card>)

                          ) : null

                        

                          
                        );
                    })
                    }

{friendsArray.map(friend => {
                      // if (friend.savedMusic === []) {
                      //   return
                      // }
                      

                        return (friend.savedGames ?
                          (friend.savedGames.map(savedGame =>
                            <Card key={friend._id} border='dark'>
                                {friend.picture ? <Card.Img src={friend.picture} alt={friend.username} variant='top' /> : null}
                                <Card.Body>
                                <Card.Text>{friend.username}</Card.Text>
                                {savedGame.image ? <Card.Img src={savedGame.image} alt={`The image for ${savedGame.title}`} variant='top' /> : null}
                                    <Card.Title>{savedGame.title}</Card.Title>     
                                    <p className='small'>Developer: {savedGame.developer}</p>
                                   <Card.Text>{savedGame.description}</Card.Text>
                                    
                                    <Button className='btn-block btn-danger' >
                                        Comment
                                            </Button>
                                </Card.Body>
                            </Card>)

                          ) : null

                        

                          
                        );
                    })
                    }
                </CardColumns>
            </Container>
        </>
    );
}

export default Home;