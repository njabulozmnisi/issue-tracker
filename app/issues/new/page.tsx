'use client';

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from "react-hook-form";
import {Button, Callout, TextField, Text} from "@radix-ui/themes";
import axios from "axios";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {createIssueSchemas} from "@/app/validationSchemas";
import {z} from 'zod';

type IssueForm = z.infer<typeof createIssueSchemas>

const NewIssuePage = () => {
    const router = useRouter()
    const {register, control, handleSubmit, formState: {errors}} = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchemas)
    });
    const [error, setError] = useState('');

    return (
        <div className="max-w-lg">
            {
                error && (
                    <Callout.Root color="red" className="mb-5">
                        <Callout.Text>{error}</Callout.Text>
                    </Callout.Root>)
            }
            <form
                className='space-y-3'
                onSubmit={handleSubmit(async (data) => {
                    try {
                        await axios.post("/api/issues", data);
                        router.push("/issues");

                    } catch (error) {
                        setError('An unexpected error occurred.');
                    }
                })}>
                <TextField.Root placeholder="Title" {...register('title')}>
                    <TextField.Slot/>
                </TextField.Root>
                {errors.title && <Text color="red" as="p">{errors.title.message}</Text>}
                <Controller name="description"
                            control={control}
                            render={({field}) => <SimpleMDE placeholder="description" {...field}/>}
                />
                {errors.description && <Text color="red" as="p">{errors.description.message}</Text>}
                <Button>Submit New Issue</Button>
            </form>
        </div>
    )
}

export default NewIssuePage;