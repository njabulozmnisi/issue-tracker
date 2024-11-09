'use client';

import React from 'react';
import {Card} from "@radix-ui/themes";
import {ResponsiveContainer, BarChart, XAxis, YAxis, Bar} from "recharts"
import {Status} from "@prisma/client";


interface Props {
    open: number,
    inProgress: number,
    closed: number,
}

const IssueChart = ({open, inProgress, closed}: Props) => {
    const data: {
        label: string,
        value: number,
        status: Status
    }[] = [
        {label: "Open Issues", value: open, status: Status.OPEN},
        {label: "In-progress Issues", value: inProgress, status: Status.IN_PROGRESS},
        {label: "Closed Issues", value: closed, status: Status.CLOSED},
    ]

    return (
        <Card>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="label" />
                    <YAxis/>
                    <Bar dataKey="value" barSize="60" style={{ fill: 'var(--accent-9 )'}} />
                </BarChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default IssueChart;