'use client';

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {Button, TextField} from "@radix-ui/themes";

const NewIssuePage = () => {
    return (
        <div className='max-w-lg space-y-3'>
            <TextField.Root placeholder="Title">
                <TextField.Slot/>
            </TextField.Root>
            <SimpleMDE />
            <Button>Submit New Issue</Button>
        </div>
    )
}

export default NewIssuePage;