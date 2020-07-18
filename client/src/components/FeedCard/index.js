import React, { useContext, useState, useEffect, useCallback } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button, Col, Row } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';
import moment from 'moment';
import LikeButton from '../LikeButton';
import CommentComponent from '../../components/CommentComponent'
import './style.css';

function FeedCard(props) {
    if (props.mediaType === 'book') {
        const media = props.media;
        return (
            <Card key={media._id} border='dark'>
                <Card.Body>
                    {media.picture
                        ? <Card.Img id="profile-pic" src={media.picture} alt={media.username} variant='top' />
                        : null}
                    <Card.Title>{media.username} saved this {props.mediaType}
                        <p className='small'>{moment(media.createdAt).calendar()}</p>
                        <br />
                    </Card.Title>
                    {media.image
                        ? <div id="center-wrap">
                            <Card.Img id="media-pic" src={media.image} alt={`The cover for ${media.title}`} variant='top' />
                        </div>
                        : null}
                    <div id="center-wrap">
                        <br />
                        <Card.Title>{media.title}
                            <p className='small'>{media.authors.length > 1 ? 'Authors' : 'Author'}: {media.authors}</p>
                        </Card.Title>
                    </div>
                    <LikeButton mediaLikes={media.likes}
                        mediaType={media.mediaType}
                        ownerId={media.userId}
                        mediaId={media._id}
                        title={media.title}
                        cb={props.cb}
                        userData={props.userData}
                    />
                    <h6>Comments</h6>
                    {media.comments.map(comment => {
                        return(
                        <p>{comment.commenterUsername}:{comment.content}</p>
                        )
                    })}
                    <CommentComponent
                        mediaId={media._id}
                        mediaType={media.mediaType}
                        title={media.title}
                        ownerId={media.userId}
                        commenterUsername={props.userData.username} />
                </Card.Body>
            </Card>
        )
    } else if (props.mediaType === 'music') {
        const media = props.media;
        return (
            <Card key={media._id} border='dark'>
                <Card.Body>
                    {media.picture
                        ? <Card.Img id="profile-pic" src={media.picture} alt={media.username} variant='top' />
                        : null}
                    <Card.Title>{media.username} saved this {props.mediaType}
                        <p className='small'>{moment(media.createdAt).calendar()}</p>
                        <br />
                    </Card.Title>
                    {media.image
                        ? <div id="center-wrap">
                            <Card.Img id="media-pic" src={media.image} alt={media.artist} variant='top' />
                        </div>
                        : null}
                    <div id="center-wrap">
                        <br />
                        <Card.Title>{media.title}
                            <p className='small'>Artist: {media.artist}</p>
                        </Card.Title>
                        <ReactAudioPlayer
                            id="music-player"
                            src={media.preview}
                            controls
                        />
                    </div>
                    <LikeButton mediaLikes={media.likes}
                        mediaType={media.mediaType}
                        ownerId={media.userId}
                        mediaId={media._id}
                        title={media.title}
                        cb={props.cb}
                        userData={props.userData}
                    />
                    <h6>Comments</h6>
                    {media.comments.map(comment => {
                        return(
                        <p>{comment.commenterUsername}:{comment.content}</p>
                        )
                    })}
                    <CommentComponent
                        mediaId={media._id}
                        mediaType={media.mediaType}
                        title={media.title}
                        ownerId={media.userId}
                        commenterUsername={props.userData.username} />
                </Card.Body>
            </Card>
        );
    } else if (props.mediaType === 'movie') {
        const media = props.media;
        return (
            <Card key={media._id} border='dark'>
                <Card.Body>
                    {media.picture
                        ? <Card.Img id="profile-pic" src={media.picture} alt={media.username} variant='top' />
                        : null}
                    <Card.Title>{media.username} saved this {props.mediaType}
                        <p className='small'>{moment(media.createdAt).calendar()}</p>
                        <br />
                    </Card.Title>
                    {media.image
                        ? <div id="center-wrap">
                            <Card.Img id="media-pic" src={media.image} alt={`The cover for ${media.title}`} variant='top' />
                        </div>
                        : null}
                    <div id='center-wrap'>
                        <br />
                        <Card.Title>{media.title}
                            <p className='small'>Director: {media.director}</p>
                        </Card.Title>
                    </div>
                    <LikeButton mediaLikes={media.likes}
                        mediaType={media.mediaType}
                        ownerId={media.userId}
                        mediaId={media._id}
                        title={media.title}
                        cb={props.cb}
                        userData={props.userData}
                    />
                    <h6>Comments</h6>
                    {media.comments.map(comment => {
                        return(
                        <p>{comment.commenterUsername}:{comment.content}</p>
                        )
                    })}
                    <CommentComponent
                        mediaId={media._id}
                        mediaType={media.mediaType}
                        title={media.title}
                        ownerId={media.userId}
                        commenterUsername={props.userData.username} />
                </Card.Body>
            </Card>
        );
    } else if (props.mediaType === 'game') {
        const media = props.media;
        return (
            <Card key={media._id} border='dark'>
                <Card.Body>
                    {media.picture
                        ? <Card.Img id="profile-pic" src={media.picture} alt={media.username} variant='top' />
                        : null}
                    <Card.Title>{media.username} saved this {props.mediaType}
                        <p className='small'>{moment(media.createdAt).calendar()}</p>
                        <br />
                    </Card.Title>
                    {media.image
                        ? <div id="center-wrap">
                            <Card.Img id="media-pic" src={media.image} alt={`The image for ${media.title}`} variant='top' />
                        </div>
                        : null}
                    <div id="center-wrap">
                        <br />
                        <Card.Title>{media.title}
                            <p className='small'>Developer: {media.developer}</p>
                        </Card.Title>
                    </div>
                    <LikeButton mediaLikes={media.likes}
                        mediaType={media.mediaType}
                        ownerId={media.userId}
                        mediaId={media._id}
                        title={media.title}
                        cb={props.cb}
                        userData={props.userData}
                    />
                    <h6>Comments</h6>
                    {media.comments.map(comment => {
                        return(
                        <p>{comment.commenterUsername}:{comment.content}</p>
                        )
                    })}
                    <CommentComponent
                        mediaId={media._id}
                        mediaType={media.mediaType}
                        title={media.title}
                        ownerId={media.userId}
                        commenterUsername={props.userData.username} />
                </Card.Body>
            </Card>
        );
    }
}

export default FeedCard;