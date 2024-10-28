"use client"

import {Select} from '@radix-ui/themes';
import React from 'react';
import {Status} from "@prisma/client";
import {useRouter} from "next/navigation";

const statuses: { label: string, value?: Status }[] = [
    {label: 'All'},
    {label: 'Open', value: 'OPEN'},
    {label: 'In Progress', value: 'IN_PROGRESS'},
    {label: 'Closed', value: 'CLOSED'},
]

const IssueStatusFilter = () => {
    const router = useRouter();

    return (
        <Select.Root onValueChange={(status) => {
            const cStatus = status === 'All' ? '' : status;
            const query = cStatus ? `?status=${cStatus}` : "";
            router.push(`/issues/list/${query}`);
        }}>
            <Select.Trigger placeholder="Filter by status..."></Select.Trigger>
            <Select.Content>
                {statuses.map((status) => (
                    <Select.Item key={status.value || 'All'} value={status.value || 'All'}>{status.label}</Select.Item>
                ))}
            </Select.Content>
        </Select.Root>
    )
};

export default IssueStatusFilter;