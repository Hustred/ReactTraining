import React, { Fragment, memo } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

interface Profile {
    id: number;
    profileName: string;
    starsCount: number;
}

interface LeaderboardTableProps {
    profiles: Profile[];
}

const LeaderboardTable = memo(({ profiles }: LeaderboardTableProps) => {
    if (profiles) {
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Stars</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {profiles.map((profile) => {
                    return (
                        <TableRow key={profile.id}>
                            <TableCell>{profile.id}</TableCell>
                            <TableCell>{profile.profileName}</TableCell>
                            <TableCell>{profile.starsCount}</TableCell>
                            </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        );
    }
    return <Fragment />;
});

export default LeaderboardTable;