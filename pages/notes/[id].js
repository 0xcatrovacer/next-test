import React from "react";

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map((user) => {
        return {
            params: { id: user.id.toString() },
        };
    });

    return {
        paths: paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: { user: data },
    };
};

const Details = ({ user }) => {
    return (
        <div>
            <h1>Details Page</h1>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.webite}</p>
        </div>
    );
};

export default Details;
