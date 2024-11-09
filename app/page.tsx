import IssueSummary from "@/app/IssueSummary";
import IssueChart from "@/app/IssueChart";
import LatestIssues from "@/app/LatestIssues";
import {Flex, Grid} from "@radix-ui/themes";
import prisma from "@/prisma/client";
import {Status} from "@prisma/client";
import {Metadata} from "next";


export default async function HomePage() {
    const issues = await prisma.issue.groupBy({
        by: ['status'],
        _count: {
            status: true
        }
    });

    const summary = Object.assign({}, ...issues.map(i => ({[i.status]: i._count.status})));

    return (
        <Grid columns={{initial: "1", md: "2"}} gap="5">
            <Flex direction="column" gap="5">
                <IssueSummary
                    open={summary[Status.OPEN]}
                    closed={summary[Status.CLOSED]}
                    inProgress={summary[Status.IN_PROGRESS]}/>
                <IssueChart
                    open={summary[Status.OPEN]}
                    closed={summary[Status.CLOSED]}
                    inProgress={summary[Status.IN_PROGRESS]}/>
            </Flex>
            <LatestIssues/>
        </Grid>


    );
}

export const metadata: Metadata = {
    title: "Issue Tracker - Dashboard",
    description: "View a summary of project issues",
}
