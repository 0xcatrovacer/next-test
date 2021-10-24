import React from "react";
import styles from "../../styles/Notes.module.css";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: {
            users: data,
        },
    };
};

function Notes({ users }) {
    return (
        <div>
            <h1>All Notes</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <a className={styles.single}>
                        <h3>{user.name}</h3>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Notes;
