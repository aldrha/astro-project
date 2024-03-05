import { type APISpacesXResponse, type Doc } from "../types/api";


export const getLaunches = async () => {
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: "asc",
                },
            },
            limit: 12,
        }),
    });

    const { docs: launches } = (await res.json()) as APISpacesXResponse;
    return launches;
};

export const getLaunchBy = async ({ id }: { id: string; }) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${ id }`);

    const launch = (await res.json()) as Doc;
    return launch;
}

