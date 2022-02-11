import React from 'react';

const Details = ({user, getId}) => {
    const {id, name, username, email, address, phone, website, company} = user;

    return (
        <div className={'details'}>
            <h2>{name}</h2>
            <h4>Username: {username}</h4>
            <h4>Email: {email}</h4>
            <h4>Address:</h4>
            <h5>{address.suite}. {address.street} Str.</h5>
            <h5>{address.zipcode} {address.city}</h5>
            <h5>Geolocation: {address.geo.lat}, {address.geo.lng}</h5>
            <h4>Phone: {phone}</h4>
            <h4>Website: {website}</h4>
            <h4>Company:</h4>
            <h5>{company.name}</h5>
            <h5>{company.catchPhrase}</h5>
            <h5>{company.bs}</h5>
            <button onClick={() => getId(id)}>Get posts</button>
        </div>
    );
};

export default Details;