import React from "react";
import Link from "next/link";

import { useEffect } from "react";
import { useRouter } from "next/router";

function NotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);

    return (
        <div className="notFound">
            <h1>Oooops..</h1>
            <h2>The page could not be found</h2>
            <p>
                Go back to the
                <Link href="/">
                    <a> Homepage</a>
                </Link>
            </p>
        </div>
    );
}

export default NotFound;
