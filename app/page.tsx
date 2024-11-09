import IssueSummary from "@/app/IssueSummary";
import IssueChart from "@/app/IssueChart";
import prisma from "@/prisma/client";
import {Status} from "@prisma/client";


export default async function HomePage({searchParams}: { searchParams: { page: string } }) {
    const issues = await prisma.issue.groupBy({
        by: ['status'],
        _count: {
            status: true
        }
    });

    const summary = Object.assign({}, ...issues.map(i => ({[i.status]: i._count.status})));

    return (
        <IssueChart
            open={summary[Status.OPEN]}
            closed={summary[Status.CLOSED]}
            inProgress={summary[Status.IN_PROGRESS]}/>
    );
}
