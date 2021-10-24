import React from "react";

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = res.json();

    const paths = data.map((user) => {
        return {
            params: { id: user.id.toString() },
        };
    });

    return {
        paths: [],
    };
};

const Details = () => {
    return (
        <div>
            <h1>Details Page</h1>
        </div>
    );
};

export default Details;
